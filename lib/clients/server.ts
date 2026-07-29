import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getClientBySlug as getLocalClientBySlug } from "@/data/clients";
import { getAirtableClientByHost, getAirtableClientBySlug } from "@/lib/airtable";
import {
  getDefaultClient,
  getClientByHost as getLocalClientByHost,
  getDeploymentClient,
  getDeploymentClientSlug,
} from "@/lib/clients";
import { isLocalHostname, normalizeHostname } from "@/lib/domains";

export type ClientSlugSearchParams = {
  client?: string;
  artist?: string;
};

export function getRequestedClientSlug(searchParams?: ClientSlugSearchParams) {
  return searchParams?.client ?? searchParams?.artist ?? null;
}

export async function getRequestHostname() {
  const requestHeaders = await headers();
  return normalizeHostname(
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  );
}

export async function resolveRequestClient(slug?: string | null) {
  const hostname = await getRequestHostname();
  const normalizedSlug = slug?.toLowerCase() ?? null;
  const isLocal = isLocalHostname(hostname);
  const deploymentSlug = getDeploymentClientSlug();
  const localHostClient = getLocalClientByHost(hostname);
  const shouldPreferLocalHostClient =
    localHostClient?.slug === "djslyd" || localHostClient?.slug === "djslyd-en";

  return (
    (isLocal ? getLocalClientBySlug(normalizedSlug) : null) ??
    (isLocal && !normalizedSlug ? getDefaultClient() : null) ??
    (!isLocal && shouldPreferLocalHostClient ? localHostClient : null) ??
    (await getAirtableClientByHost(hostname)) ??
    (isLocal ? await getAirtableClientBySlug(normalizedSlug) : null) ??
    localHostClient ??
    (isLocal ? getLocalClientBySlug(normalizedSlug) : null) ??
    (!isLocal && deploymentSlug
      ? (await getAirtableClientBySlug(deploymentSlug)) ?? getDeploymentClient()
      : null) ??
    (isLocal ? getDefaultClient() : null)
  );
}

export async function getRequiredRequestClient(slug?: string | null) {
  const client = await resolveRequestClient(slug);

  if (!client) {
    notFound();
  }

  return client;
}

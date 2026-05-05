import { arthurChapsClient } from "@/data/clients/arthur-chaps";
import { djslydClient } from "@/data/clients/djslyd";
import { silverDjClient } from "@/data/clients/silver-dj";
import { yoruboyDjClient } from "@/data/clients/yoruboy-dj";
import type { ClientConfig } from "@/data/clients/types";

export const clientRegistry = [
  djslydClient,
  silverDjClient,
  yoruboyDjClient,
  arthurChapsClient,
] as const;

export type ClientSlug = (typeof clientRegistry)[number]["slug"];

const clientsBySlug = new Map<string, ClientConfig>(
  clientRegistry.map((client) => [client.slug, client])
);

export function getClients(): ClientConfig[] {
  return [...clientRegistry];
}

export function getClientBySlug(slug?: string | null): ClientConfig | null {
  if (!slug) return null;

  return clientsBySlug.get(slug.toLowerCase()) ?? null;
}

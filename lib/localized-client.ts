import { getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";

/** Version du client dans la langue demandée (ex. dj-killerz + « en » → dj-killerz-en). */
export function getLocalizedClient(client: ClientConfig, locale?: string) {
  const normalizedLocale = locale?.toUpperCase();

  if (
    !normalizedLocale ||
    client.languageSwitch?.some((item) => item.active && item.label.toUpperCase() === normalizedLocale)
  ) {
    return client;
  }

  const localizedSwitch = client.languageSwitch?.find(
    (item) => item.label.toUpperCase() === normalizedLocale
  );
  const localizedSlug =
    localizedSwitch?.clientSlug ??
    (localizedSwitch?.href
      ? new URL(localizedSwitch.href, "https://presskit.local").searchParams.get("client")
      : null);

  return getClientBySlug(localizedSlug) ?? client;
}

import { arthurChapsClient } from "@/data/clients/arthur-chaps";
import {
  djMackClient,
  djMackEnClient,
} from "@/data/clients/dj-mack";
import { djFloClient, djFloEnClient } from "@/data/clients/dj-flo";
import { djslydClient, djslydEnClient } from "@/data/clients/djslyd";
import { gdcClient } from "@/data/clients/gdc";
import { paulKeranneClient } from "@/data/clients/paul-keranne";
import { silverDjClient } from "@/data/clients/silver-dj";
import { soyumiClient } from "@/data/clients/soyumi";
import { yoruboyDjClient } from "@/data/clients/yoruboy-dj";
import type { ClientConfig } from "@/data/clients/types";

export const clientRegistry = [
  djslydClient,
  djslydEnClient,
  silverDjClient,
  soyumiClient,
  yoruboyDjClient,
  paulKeranneClient,
  arthurChapsClient,
  djFloClient,
  djFloEnClient,
  djMackClient,
  djMackEnClient,
  gdcClient,
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

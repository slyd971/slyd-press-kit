import localFont from "next/font/local";
import type { ClientConfig } from "@/data/clients/types";
import styles from "./presentation.module.css";

// No preload: other clients never request these fonts. The variables are only
// attached to the main element of the explicitly enabled Sly'd presentation.
const display = localFont({
  src: "./fonts/barlow-condensed-bold.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
  preload: false,
  variable: "--slyd-font-display",
});
const body = localFont({
  src: [
    { path: "./fonts/dm-sans-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/dm-sans-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/dm-sans-bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  variable: "--slyd-font-body",
});

// Keyed on the slug, not on `presentation`: in production the FR client comes
// from Airtable, which has no presentation field.
export function isSlydPoster(client: ClientConfig) {
  return client.slug === "djslyd" || client.slug === "djslyd-en";
}

export function getSlydClubsTitle(client: ClientConfig) {
  return client.slug === "djslyd-en" ? "SELECTED REFERENCES" : "QUELQUES RÉFÉRENCES";
}

export function getSlydPresentationClass(client: ClientConfig) {
  return isSlydPoster(client)
    ? `${styles.poster} ${display.variable} ${body.variable}`
    : "";
}

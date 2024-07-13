import { browser } from "$app/environment";
import { onMount } from "svelte";

export let reduceMotion = false;

if (browser) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduceMotion = mediaQuery.matches;

  mediaQuery.addEventListener("change", (event) => {
    reduceMotion = event.matches;
  });
}
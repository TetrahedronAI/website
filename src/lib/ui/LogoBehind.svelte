<script lang="ts">
  import { reduceMotion } from "$lib";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let ready = reduceMotion;
  onMount(() => (ready = true));
</script>

<div>
  <div
    class="w-full h-screen relative -z-10 place-items-center
    tiny:grid hidden"
  >
    {#if ready}
      <img
        src="/imgs/favicon.svg"
        alt="Tetrahedron AI Logo"
        class="h-5/6 max-w-[screen] absolute top-0 blur-xl"
        in:fly={{ y: -30, duration: 1000 }}
      />
      <div
        class="absolute top-[90vh] left-0 h-[20vh] w-4/6 rounded-[100%] mx-[16.67%]
      bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50"
        in:fly={{ y: 30, duration: 1000 }}
      ></div>
    {/if}
  </div>

  {#if ready}
    <div class="w-full h-screen top-0 absolute"
    in:fade={{ duration: 500, delay: 600 }}>
      <slot />
    </div>
  {/if}
</div>

<script lang="ts">
  import { onMount } from "svelte";

  let textNode: HTMLSpanElement;

  function* cycle(...items: any[]) {
    while (true) yield* items;
  }

  onMount(() => {
    const texts = cycle(
      "a brighter future",
      "stopping climate change",
      "solving social problems",
      "the next generation",
      "everyone"
    );
    const recurse = async () => {
      const text = texts.next().value;
      for (let i = 0; i < text.length; i++) {
        textNode.innerHTML = text.slice(0, i + 1);
        await new Promise((r) => setTimeout(r, 80));
      }

      await new Promise((r) => setTimeout(r, 1900));

      for (let i = text.length; i > 0; i--) {
        textNode.innerHTML = text.slice(0, i - 1);
        await new Promise((r) => setTimeout(r, 80));
      }

      recurse();
    };

    recurse();
  });
</script>

<div
  class="absolute px-4 sm:px-8 h-screen flex-col flex pt-[20vh] tiny:pt-0 tiny:justify-center"
>
  <h1 class="opacity-80 text-4xl tiny:text-5xl sm:text-6xl max-w-[90vw]">
    <span>Developing <br class="tiny:hidden" />AI for</span><br />
    <span bind:this={textNode} /><span>.</span>
  </h1>
</div>

<script lang="ts">
  import { onMount } from "svelte";

  let textNode: HTMLSpanElement;

  function* cycle(...items: any[]) {
    while (true) yield* items;
  }

  onMount(() => {
    const texts = cycle("a brighter future", "the next generation", "everyone");
    const recurse = async () => {
      const text = texts.next().value;
      for (let i = 0; i < text.length; i++) {
        textNode.innerHTML = text.slice(0, i + 1);
        await new Promise((r) => setTimeout(r, 80));
      }

      await new Promise((r) => setTimeout(r, 2000));

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
  class="absolute left-8 mr-8 sm:left-24 h-screen flex-col flex justify-center"
>
  <h1 class="opacity-80 text-2xl tiny:text-4xl sm:text-6xl">
    <span>Developing AI for</span><br />
    <span bind:this={textNode}>a brighter future</span><span>.</span>
  </h1>
</div>

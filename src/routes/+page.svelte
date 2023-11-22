<script>
  import RightArrow from "$lib/icons/RightArrow.svelte";
</script>

<section
  class="absolute-top w-full h-screen saturate-0
  bg-gradient-to-b from-white to-black -z-50"
/>


<section
  class="absolute-top w-full h-screen -z-30"
  style="filter: url(#noiseFilter);
  mix-blend-mode: overlay;"
/>

<section class="grid place-items-center z-0">
  <div class="flex flex-col items-center justify-center gap-5">
    <h1
      class="text-7xl font-bold "
    >
      AI for a brighter future.
    </h1>
    <a href="/about">
      <button class="flex gap-2 bg-white items-center button lozenge">
        <h2 class="text-black text-2xl">Explore Our Work</h2>
        <RightArrow />
      </button>
    </a>
  </div>
</section>

<style lang="postcss">
  .absolute-top {
    @apply absolute top-0 left-0;
  }
</style>

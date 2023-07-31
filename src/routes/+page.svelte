<script>
  import Circles from "./landing/Circles.svelte";
  import LandingText from "./landing/LandingText.svelte";
</script>
<main class="w-full h-screen grid-center">
    <Circles />

    <section >
      <LandingText />
    </section>
    <section></section>
</main>

<style lang="postcss">
  section {
    @apply h-screen w-full;
  }
</style>
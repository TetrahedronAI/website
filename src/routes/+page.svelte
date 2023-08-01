<script>
  import Circles from "./landing/Circles.svelte";
  import LandingText from "./landing/LandingText.svelte";
</script>

<div class="grainy w-screen h-[200vh] absolute" />

<main class="w-screen">
  <section>
    <Circles />
    <LandingText />
  </section>
  <section class="grid-center">
    <div class="circle-container">
      <div class="blur-circle animate-float bg-cyan-400 mr-52 w-[30vw]" />
    </div>
    <div class="circle-container">
      <div class="blur-circle animate-float bg-purple-500 ml-52 w-[30vw]" />
    </div>
    
    <div class="content">
      Hello
    </div>
  </section>
</main>

<style lang="postcss">
  section {
    @apply h-screen w-full;

    .content {
      @apply z-30;
    }
  }

  .circle-container {
    @apply absolute grid place-items-center w-full h-full;
  }
</style>

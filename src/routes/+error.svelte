<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="grid-center w-screen h-screen">
  <div
    class="absolute m-auto w-96 -z-10 translate-y-24 translate-x-36 animate-float bg-purple-500 blur-circle motion-reduce:animate-none"
  />
  <div
    class="absolute m-auto w-96 -z-10 animate-float -translate-y-24 -translate-x-36 bg-cyan-400 blur-circle motion-reduce:animate-none"
  />
  <div class="text-center">
    <h1 class="font-bold text-5xl">Oops.</h1>
    <h2 class="text-3xl">
      <span>{$page.status}</span>
      <span>{$page.error?.message}</span>
    </h2>
  </div>
</main>

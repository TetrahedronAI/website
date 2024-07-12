<script lang="ts">
</script>

<div>
  <div class="w-full h-screen relative -z-10 grid place-items-center">
    <img
      src="/imgs/favicon.svg"
      alt="Tetrahedron AI Logo"
      class="h-5/6 max-w-[screen] absolute top-0 blur-xl"
    />
    <div
      class="absolute top-[90vh] left-0 h-[20vh] w-4/6 rounded-[100%] mx-[16.67%]
      bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50"
    ></div>
  </div>

  <div class="w-full h-screen top-0 absolute">
    <slot />
  </div>
</div>

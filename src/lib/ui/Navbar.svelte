<nav class="w-full fixed top-0 z-20
  flex justify-between items-center p-5
  text-2xl bg-gradient-to-b from-base to-transparent">
  <div>
    <h1>Tetrahedron</h1>
  </div>
  <div class="hidden sm:flex items-center gap-6">
    <h2>About</h2>
    <h2>Research</h2>
  </div>

  <div class="flex sm:hidden flex-col gap-1.5 hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<style lang="postcss">
  .hamburger {
    span {
      width: 30px;
      height: 3px;
      @apply bg-base-content;
    }
  }
</style>
<script lang="ts">
  import Navlinks from "./Navlinks.svelte";
  let hamburgerOpen = false;
</script>

<div
  id="nav"
  class="fixed flex justify-between backdrop-blur-sm px-4 py-2 w-screen z-40 h-16 items-center"
>
  <div class="w-screen h-16 absolute top-0 left-0 grainy opacity-40" />

  <div class="z-50">
    <a href="/">
      <picture>
        <source media="(min-width:640px)" srcset="/imgs/wordmark.svg" />
        <img src="/imgs/icon.svg" alt="Logo" height="56" width="56" />
      </picture>
    </a>
  </div>
  <div class="sm:mr-10">
    <div class="hidden sm:flex gap-10 text-lg">
      <Navlinks />
    </div>
    <button
      aria-label="Menu"
      type="button"
      class="grid-center aspect-square sm:hidden"
      on:click={() => (hamburgerOpen = !hamburgerOpen)}
    >
      <div class="menu {hamburgerOpen ? 'active' : ''}">
        <span />
        <span />
        <span />
      </div>
    </button>
    <div class="content">
      <div>
        <Navlinks />
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  #nav:has(.active) {
    @apply h-screen;
  }

  .menu {
    @apply flex flex-col gap-2 z-50 p-1 translate-y-1;

    span {
      @apply bg-gray-300 h-[3px] w-8 rounded-full transition duration-200 ease-in-out;
    }
  }

  .menu.active {
    span:first-of-type {
      transform: translateY(11px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-of-type {
      transform: translateY(-11px) rotate(-45deg);
    }
  }

  .content {
    @apply transition duration-300 ease-in-out text-center
        w-screen grid place-items-center h-screen z-40 backdrop-blur-sm
        fixed top-0 left-0 text-2xl bg-base bg-opacity-40;

    div {
      @apply flex flex-col gap-5 rounded-lg p-5;
    }
  }

  :has(.menu.active) .content {
    @apply opacity-100 pointer-events-auto scale-100;
  }

  :has(.menu:not(.active)) .content {
    @apply opacity-0 pointer-events-none scale-x-150 scale-y-110;
  }
</style>

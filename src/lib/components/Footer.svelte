<footer>
  <div>
    <img
      src="/imgs/icon.svg"
      alt="Tetrahedron AI Logo Icon"
      class="w-20 sm:mr-12 md:mr-24"
    />
  </div>
  <div>
    <h1>Products</h1>
    <a href="https://github.com/tetrahedronai/circle">CircleML</a>
  </div>
  <div>
    <h1>Legal</h1>
    <a href="/safety">Safety Policy</a>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply flex justify-center sm:gap-8 px-14
    md:gap-36 w-screen items-start py-5
    bg-black bg-opacity-20;

    div {
      @apply flex flex-col items-start;

      h1 {
        @apply text-2xl font-bold;
      }
    }
  }
</style>

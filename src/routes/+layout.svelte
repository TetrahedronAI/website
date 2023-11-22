<script lang="ts">
  import "../app.postcss";
  import Footer from "../lib/Footer.svelte";
  import Navbar from "../lib/Navbar.svelte";
</script>

<Navbar />
<slot />
<Footer />

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="0">
  <filter id="noiseFilter">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.6"
      numOctaves="2"
      stitchTiles="stitch"
    />
  </filter>
</svg>

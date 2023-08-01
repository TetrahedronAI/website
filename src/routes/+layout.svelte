<script>
  import Footer from "$lib/components/Footer.svelte";
  import "../app.postcss";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<Navbar />
<slot />
<Footer />

<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="grainy">
    <feTurbulence type="turbulence" baseFrequency="0.4" />
  </filter>
</svg>

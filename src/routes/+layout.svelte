<script lang="ts">
  import Navbar from "$lib/ui/Navbar.svelte";
  import "../app.postcss";

  // import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  // injectSpeedInsights();
</script>

<Navbar />
<slot />

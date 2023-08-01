<script lang="ts">
  import Circles from "./landing/Circles.svelte";
  import LandingText from "./landing/LandingText.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import { fly } from "svelte/transition";

  let aboutNode: HTMLElement;
  let projectsNode: HTMLDivElement;

  interface Project {
    url: string;
    name: string;
    desc: string;
    fin: boolean;
  }

  let projects: Array<Project> = [
    {
      url: "https://github.com/tetrahedronai/circle",
      name: "CircleML",
      desc: "An open-source machine learning framework designed to make ML engineering faster and more accessible than ever.",
      fin: false,
    },
    {
      url: "https://github.com/tetrahedronai",
      name: "Sand",
      desc: "An open-source, high-speed interpreted language with a focus on simplicity and performance.",
      fin: false,
    },
  ];
</script>

<div class="w-screen h-[300vh] absolute grainy -z-20" />

<main class="w-screen">
  <section>
    <Circles />
    <LandingText />

    <button
      class="absolute bottom-4 w-screen z-50 h-fit"
      on:click={() => window.scrollTo({ top: window.innerHeight })}
      aria-label="Scroll Down"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="mx-auto scale-150 animate-pulse motion-reduce:animate-none"
        ><path
          fill="#f2f2f2"
          opacity=".25"
          d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
        /></svg
      >
    </button>
  </section>

  <IntersectionObserver element={aboutNode} let:intersecting>
    <section class="grid-center">
      <div bind:this={aboutNode} class="flex-center flex-col h-[70vh]">
        {#if intersecting}
          <h1
            in:fly={{
              duration: 500,
              y: -30,
              delay: 500,
            }}
            class="text-6xl font-bold -translate-y-56 opacity-90"
          >
            We're Tetrahedron AI
          </h1>
          <div
            class="flex justify-around items-center px-3 text-center absolute"
          >
            <div
              in:fly={{
                duration: 500,
                x: -30,
                delay: 700,
              }}
              class="md:w-1/3 md:px-10 text-2xl opacity-90"
            >
              <p>
                A group of students working to improve the efficiency and
                accessibility of machine learning.
              </p>
            </div>
            <img
              width="384"
              height="384"
              src="/imgs/icon.svg"
              alt="Logo"
              class="-z-30 h-96 blur-md animate-float-sm"
            />
            <div
              in:fly={{
                duration: 500,
                x: 30,
                delay: 700,
              }}
              class="md:w-1/3 sm:px-10 text-2xl opacity-90"
            >
              <p>
                We do this in the hope of improving the safety, inclusivity and
                sustainability of AI technologies.
              </p>
            </div>
          </div>
        {/if}
      </div>
    </section>
  </IntersectionObserver>

  <section class="grid-center">
    <div class="circle-container">
      <div
        class="blur-circle animate-float bg-cyan-400 mr-[20vmax] w-[40vmax]"
      />
    </div>
    <div class="circle-container">
      <div
        class="blur-circle animate-float delayed bg-purple-500 ml-[20vmax] w-[40vmax]"
      />
    </div>
    <IntersectionObserver element={projectsNode} let:intersecting>
      <div
        bind:this={projectsNode}
        class="content text-center flex flex-col justify-between gap-14"
      >
        {#if intersecting}
          <div>
            <h1
              in:fly={{ duration: 500, x: -30, delay: 300 }}
              class="font-bold text-4xl mb-2"
            >
              Inclusive, Open Development
            </h1>
            <p
              in:fly={{ duration: 500, x: -30, delay: 500 }}
              class="text-2xl max-w-sm mx-auto"
            >
              We operate transparently, reducing algorithmic bias and including
              the community.
            </p>
          </div>

          <div class="max-w-screen justify-center flex gap-3 projects">
            {#each [...projects.entries()] as [i, prj]}
              <a
                href={prj.url}
                in:fly={{ duration: 0, delay: 0 * 700 + 0 * 200 * i, y: 30 }}
              >
                <div>
                  <h1>{prj.name}</h1>
                  <h2
                    class="uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                  >
                    {#if !prj.fin}
                      In Progress
                    {/if}
                  </h2>
                  <p>{prj.desc}</p>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </IntersectionObserver>
  </section>
</main>

<style lang="postcss">
  section {
    @apply h-screen w-full;

    .content {
      @apply z-30;
    }
  }

  .projects div {
    @apply rounded-lg border border-base-content border-opacity-20
    bg-gray-900 bg-opacity-30 p-5 w-96 backdrop-blur-lg h-44
    grid place-items-center;

    h1 {
      @apply font-bold text-2xl;
    }
  }

  .circle-container {
    @apply absolute grid place-items-center w-full h-full mt-14;
  }
</style>

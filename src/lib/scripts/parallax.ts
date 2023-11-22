import { onMount } from "svelte";

export function parallaxInit() {
    onMount(() => {
        let prefersReducedMotion = false;
        prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let widthLargeEnough = window.innerWidth > 830;

        if (!prefersReducedMotion && widthLargeEnough) {
            let nodesX = document.querySelectorAll("[data-para-x]");
            let nodesY = document.querySelectorAll("[data-para-y]");
            let nodesBoth = document.querySelectorAll("[data-para-both]");

            window.addEventListener("scroll", (_) => {
                nodesX.forEach((node: any) => {
                    let offsetValue: number = node.getAttribute("data-para-x");
                    let subtractValue: number = node.getAttribute("data-para-offset");
                    subtractValue = subtractValue ? subtractValue : 0;
                    subtractValue = Number(subtractValue) * window.innerHeight;

                    node.style.transform = `translateX(${(window.scrollY - subtractValue) * offsetValue}px)`;
                });

                nodesY.forEach((node: any) => {
                    let offsetValue: any = node.getAttribute("data-para-y");
                    let subtractValue: any = node.getAttribute("data-para-offset");
                    subtractValue = subtractValue ? subtractValue : 0;
                    subtractValue = Number(subtractValue) * window.innerHeight;

                    node.style.transform = `translateY(${(window.scrollY - subtractValue) * offsetValue}px)`;
                });

                nodesBoth.forEach((node: any) => {
                    let offsetValue: any = node.getAttribute("data-para-both").split(",");
                    let x = Number(offsetValue[0]);
                    let y = Number(offsetValue[1]);
                    let subtractValue: any = node.getAttribute("data-para-offset");
                    subtractValue = subtractValue ? subtractValue : 0;
                    subtractValue = Number(subtractValue) * window.innerHeight;

                    node.style.transform = `translate(${(window.scrollY - subtractValue) * x}px, ${(window.scrollY - subtractValue) * y
                        }px)`;
                });
            });
        }
    });
}
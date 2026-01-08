<script lang="ts">
	import type { Orbit } from '$lib';
  import { getContext } from 'svelte';

	export let colorDark: string;
	export let colorNeutral: string;
	export let colorLight: string;
	export let radius: string; // It is the multiplier applied to the circle size. Keep range between 0.5 to 1.5
  export let rightAlign: Boolean; // If the component will be rightAligned or not.
	export let orbits: Orbit[] = [];

  let theme = getContext<{ color: string }>('theme');

  function updateTheme() {
    console.log("Running theme updater.")
    theme.color = colorNeutral;
  }
</script>

<div
	class="planet {rightAlign ? 'right' : 'left'}" 
	style="
    --colorDark: {colorDark};
    --colorNeutral: {colorNeutral};
    --colorLight: {colorLight};
    --radius: {radius};
  "
  onmouseenter={updateTheme}
>
  <div class="orbit"></div>
</div>

<style>
  .left {
    margin-left: var(--sys-layout-padding-3);
  }
  .right {
    margin-left: auto;
    margin-right: var(--sys-layout-padding-3);
  }
  .planet {
    position: relative;
    height: calc( var(--sys-layout-size-12) * var(--radius));
    width: calc( var(--sys-layout-size-12) * var(--radius));
    background: radial-gradient(circle at top right, var(--colorLight), var(--colorNeutral), var(--colorDark));
    border-radius: 100%;

    margin-top: var(--sys-layout-padding-3);
    margin-bottom: var(--sys-layout-padding-3);
  }

  .orbit {
    height: calc( var(--sys-layout-size-12) * var(--radius) + var(--sys-layout-size-8));
    width: calc( var(--sys-layout-size-12) * var(--radius) + var(--sys-layout-size-8));
    border: 0.2px solid gray;
    border-radius: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

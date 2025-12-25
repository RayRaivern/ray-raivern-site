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
</div>

<style>
  .right {
    margin-left: auto;
  }
  .planet {
    height: calc( 90px * var(--radius));
    width: calc( 90px * var(--radius));
    background-color: var(--md-sys-color-primary-container);
    border-radius: 100%;

    margin-top: var(--sys-layout-padding-2);
  }
</style>

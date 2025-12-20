<script lang="ts">
	import type { Orbit } from '$lib';
  import { getContext } from 'svelte';

	export let colorDark: string;
	export let colorNeutral: string;
	export let colorLight: string;
	export let radius: string;
	export let orbits: Orbit[] = [];

  let theme = getContext<{ color: string }>('theme');

  function updateTheme() {
    console.log("Running theme updater.")
    theme.color = colorNeutral;
  }
</script>

<div
	class="planet"
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
  .planet {
    height: var(--radius);
    width: var(--radius);
    background-color: var(--md-sys-color-primary-container);
    border-radius: 100%;
  }
</style>

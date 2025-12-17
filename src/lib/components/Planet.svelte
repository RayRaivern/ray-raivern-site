<script lang="ts">
	import type { Orbit } from '$lib';
	export let colorDark: string;
	export let colorNeutral: string;
	export let colorLight: string;
	export let radius: string;
	export let orbits: Orbit[] = [];
</script>

<div
	class="planet"
	style="
    --colorDark: {colorDark};
    --colorNeutral: {colorNeutral};
    --colorLight: {colorLight};
    --radius: {radius};
  "></div>

<style>
  .planet {
    height: var(--radius);
    width: var(--radius);
    background-color: var(--colorNeutral);
    border-radius: 100%;
  }
</style>

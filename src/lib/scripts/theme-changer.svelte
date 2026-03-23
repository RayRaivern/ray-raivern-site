<script lang="ts">
	import {
		argbFromHex,
		themeFromSourceColor,
		applyTheme
	} from '@material/material-color-utilities';

	let { color }: { color: string } = $props();

	const theme = $derived(themeFromSourceColor(argbFromHex(color)));
	$effect(() => applyTheme(theme, { target: document.body, dark: true }));
</script>

<style>
	:global(*) {
		transition:
			background-color 800ms ease-out,
			border-color 800ms linear,
			color 800ms ease-in,
			filter 800ms ease-out;
	}
</style>

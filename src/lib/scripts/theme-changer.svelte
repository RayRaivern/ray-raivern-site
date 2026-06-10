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
    --time: 800ms;
		transition:
			background-color var(--time) ease-out,
			border-color var(--time) linear,
			color var(--time) ease-in,
			filter var(--time) ease-out,
			stroke var(--time) ease-out,
			fill var(--time) ease-out;
	}
</style>

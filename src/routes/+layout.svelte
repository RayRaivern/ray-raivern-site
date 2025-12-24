<script lang="ts">
  import '$lib/styles/md_token.css';
	import favicon from '$lib/assets/favicon.svg';
  import Stars from '$lib/components/Stars.svelte';
  import ThemeChanger from '$lib/scripts/theme-changer.svelte';
  import ref from '$lib/styles/ref.json';
  import '$lib/styles/ref.css';
  import '$lib/styles/sys.css';
  import { setContext } from 'svelte';

  const palette = ref.palette;
  let theme = $state({ color: palette['teal-neutral'] });
  setContext('theme', theme);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ThemeChanger color={theme.color}/>
<Stars />

{@render children?.()}

<style>
  :global(html) {
    background-color: black;
    margin: var(--sys-layout-margin-horizontal);
  }
</style>

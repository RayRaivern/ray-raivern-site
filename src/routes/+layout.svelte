<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import Stars from '$lib/components/Stars.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Stars />

{@render children?.()}

<style>
  :global(html) {
    background-color: black;
  }
</style>

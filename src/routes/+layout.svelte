<script lang="ts">
	import '$lib/styles/md_token.css';
	import favicon from '$lib/assets/favicon.svg';
	import Stars from '$lib/components/Stars.svelte';
	import ThemeChanger from '$lib/scripts/theme-changer.svelte';
	import ref from '$lib/styles/ref.json';
	import '$lib/styles/sys.css';
	import '$lib/styles/fonts.css';
	import { setContext } from 'svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import ThemeDrawerToggle from '$lib/components/ThemeDrawer/ThemeDrawerToggle.svelte';
  import ThemeDrawerContent from '$lib/components/ThemeDrawer/ThemeDrawerContent.svelte';

	const palette = ref.palette;
	let theme = $state({ color: palette['teal-neutral'] });
	setContext('theme', theme);
	let active_signal1 = $state({ signal: false });
	setContext('active_signal1', active_signal1);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ThemeChanger color={theme.color} />
<Stars />

<div class="container">
	<div class="primary">
		{@render children?.()}
	</div>
	<div class="secondary">
    <ThemeDrawerContent></ThemeDrawerContent>
		<div class="theme">
			<ThemeDrawerToggle></ThemeDrawerToggle>
		</div>
	</div>
	<div class="tertiary">
		<p class="test">Test2</p>
	</div>
</div>

<style>
	:global(html) {
		/* background-color: var(--md-sys-color-background); */
		margin-left: var(--sys-space-m);
		margin-right: var(--sys-space-m);
		margin-top: var(--sys-space-xl);
		/* filter: blur(var(--sys-blur-xs)); */
	}

	.test {
		color: white;
	}

	.container {
		display: grid;
		grid-template-columns: auto;
		grid-template-areas: 'main';
	}

	.secondary,
	.tertiary {
		display: none;
	}

	@media (min-width: 600px) {
		.container {
			grid-template-columns: var(--sys-pane-left) 1fr;
			grid-template-areas: 'left main';
		}

		.secondary {
			display: block;
		}
	}

	@media (min-width: 1200px) {
		.container {
			grid-template-columns: var(--sys-pane-left) 2fr 1fr;
			grid-template-areas: 'left main right';
		}

		.secondary,
		.tertiary {
			display: block;
		}
	}

	.primary {
		grid-area: main;
	}

	.secondary {
		grid-area: left;
	}

	.theme {
		position: fixed;
		bottom: 0px;
		left: var(--sys-space-xl);
	}

	.tertiary {
		grid-area: right;
	}
</style>

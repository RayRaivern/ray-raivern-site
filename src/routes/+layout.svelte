<script lang="ts">
	import '$lib/styles/md_token.css';
	import favicon from '$lib/assets/favicon.svg';
	import Stars from '$lib/components/Stars.svelte';
	import ThemeChanger from '$lib/scripts/theme-changer.svelte';
	import ref from '$lib/styles/ref.json';
	import '$lib/styles/sys.css';
	import '$lib/styles/fonts.css';
	import { setContext } from 'svelte';

	const palette = ref.palette;
	let theme = $state({ color: palette['teal-neutral'] });
	setContext('theme', theme);
	let touch_signal = $state({ signal: false });
	setContext('touch_signal', touch_signal);

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
		<p class="test">Test1</p>
	</div>
	<div class="tertiary">
		<p class="test">Test2</p>
	</div>
</div>

<style>
	:global(html) {
		background-color: black;
		margin-left: var(--sys-space-l);
		margin-right: var(--sys-space-m);
		margin-top: var(--sys-space-xl);
		/* filter: blur(var(--sys-effect-blur)); */
	}

	.test {
		color: white;
	}

	.container {
		display: grid;
		grid-template-columns: auto;
		grid-template-areas: 'main';
	}

  .secondary, .tertiary {
    display: none;
  }

  @media (min-width: 600px){
    .container {
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "left main";
    }

    .secondary {
      display: block;
    }
  }

  @media (min-width: 1200px) {
    .container {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: "left main right";
    }

    .secondary, .tertiary {
      display: block;
    }
  }

	.primary {
		grid-area: main;
	}

	.secondary {
		grid-area: left;
	}

	.tertiary {
		grid-area: right;
	}
</style>

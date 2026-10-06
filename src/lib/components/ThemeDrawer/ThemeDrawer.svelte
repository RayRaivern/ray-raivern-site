<script lang="ts">
	import { slide } from 'svelte/transition';
	import ThemeDrawerContent from './ThemeDrawerContent.svelte';
	import ThemeDrawerToggle from './ThemeDrawerToggle.svelte';
	import { cubicOut } from 'svelte/easing';

	let trigger = $state(false);
	let hover = $state(false);

	function toggle_trigger() {
		trigger = !trigger;
		hover = false;
	}

	function toggle_hover_in() {
		if (!trigger) {
			hover = true;
		}
	}

	function toggle_hover_out() {
		if (!trigger) {
			hover = false;
		}
	}

	$effect(() => {});
</script>

<div class="wrapper">
	<button
		class="toggle"
		aria-label="open theme drawer"
		onclick={toggle_trigger}
		onmouseenter={toggle_hover_in}
		onmouseleave={toggle_hover_out}
	>
		<ThemeDrawerToggle {trigger}></ThemeDrawerToggle>
	</button>

	{#if hover}
		<button
			class="hover"
			aria-label="open theme drawer"
			onclick={toggle_trigger}
			onmouseenter={toggle_hover_in}
			onmouseleave={toggle_hover_out}
			transition:slide={{ duration: 400, easing: cubicOut }}
		>
			<ThemeDrawerContent />
		</button>
	{/if}

	{#if trigger}
		<div class="content" transition:slide={{ duration: 800, easing: cubicOut }}>
			<ThemeDrawerContent />
		</div>
	{/if}
</div>

<style>
	button {
		all: unset;
		cursor: pointer;
		display: block;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.hover {
		height: var(--sys-peek-size);
	}
</style>

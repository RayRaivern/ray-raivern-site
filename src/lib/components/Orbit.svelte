<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { icon_code, orbit_no } = $props();
	let condition = $state(false);
	let rotate_start = Math.random();

	onMount(() => {
		condition = true;
	});
</script>

<div
	class="orbit_path"
	style="
    --orbit_no: {orbit_no};
    --rotate_start: {rotate_start};
  "
>
	{#if condition}
		<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
			<circle
				in:draw={{ delay: 500, duration: 10000, easing: quintInOut }}
				cx="50%"
				cy="50%"
				r="50%"
				fill="none"
				stroke="gray"
				stroke-width="0.5%"
				stroke-opacity="0.5"
			/>
		</svg>
	{/if}

	{#if browser}
		<div class="spinner">
			<!-- <img src={img_url} alt="" class="image" /> -->
			<div class="icon">{icon_code}</div>
		</div>
	{/if}
</div>

<style>
	.orbit_path {
		--size: calc(
			var(--sys-layout-size-12) * var(--radius) + var(--orbit_no) * var(--sys-layout-size-8)
		);
		height: var(--size);
		width: var(--size);

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		pointer-events: none;
	}

	.icon {
		font-family: 'Icons';
		font-weight: normal;
		font-size: var(--sys-layout-size-5);
		color: var(--md-sys-color-secondary);

		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.spinner {
		position: absolute;
		width: 100%;
		height: 100%;

		animation: orbit_rotation calc(60s * var(--orbit_no)) linear infinite;
	}

	svg {
		position: absolute;
		display: block;
		height: inherit;
		width: inherit;
	}

	@keyframes orbit_rotation {
		from {
			transform: rotate(calc(var(--rotate_start) * 360deg));
		}
		to {
			transform: rotate(calc(var(--rotate_start) * 360deg + 360deg));
		}
	}
</style>

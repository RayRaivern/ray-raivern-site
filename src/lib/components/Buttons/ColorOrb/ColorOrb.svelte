<script lang="ts">
	import { getContext } from 'svelte';

	interface Props {
		color: string;
	}

	let hover = $state(false);
	let pressed = $state(false);
	let touch_move = false;

	let theme = getContext<{ color: string }>('theme');
	let color_original = theme.color;
	let active_signal = $state(getContext<{ signal: Boolean }>('active_signal1'));
	let active_buffer = false;

	let { color }: Props = $props();

	$effect(() => {
		if (active_signal.signal || !active_signal.signal) {
			if (!active_buffer && pressed) {
				pressed = false;
				mouseLeave();
			}

			active_buffer = false;
		}
	});

	function updateTheme() {
		theme.color = color;
	}

	function mouseEntry() {
		color_original = theme.color;
		updateTheme();
		hover = true;
	}

	function mouseClick() {
		pressed = true;
		active_buffer = true;
		active_signal.signal = !active_signal.signal;
	}

	function mouseLeave() {
		if (!pressed) {
			theme.color = color_original;
		}
		hover = false;
	}

	function touchEnd() {
		if (!touch_move) {
			mouseClick();
		}
	}

	function touchMove() {
		touch_move = true;
	}

	let canvas: HTMLCanvasElement;
	let width: number = $state(0);
	let height: number = $state(0);

	$effect(() => {
		const ctx = canvas.getContext('2d');
	});
</script>

<div class="orb-wrapper" style="--color: {color}">
	<button
		class="orb-all orb-{hover} pressed-{pressed}"
		aria-label="Change website theme to ${color}"
		onmouseenter={mouseEntry}
		onclick={mouseClick}
		onmouseleave={mouseLeave}
		ontouchend={touchEnd}
		ontouchmove={touchMove}
		type="button"
	>
		<div class="img-overlay"></div>
	</button>
	<div class="back"></div>
	<div class="stroke">
		<!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> -->
		<!-- 	<path d="M 60 20 Q 80 30 80 50" stroke="white" stroke-width="2" fill="none" /> -->
		<!-- </svg> -->
	</div>
	<canvas
		class="canvas"
		bind:this={canvas}
		bind:clientWidth={width}
		bind:clientHeight={height}
		{width}
		{height}
	></canvas>
	<div class="glower-{pressed}" style="--color: {color}"></div>
</div>

<style>
	.orb-all {
		border: none;
		background: var(--color);
		position: relative;
		border-radius: 50%;

		-webkit-mask-image: url('$lib/assets/metallic-button-border.webp');
		mask-image: url('$lib/assets/metallic-button-border.webp');
		-webkit-mask-size: cover;
		mask-size: cover;
		-webkit-mask-position: center;
		mask-position: center;

		height: var(--sys-size-l);
		width: var(--sys-size-l);

		/* background-color: var(--color); */
	}

	.img-overlay {
		position: absolute;
		inset: 0;

		background-image: url('$lib/assets/metallic-button-border.webp');
		background-size: cover;
		background-position: center;
		/* filter: grayscale(100%); */
		mix-blend-mode: luminosity;
	}

	.back {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top right, rgba(255, 255, 255, 0), white);
		border-radius: 50%;
		z-index: -1;
		opacity: 0.1;
	}

	.canvas {
		position: absolute;
		inset: 0;
		/* background: white; */
		opacity: 0.5;
		height: 80%;
		width: 80%;
		margin: auto;
		border-radius: 50%;
		z-index: -1;
	}

	.pressed-false {
		cursor: pointer;
	}

	.orb-wrapper {
		position: relative;
		display: inline-flex;
		margin: var(--sys-space-m);
		border-radius: 50%;
	}

	.glower-true {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		margin: auto;
		z-index: -1;

		box-shadow: 0 0 var(--sys-blur-xl) var(--sys-blur-l) var(--color);
	}

	.stroke {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		opacity: 0.7;
		z-index: -1;
	}
</style>

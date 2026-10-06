<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import ColorGas from './ColorGas.svelte';

	interface Props {
		color: string;
	}

	let hover = $state(false);
	let pressed = $state(false);
  setContext('interaction', () => ({ hover, pressed }));
	let touch_move = false;

	let theme = getContext<{ color: string }>('theme');
	let applied_theme = getContext<{ color: string }>('applied_theme');
	let color_original = theme.color;

	let { color }: Props = $props();

	$effect(() => {
		if (applied_theme.color == color) pressed = true;
    else pressed = false;
	});

	function mouseEntry() {
		color_original = theme.color;
		theme.color = color;
		hover = true;
	}

	function mouseClick() {
    applied_theme.color = color;
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
		<!-- <div class="img-overlay"></div> -->
	</button>
	<ColorGas {color}></ColorGas>
	<div class="stroke">
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<path d="M 60 15 Q 85 20 85 40" stroke="white" stroke-width="4" fill="white" />
		</svg>
	</div>
	<div class="back"></div>
	<div class="glower-{pressed}"></div>
</div>

<style>
	.orb-all {
		background: none;
		position: relative;
		border-radius: 50%;

		/* -webkit-mask-image: url('$lib/assets/metallic-button-border.webp'); */
		/* mask-image: url('$lib/assets/metallic-button-border.webp'); */
		/* -webkit-mask-size: cover; */
		/* mask-size: cover; */
		/* -webkit-mask-position: center; */
		/* mask-position: center; */

		height: var(--sys-size-l);
		width: var(--sys-size-l);
    border: dashed var(--sys-border-s) var(--md-sys-color-outline);

		/* background-color: var(--color); */
	}

	.img-overlay {
		position: absolute;
		inset: 0;

		background-image: url('$lib/assets/metal.jpg');
		background-size: cover;
		background-position: center;
		/* filter: grayscale(100%); */
		mix-blend-mode: luminosity;
	}

	.back {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at top right,
			rgba(255,255,255,0.2),
			rgba(255,255,255,0.1),
			rgba(255,255,255,0)
		);
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
		opacity: 1;
		z-index: -1;
    filter: blur(var(--sys-blur-m));
	}
</style>

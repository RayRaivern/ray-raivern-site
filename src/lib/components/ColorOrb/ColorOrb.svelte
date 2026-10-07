<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import ColorGas from './ColorGas.svelte';
  import Orb from '$lib/components/Shapes/Orb.svelte';

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

<Orb 
  size={"var(--sys-size-l)"}
  border_type={"dashed"}
  margin_size={"var(--sys-space-m)"}
>
	<button
    class="pressed-{pressed}"
		aria-label="Change website theme to ${color}"
		onmouseenter={mouseEntry}
		onclick={mouseClick}
		onmouseleave={mouseLeave}
		ontouchend={touchEnd}
		ontouchmove={touchMove}
		type="button"
	>
	</button>
	<ColorGas {color}></ColorGas>
	<div class="glower-{pressed}" style="--color: {color}"></div>
</Orb>

<style>
  button {
		background: none;
		border-radius: 50%;
    border: none;

    height: 100%;
    width: 100%;
  }

	.pressed-false {
		cursor: pointer;
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
</style>

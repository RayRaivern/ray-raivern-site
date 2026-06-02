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
</script>

<div class="orb-wrapper">
	<button
		class="orb-all orb-{hover} pressed-{pressed}"
		aria-label="Change website theme to ${color}"
		style="
    --color: {color};
  "
		onmouseenter={mouseEntry}
		onclick={mouseClick}
		onmouseleave={mouseLeave}
		ontouchend={touchEnd}
		ontouchmove={touchMove}
		type="button"
	>
		<div class="img-overlay"></div>
	</button>

  <div class="glower-{pressed}" style="--color: {color}"></div>
</div>

<style>
	.orb-all {
		border: none;
		position: relative;

		background-color: var(--color);

		-webkit-mask-image: url('$lib/assets/colorPatch.png');
		mask-image: url('$lib/assets/colorPatch.png');
		-webkit-mask-size: cover;
		mask-size: cover;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.img-overlay {
		position: absolute;
		inset: 0;

		background-image: url('$lib/assets/colorPatch.png');
		background-size: cover;
		background-position: center;
		mix-blend-mode: luminosity;
		filter: grayscale(100%);
		opacity: 0.6;
		/* box-shadow: inset 4px -4px var(--sys-blur-xl) var(--sys-blur-l) black; */
	}

	.orb-false {
		height: var(--sys-size-m);
		width: var(--sys-size-m);
	}

	.orb-true,
	.pressed-true {
		height: calc(var(--sys-size-m) * 1.2);
		width: calc(var(--sys-size-m) * 1.2);
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
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: auto;
    z-index: -1;

    box-shadow: 0 0 var(--sys-blur-xl) var(--sys-blur-l) var(--color);
  }
</style>

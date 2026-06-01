<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';
	import { scale, draw } from 'svelte/transition';
	import { typewriter } from '$lib/scripts/Typewriter';

	interface Props {
		colorDark: string;
		colorNeutral: string;
		colorLight: string;
		/** Multiplier applied to the circle size. Range: 0.5 to 1.5 */
		radius: number;
		/** Determines if the component is right-aligned */
		rightAlign: boolean;
		image: string;
		/** Planet rotation speed (Not Orbit rotation) */
		rotation: number;
		/** Text to be displayed on hover */
		text: string;
		/** Children should only be Orbit components */
		children: Snippet;
	}

	let {
		colorDark,
		colorNeutral,
		colorLight,
		radius,
		rightAlign,
		image,
		rotation,
		text,
		children
	}: Props = $props();

	let hover = $state(false);
	let touch_move = false;

	let theme = getContext<{ color: string }>('theme');
	let touch_signal = $state(getContext<{ signal: Boolean }>('touch_signal'));
	let touch_buffer = false;
	let hover_actual = false;
	let anim_delay_off = false;
	let anim_delay_on = false;

	$effect(() => {
		if (touch_signal.signal || !touch_signal.signal) {
			// console.log("Running touch signal effect.")
			if (hover_actual) {
				mouseLeave();
			}

			if (touch_buffer) {
				mouseEntry();
				touch_buffer = false;
			}
		}
	});

	function updateTheme() {
		console.log('Running theme updater.');
		theme.color = colorNeutral;
	}

	function mouseEntry() {
		if (anim_delay_on) {
			hover_actual = true;
			return;
		}

		updateTheme();
		hover = true;
		hover_actual = true;
		anim_delay_off = true;
		console.log('Mouse has entered');

		setTimeout(() => {
			anim_delay_off = false;

			if (!hover_actual) {
				mouseLeave();
			}
		}, 1800);
	}
	function mouseLeave() {
		if (anim_delay_off) {
			hover_actual = false;
			return;
		}

		hover = false;
		hover_actual = false;
		anim_delay_on = true;
		console.log('Mouse has left.');

		setTimeout(() => {
			anim_delay_on = false;

			if (hover_actual) {
				mouseEntry();
			}
		}, 1800);
	}

	function touchEnd() {
		if (hover && !touch_move) {
			touch_signal.signal = !touch_signal.signal;
		} else if (!touch_move) {
			touch_buffer = true;
			touch_signal.signal = !touch_signal.signal;
		}

		touch_move = false;
	}

	function touchMove() {
		touch_move = true;
	}
</script>

<button
	class="planet {rightAlign ? 'right' : 'left'}"
	style="
    --colorDark: {colorDark};
    --colorNeutral: {colorNeutral};
    --colorLight: {colorLight};
    --radius: {radius};
    --rotation: {rotation};
  "
	onmouseenter={mouseEntry}
	onmouseleave={mouseLeave}
	ontouchend={touchEnd}
	ontouchmove={touchMove}
	type="button"
>
	<div
		class="img-overlay"
		style="
    --bg_image: url('{image}');
    "
	></div>

	{@render children()}

	{#if hover}
		<div class="hover" in:scale out:scale={{ delay: 1200 }}></div>
		<div class="slant-lines-{rightAlign ? 'right' : 'left'}">
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<line
					x1="10"
					y1="0"
					x2="35"
					y2="25"
					stroke="var(--md-sys-color-outline)"
					stroke-width="2"
					in:draw
					out:draw={{ delay: 600 }}
				/>
				<line
					x1="35"
					y1="25"
					x2="60"
					y2="25"
					stroke="var(--md-sys-color-outline)"
					stroke-width="2"
					in:draw={{ delay: 600 }}
					out:draw
				/>
			</svg>
		</div>
		<div
			class="typewrite typewrite-{rightAlign ? 'right' : 'left'}"
			in:typewriter={{ delay: 1000 }}
			out:typewriter
		>
			{text}
		</div>
	{/if}
</button>

<style>
	.planet {
		position: relative;
		height: calc(var(--sys-size-xl) * var(--radius));
		width: calc(var(--sys-size-xl) * var(--radius));
		background: radial-gradient(
			circle at top right,
			var(--colorLight),
			var(--colorNeutral),
			var(--colorDark)
		);
		border-radius: 50%;
		border: none; /* In order to remove the default button border */
		cursor: pointer;

		margin-top: var(--sys-space-xl);
		margin-bottom: var(sys-space-xl);

    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.5);
	}

	.img-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-image: var(--bg_image);
		background-size: cover;
		background-repeat: repeat-x;
		transform: rotate(-10deg) scale(1.2);

		filter: grayscale(100%);
		mix-blend-mode: multiply;
		opacity: 0.7;
		border-radius: 50%;
		pointer-events: none;

		animation: planet-rotation calc(2s * var(--rotation)) linear infinite;
	}

	@keyframes planet-rotation {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 200% 0;
		}
	}

	.slant-lines-left {
		position: inherit;
		top: -10%;
		left: 75%;
	}

	.slant-lines-right {
		position: inherit;
		top: -10%;
		right: 75%;

		scale: -1 1;
	}

	.hover {
		position: inherit;
		width: 125%;
		height: 120%;
		background: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		background-image:
			linear-gradient(90deg, var(--md-sys-color-outline) 50%, transparent 50%),
			linear-gradient(90deg, var(--md-sys-color-outline) 50%, transparent 50%),
			linear-gradient(0deg, var(--md-sys-color-outline) 50%, transparent 50%),
			linear-gradient(0deg, var(--md-sys-color-outline) 50%, transparent 50%);

		background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
		background-size:
			15px 2px,
			15px 2px,
			2px 15px,
			2px 15px;
		background-position:
			0 0,
			0 100%,
			0 0,
			100% 0;

		animation: marching-ants 1s infinite linear;
	}

	@keyframes marching-ants {
		0% {
			background-position:
				0 0,
				15px 100%,
				0 15px,
				100% 0;
		}
		100% {
			background-position:
				15px 0,
				0 100%,
				0 0,
				100% 15px;
		}
	}

	.typewrite {
		font-family: var(--sys-font-type2);
		font-weight: normal;
		font-size: var(--sys-font-alt);
		color: var(--md-sys-color-outline);

		letter-spacing: 10%;
    line-height: 16px;

		position: inherit;
		height: 50%;
    /* Width is separated by alignment because right aligned needs more width for the text to have enough space not to shift towards the right. And putting too much width in left aligned will trigger a horizontal scroll. */
	}

	.typewrite-left {
		width: 100%;
		text-align: left;
		transform: translate(140%, -182%);
	}

	.typewrite-right {
		width: 100%;
		text-align: right;
		transform: translate(-140%, -190%);
	}
</style>

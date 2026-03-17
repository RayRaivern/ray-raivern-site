<script lang="ts">
	import { getContext } from 'svelte';
	import { scale } from 'svelte/transition';

	let {
		colorDark,
		colorNeutral,
		colorLight,
		radius, // Multiplier applied to the circle size. Keep range between 0.5 to 1.5
		rightAlign, // If the component is rightAligned or not.
		image,
		children
	} = $props();

	let hover = $state(false);
  let touch_move = false;

	let theme = getContext<{ color: string }>('theme');
  let touch_signal = $state(getContext<{ signal: Boolean }>('touch_signal'));
  let touch_buffer = false;

  $effect(() => {
    if(touch_signal.signal || !touch_signal.signal){
      hover = false;

      if(touch_buffer){
        mouseEntry();
        touch_buffer = false;
      }
    }
    })

	function updateTheme() {
		console.log('Running theme updater.');
		theme.color = colorNeutral;
	}

	function mouseEntry() {
		updateTheme();
		hover = true;
		console.log('Mouse has entered');
	}
	function mouseLeave() {
		hover = false;
		console.log('Mouse has left.');
	}

	function touchEnd() {
    if(hover && !touch_move){
      touch_signal.signal = !touch_signal.signal;
    }
    else if (!touch_move){
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
		<div class="hover" transition:scale></div>
	{/if}
</button>

<style>
	.left {
		margin-left: var(--sys-layout-padding-3);
	}
	.right {
		margin-left: auto;
		margin-right: var(--sys-layout-padding-3);
	}
	.planet {
		position: relative;
		height: calc(var(--sys-layout-size-12) * var(--radius));
		width: calc(var(--sys-layout-size-12) * var(--radius));
		background: radial-gradient(
			circle at top right,
			var(--colorLight),
			var(--colorNeutral),
			var(--colorDark)
		);
		border-radius: 50%;
		border: none; /* In order to remove the default button border */
		cursor: pointer;

		margin-top: var(--sys-layout-padding-3);
		margin-bottom: var(--sys-layout-padding-3);
	}

	.img-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-image: var(--bg_image);
		background-size: cover;
		background-position: center;
		transform: rotate(-10deg) scale(1.2);

		filter: grayscale(100%);
		mix-blend-mode: multiply;
		opacity: 0.7;
		border-radius: 50%;
		pointer-events: none;
	}

	/* .hover { */
	/* 	position: inherit; */
	/* 	top: 50%; */
	/* 	left: 50%; */
	/* 	width: 120%; */
	/* 	height: 110%; */
	/* 	background: none; */
	/* 	transform: translate(-50%, -50%); */
	/**/
	/* 	border: 2px; */
	/* 	border-color: gray; */
	/* 	border-style: dashed; */
	/* } */

	.hover {
		position: inherit;
		width: 125%;
		height: 120%;
		background: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		background-image:
			linear-gradient(90deg, gray 50%, transparent 50%),
			linear-gradient(90deg, gray 50%, transparent 50%),
			linear-gradient(0deg, gray 50%, transparent 50%),
			linear-gradient(0deg, gray 50%, transparent 50%);

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
</style>

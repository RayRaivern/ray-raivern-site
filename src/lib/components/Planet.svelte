<script lang="ts">
	import { getContext } from 'svelte';

	let {
		colorDark,
		colorNeutral,
		colorLight,
		radius, // It is the multiplier applied to the circle size. Keep range between 0.5 to 1.5
		rightAlign, // If the component will be rightAligned or not.
		image,
		children
	} = $props();

  let hover = false;
  let touch_duartion = 1000; // This is in ms. Refer to https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout for more information.
  let touch_timer: ReturnType<typeof setTimeout>;

	let theme = getContext<{ color: string }>('theme');

	function updateTheme() {
		console.log('Running theme updater.');
		theme.color = colorNeutral;
	}

  function mouseEntry() {
    updateTheme();
    hover = true;
    console.log("Mouse has entered");
  }
  function mouseLeave() {
    hover = false;
    console.log("Mouse has left.");
  }

  function touchStart() {
    touch_timer = setTimeout(mouseEntry, touch_duartion);
  }
  function touchEnd() {
    if(touch_timer){
      clearTimeout(touch_timer);
    }
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
  ontouchstart={touchStart}
  ontouchend={touchEnd}

  type="button"
>
	<div
		class="img-overlay"
		style="
    --bg_image: url('{image}');
    "
	></div>

	{@render children()}
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
</style>

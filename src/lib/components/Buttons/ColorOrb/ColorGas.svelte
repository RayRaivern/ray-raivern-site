<script lang="ts">
	import { Gas } from './Particle';

  let { color } = $props();

	let canvas: HTMLCanvasElement;
	let width: number = $state(0);
	let height: number = $state(0);
	let gas_arr: Gas[] = [];
	let gas_number = 5;

	$effect(() => {
		if (!canvas || width === 0 || height === 0) return;

		for (let index = 0; index < gas_number; index++) {
			gas_arr.push(new Gas(width, height, color));
		}

		const ctx = canvas.getContext('2d');
		let animationID: number;

		function animate() {
			if (!ctx) throw new Error('Failed to get canvas 2d context for ColorOrb.');

			ctx.clearRect(0, 0, width, height);
			for (let i = 0; i < gas_arr.length; i++) {
				gas_arr[i].draw(ctx);
			}

			animationID = requestAnimationFrame(animate);
		}

		animationID = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationID);
		};
	});
</script>

<canvas
	class="canvas"
	bind:this={canvas}
	bind:clientWidth={width}
	bind:clientHeight={height}
	{width}
	{height}
></canvas>

<style>
	.canvas {
		position: absolute;
		inset: 0;
		/* background: var(--md-sys-color-surface-variant); */
		height: 80%;
		width: 80%;
		margin: auto;
		border-radius: 50%;
		z-index: -1;
	}

</style>

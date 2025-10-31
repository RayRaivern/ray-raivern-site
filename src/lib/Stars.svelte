<script lang="ts">
	import { onMount } from 'svelte';
	import { starGenerator } from '$lib';

	let canvas: HTMLCanvasElement;
	let width = 0;
	let height = 0;

	function updateDimensions() {
		width = window.innerWidth;
		height = window.innerHeight;
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');

		updateDimensions();
    let starCount = window.innerWidth * 1.5;
		const stars = starGenerator(starCount, 1, width, height);

		function animate(time: number) {
			if (!ctx) throw new Error('Failed to get 2d context for canvas.');

			ctx.fillStyle = 'black';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				const twinkle = (Math.sin(time * 0.001 + star.phase) + 1) * 0.5;
				const minOpacity = star.opacity * 0.3; // 30% of max as minimum
				const opacity = minOpacity + twinkle * (star.opacity - minOpacity);

				ctx.fillStyle = star.color;
				ctx.globalAlpha = opacity;
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fill();
			});

			requestAnimationFrame(animate);
		}

		requestAnimationFrame(animate);
	});
</script>

<canvas bind:this={canvas} {width} {height}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		z-index: -1;
	}
</style>

<script lang="ts">
	import { starGenerator } from '$lib';
	import { colors } from '$lib/styles/colors.svelte';

	let canvas: HTMLCanvasElement;
	let width = $state(0);
	let height = $state(0);
  let color = $derived(colors.on_primary_container);

	function updateDimensions() {
		width = window.innerWidth;
		height = window.innerHeight;
	}

	$effect(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	});

	$effect(() => {
		const ctx = canvas.getContext('2d');

		let starCount = width * 0.25;
		const stars = starGenerator(starCount, 0.5, width, height);
		let animationID: number;

		const move_speed = 0.1;

		function animate(time: number) {
			if (!ctx) throw new Error('Failed to get canvas 2d context for background Stars.');
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				star.x += move_speed;
				if (star.x - star.radius > width) {
					star.x = -star.radius;
				}

				const twinkle = (Math.sin(time * 0.001 + star.phase) + 1) * 0.5;
				const minOpacity = star.opacity * 0; // 0.[value]% of max as minimum
				const opacity = minOpacity + twinkle * (star.opacity - minOpacity);

				ctx.fillStyle = color;
				ctx.globalAlpha = opacity;
				ctx.shadowBlur = star.radius * 2;
				ctx.shadowColor = color;

				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fill();

				ctx.shadowBlur = 0;
			});

			animationID = requestAnimationFrame(animate);
		}

		animationID = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationID);
		};
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
		background-color: black;
	}
</style>

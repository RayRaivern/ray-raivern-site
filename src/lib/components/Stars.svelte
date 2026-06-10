<script lang="ts">
	import { starGenerator } from '$lib';

	let canvas: HTMLCanvasElement;
	let width = $state(0);
	let height = $state(0);

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

		let starCount = window.innerWidth * 0.2;
		const stars = starGenerator(starCount, 1, width, height);
		let animationID: number;

		const move_speed = 0.01;
    const parallax = 0.04;

		function animate(time: number) {
			if (!ctx) throw new Error('Failed to get canvas 2d context for background Stars.');
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				star.x += move_speed + (star.radius * parallax);
				if (star.x - star.radius > width) {
					star.x = -star.radius;
				}

				const twinkle = (Math.sin(time * 0.0008 + star.phase) + 1) * 0.5;
				const minOpacity = star.opacity * 0.3; // 0.[value]% of max as minimum
				const opacity = minOpacity + twinkle * (star.opacity - minOpacity);

				ctx.fillStyle = star.color;
				ctx.globalAlpha = opacity;
				ctx.shadowBlur = star.radius * 2;
				ctx.shadowColor = star.color;

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
		filter: blur(1px);
	}
</style>

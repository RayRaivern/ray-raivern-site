<script lang="ts">
	import { starGenerator } from '$lib';
  import { browser } from '$app/environment';

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
    }
  })

  $effect(() => {
    if(!browser) return;
		const ctx = canvas.getContext('2d');

    let starCount = window.innerWidth * 0.15;
		const stars = starGenerator(starCount, 1, width, height);
    let animationID: number;

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

			animationID = requestAnimationFrame(animate);
		}

		animationID = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationID);
    }
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

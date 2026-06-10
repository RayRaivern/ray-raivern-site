<script lang="ts">
	import ColorOrb from '../ColorOrb/ColorOrb.svelte';

	let colors = ['#116A7B', '#7F2020', '#E5BA41', '#9AB17A', '#B08BBB', '#EED3D9'];
</script>

<div class="container">
	{#each colors as color}
		<div class="orb-container">
			<div class="background">
				<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect
						x="0"
						y="0"
						width="50"
						height="50"
						fill="var(--md-sys-color-secondary-container)"
						mask="url(#circleMask)"
					/>

					<mask id="circleMask">
						<rect x="0" y="0" width="50" height="50" fill="white" />
						<circle cx="25" cy="25" r="17" fill="black"></circle>
					</mask>
				</svg>
			</div>
			<ColorOrb {color}></ColorOrb>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		width: max-content;

		border: solid var(--sys-border-s) var(--md-sys-color-secondary);
	}

	.orb-container {
		/* width: max-content; */
		/* height: max-content; */
		position: relative;
	}

	.background {
		position: absolute;
		inset: 0;
    opacity: var(--sys-opacity-transparent);
	}
</style>

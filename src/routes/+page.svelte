<script lang="ts">
	import Planet from '$lib/components/Buttons/Planet/Planet.svelte';
	import ref from '$lib/styles/ref.json';
	import Title from '$lib/components/Title.svelte';
	import Orbit from '$lib/components/Buttons/Planet/Orbit.svelte';

	import jupiter_img from '$lib/assets/jupiter.jpg';
	import mars_img from '$lib/assets/mars.jpg';

	const palette = ref.palette;
	const work_orbits = ['\uf09b', '\uf08c'];
	const hobby_orbits = ['\ue61a'];
</script>

<div class="container">
	<div class="title">
		<Title title="RAY RAIVERN" />
	</div>
	<div class="planet1">
		<Planet
			radius={1}
			colorNeutral={palette['teal-neutral']}
			colorLight="white"
			colorDark="black"
			rightAlign={false}
			image={jupiter_img}
			rotation={20}
			text="PROJECTS"
		>
			{#each work_orbits as orbit, i}
				<Orbit icon_code={orbit} orbit_no={i + 1} />
			{/each}
		</Planet>
	</div>
	<div class="planet2">
		<Planet
			radius={0.8}
			colorNeutral={palette['red-neutral']}
			colorLight="white"
			colorDark="black"
			rightAlign={true}
			image={mars_img}
			rotation={30}
			text="TIMELINE"
		>
			{#each hobby_orbits as orbit, i}
				<Orbit icon_code={orbit} orbit_no={i + 1} />
			{/each}
		</Planet>
	</div>
</div>

<style>
	.container {
		display: grid;
    grid-template-rows: max-content calc(2 * var(--sys-size-xl)) calc(2 * var(--sys-size-xl));
    row-gap: var(--sys-space-xl);
	}
  .planet1 {
    justify-self: left;
    margin-left: 10%;
  }
  .planet2 {
    justify-self: right;
    margin-right: 10%;
  }
</style>

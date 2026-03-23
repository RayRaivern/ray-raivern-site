<script lang="ts">
	import Planet from '$lib/components/Planet.svelte';
	import ref from '$lib/styles/ref.json';
	import Title from '$lib/components/Title.svelte';
	import Orbit from '$lib/components/Orbit.svelte';

	import jupiter_img from '$lib/assets/jupiter.jpg';
	import mars_img from '$lib/assets/mars.jpg';

	const palette = ref.palette;
	const work_orbits = ['\uf09b', '\uf08c'];
	const hobby_orbits = ['\ue61a'];
</script>

<Title title="RAY RAIVERN" />
<div class="planets">
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
	<Planet
		radius={0.8}
		colorNeutral={palette['red-neutral']}
		colorLight="white"
		colorDark="black"
		rightAlign={true}
		image={mars_img}
		rotation={30}
		text="HOBBIES"
	>
		{#each hobby_orbits as orbit, i}
			<Orbit icon_code={orbit} orbit_no={i + 1} />
		{/each}
	</Planet>
</div>

<style>
	.planets {
		display: flex;
		flex-direction: column;
	}
</style>

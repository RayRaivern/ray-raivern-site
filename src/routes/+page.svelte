<script lang="ts">
	import Planet from '$lib/components/Planet.svelte';
	import ref from '$lib/styles/ref.json';
	import Title from '$lib/components/Title.svelte';
	import Orbit from '$lib/components/Orbit.svelte';

	import jupiter_img from '$lib/assets/jupiter.jpg';
	import mars_img from '$lib/assets/mars.jpg';
  import github_img from '$lib/assets/github.png';
  import linkedin_img from '$lib/assets/linkedin.png';

	const palette = ref.palette;
  const work_orbits = [github_img, linkedin_img];
</script>

<Title title="RAY RAIVERN" />
<div class="planets">
	<Planet
		radius="1"
		colorNeutral={palette['teal-neutral']}
		colorLight="white"
		colorDark="black"
		rightAlign={false}
		image={jupiter_img}
	>
    {#each work_orbits as orbit, i }
      <Orbit img_url={orbit} orbit_no={i + 1}/>
    {/each}
	</Planet>
	<Planet
		radius="0.8"
		colorNeutral={palette['red-neutral']}
		colorLight="white"
		colorDark="black"
		rightAlign={true}
		image={mars_img}
	>
		{#each work_orbits as orbit, i }
      <Orbit img_url={orbit} orbit_no={i + 1}/>
    {/each}>
	</Planet>
</div>

<style>
	.planets {
		display: flex;
		flex-direction: column;
	}
</style>

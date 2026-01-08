<script lang="ts">
	import Planet from "$lib/components/Planet.svelte";
  import ref from "$lib/styles/ref.json"; 
  import Title from "$lib/components/Title.svelte";

  const palette = ref.palette;
</script>

<Title title="RAY RAIVERN"/>
<div class="planets">
  <Planet radius="1" colorNeutral={palette['teal-neutral']} colorLight="white" colorDark="black" rightAlign={false}/>
  <Planet radius="0.8" colorNeutral={palette['red-neutral']} colorLight="white" colorDark="black" rightAlign={true}/>
</div>

<style>
  .planets {
    display: flex;
    flex-direction: column;
  }
</style>

<script lang="ts">
  import { getContext } from 'svelte';

	export let colorDark: string;
	export let colorNeutral: string;
	export let colorLight: string;
	export let radius: string; // It is the multiplier applied to the circle size. Keep range between 0.5 to 1.5
  export let rightAlign: Boolean; // If the component will be rightAligned or not.
  export let image: string;

  let theme = getContext<{ color: string }>('theme');

  console.log(image)

  function updateTheme() {
    console.log("Running theme updater.")
    theme.color = colorNeutral;
  }
</script>

<div class="planet {rightAlign ? 'right' : 'left'}" 
	style="
    --colorDark: {colorDark};
    --colorNeutral: {colorNeutral};
    --colorLight: {colorLight};
    --radius: {radius};
  "
  onmouseenter={updateTheme}
>
  <div class="img-overlay"
    style="
    --bg_image: url('{image}');
    "></div>
</div>

<style>
  .left {
    margin-left: var(--sys-layout-padding-3);
  }
  .right {
    margin-left: auto;
    margin-right: var(--sys-layout-padding-3);
  }
  .planet {
    position: relative;
    height: calc( var(--sys-layout-size-12) * var(--radius));
    width: calc( var(--sys-layout-size-12) * var(--radius));
    background: radial-gradient(circle at top right, var(--colorLight), var(--colorNeutral), var(--colorDark));
    border-radius: 50%;

    margin-top: var(--sys-layout-padding-3);
    margin-bottom: var(--sys-layout-padding-3);
  }

  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: var(--bg_image);
    background-size: cover;
    background-position: center;
    transform: rotate(-10deg) scale(1.2);

    filter: grayscale(100%);
    mix-blend-mode: multiply;
    opacity: 0.7;
    border-radius: 50%;
    pointer-events: none;
  }

  /* Use in Orbit component. Separating the orbits in another component for modulrity. */
  /* .orbit { */
  /*   height: calc( var(--sys-layout-size-12) * var(--radius) + var(--sys-layout-size-8)); */
  /*   width: calc( var(--sys-layout-size-12) * var(--radius) + var(--sys-layout-size-8)); */
  /*   border: 0.2px solid gray; */
  /*   border-radius: 100%; */
  /**/
  /*   position: absolute; */
  /*   top: 50%; */
  /*   left: 50%; */
  /*   transform: translate(-50%, -50%); */
  /* } */
</style>

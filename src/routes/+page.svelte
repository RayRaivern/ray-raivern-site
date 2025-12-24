<script lang="ts">
	import Planet from "$lib/components/Planet.svelte";
  import ref from "$lib/styles/ref.json"; 
  import Title from "$lib/components/Title.svelte";

  const palette = ref.palette;
</script>

<Title title="RAY RAIVERN"/>
<Planet radius="100px" colorNeutral={palette['teal-neutral']} colorLight="white" colorDark="black"/>
<Planet radius="100px" colorNeutral={palette['red-neutral']} colorLight="white" colorDark="black"/>

<!-- <div class="b-planet"> -->
<!-- 	<span>WORK</span> -->
<!-- </div> -->
<!-- <div class="s-planet"></div> -->
<!---->
<!-- <style> -->
<!-- 	span { -->
<!-- 		display: inline-block; -->
<!-- 		vertical-align: middle; -->
<!-- 		line-height: normal; -->
<!-- 	} -->
<!---->
<!-- 	.b-planet { -->
<!-- 		width: 200px; -->
<!-- 		height: 200px; -->
<!-- 		border-radius: 50%; -->
<!-- 		background: #b0c6ff; -->
<!-- 		margin: 20px; -->
<!---->
<!-- 		color: rgba(255, 255, 255, 0.6); -->
<!-- 		-webkit-text-stroke: 0.5px black; -->
<!-- 		text-shadow: 2px 5px 2px #7c6ba7; -->
<!-- 		font-size: 50px; -->
<!-- 		line-height: 180px; -->
<!-- 		text-align: center; -->
<!---->
<!-- 		box-shadow: 0 0 30px 15px rgba(176, 198, 255, 0.6); -->
<!-- 	} -->
<!---->
<!-- 	.s-planet { -->
<!-- 		width: 150px; -->
<!-- 		height: 150px; -->
<!-- 		border-radius: 50%; -->
<!-- 		background: #ffb68c; -->
<!-- 	} -->
<!-- </style> -->

<script lang="ts">
  let { name, orbit_no } = $props();
</script>
<div class="orbit"
  style="
    --orbit_no: {orbit_no};
  "
></div>

<style>
	.orbit {
		height: calc(var(--sys-layout-size-12) * var(--radius) + var(--orbit_no) * var(--sys-layout-size-8));
		width: calc(var(--sys-layout-size-12) * var(--radius) + var(--orbit_no) * var(--sys-layout-size-8));
		border: 0.2px solid gray;
		border-radius: 50%;
    opacity: 50%;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

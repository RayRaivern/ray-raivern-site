<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    size: string;
    border_type: string;
    margin_size: string;
    children: Snippet;
  }

  let { size, border_type, margin_size, children }: Props = $props();
</script>

<div class="orb-wrapper"
  style="
    --size: {size};
    --border_type: {border_type};
    --margin_size: {margin_size};
  "
>
  <div class="orb">
    {@render children()}
  </div>
	<div class="stroke">
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<path d="M 60 15 Q 85 20 85 40" stroke="white" stroke-width="4" fill="white" />
		</svg>
	</div>
	<div class="back"></div>
</div>

<style>
	.orb {
    display: flex;
    justify-content: center;
    align-items: center;
		background: none;
		border-radius: 50%;

		/* -webkit-mask-image: url('$lib/assets/metallic-button-border.webp'); */
		/* mask-image: url('$lib/assets/metallic-button-border.webp'); */
		/* -webkit-mask-size: cover; */
		/* mask-size: cover; */
		/* -webkit-mask-position: center; */
		/* mask-position: center; */

		height: var(--size);
		width: var(--size);
    border: var(--border_type) var(--sys-border-s) var(--md-sys-color-outline);

		/* background-color: var(--color); */
	}

	.back {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at top right,
			rgba(255,255,255,0.2),
			rgba(255,255,255,0.1),
			rgba(255,255,255,0)
		);
		border-radius: 50%;
		z-index: -1;
	}

	.orb-wrapper {
		position: relative;
		display: inline-flex;
		margin: var(--margin_size);
		border-radius: 50%;
	}

	.stroke {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		opacity: 1;
		z-index: -1;
    filter: blur(var(--sys-blur-m));
	}
</style>

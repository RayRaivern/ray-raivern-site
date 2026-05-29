<script lang="ts">
	export let title: string;
</script>

<div class="title">{title}</div>

<style>
	.title {
		font-family: var(--sys-font-type1);
		font-weight: normal;
		font-size: min(10cqw, var(--sys-size-m));
		color: white;
		padding-top: var(--sys-space-xl);
		padding-bottom: var(--sys-space-xl);

		text-align: center;
		word-spacing: 100vw;
		letter-spacing: 50%;
		filter: blur(var(--sys-blur-xs))
			drop-shadow(-4px 2px 0px var(--md-sys-color-secondary-container));
	}
</style>

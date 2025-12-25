<script lang="ts"> 
  export let title: string;
</script>

<div class="title">{title}</div>

<style>
  .title {
    font-family: var(--sys-font-display-family);
    font-weight: normal;
    font-size: var(--sys-font-display-size);
    color: white;
    padding-top: var(--sys-layout-padding-3);
    padding-bottom: var(--sys-layout-padding-3);

    text-align: center;
    word-spacing: 100vw;
    letter-spacing: 50%;
    filter: blur(var(--sys-effect-blur)) drop-shadow(-4px 2px 0px var(--md-sys-color-secondary-container));
  }
</style>

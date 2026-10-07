<script lang="ts">
  import Orb from "$lib/components/Shapes/Orb.svelte";

  let trigger = $state(false);
</script>

<div class="container">
  <div class="search-orb">
    <Orb 
      size={"var(--sys-size-m)"}
      border_type={"outset"}
      margin_size={"var(--sys-space-s)"}
    >
      {#if trigger}
        {"\uf002"}
      {/if}
    </Orb>
  </div>
  <div class="search-field"></div>
  <div class="Admin-orb"></div>
</div>

<style>
  .search-orb {
    font-family: 'Icons2';
    font-weight: normal;
    font-size: var(--sys-size-s);

    color: white; 

    text-shadow:
      0 0 2px var(--md-sys-color-on-primary-container),
      0 0 5px var(--md-sys-color-on-primary-container),
      0 0 10px var(--md-sys-color-on-primary-container),
      0 0 18px var(--md-sys-color-on-primary-container);
  }
</style>

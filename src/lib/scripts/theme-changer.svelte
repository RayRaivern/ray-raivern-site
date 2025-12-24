<script lang="ts"> 
  import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities';

  let { color }: { color: string} = $props();

  const theme = $derived(themeFromSourceColor(argbFromHex(color)));
  $effect(() => applyTheme(theme, {target: document.body, dark: true}));
</script>

<style>
  :global(*) {
    transition: background-color 1200ms ease-out,
                border-color 1200ms linear,
                color 1200ms ease-in;
  }
</style>

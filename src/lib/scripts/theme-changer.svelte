<script lang="ts"> 
  import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities';

  let { color }: { color: string} = $props();

  const theme = $derived(themeFromSourceColor(argbFromHex(color)));
  $effect(() => applyTheme(theme, {target: document.body, dark: true}));
</script>

<style>
  :global(*) {
    transition: background-color 1.2s ease-out,
                border-color 1.2s linear,
                color 1.2s ease-in;
  }
</style>

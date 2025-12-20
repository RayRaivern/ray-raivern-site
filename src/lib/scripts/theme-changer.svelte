<script lang="ts"> 
  import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities';

  let { color }: { color: string} = $props();

  const theme = $derived(themeFromSourceColor(argbFromHex(color)));
  $effect(() => applyTheme(theme, {target: document.body, dark: true}));
</script>

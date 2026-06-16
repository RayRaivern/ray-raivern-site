import { getCSS } from "$lib"

export const colors = $state({
  on_primary_container: 'rgb(159 239 255)',
  on_secondary_container: 'rgb(205 231 237)',
  on_tertiary_container: 'rgb(219 225 255)'
});

export function colorChange() {
  const keys = Object.keys(colors) as Array<keyof typeof colors>;

  for (const key of keys) {
    const cssVarSuffix = key.replace(/_/g, '-');
    colors[key] = getCSS(`--md-sys-color-${cssVarSuffix}`);
  }
}

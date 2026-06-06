// place files you want to import through the `$lib` alias in this folder.
type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  color: string;
  phase: number;
};

export type Orbit = {
  name: string;
  link: string;
  image: string;
};

export function starGenerator(
  count: number,
  radius: number,
  width: number,
  height: number
): Star[] {
  const stars: Star[] = [];
  const colors: string[] = ['#ffffff', '#BFE9EE', '#D9CAED', '#EEE9BB'];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * radius + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2
    });
  }

  return stars;
}


// CSS to JS variable getter and setter:

/**
 * Retrieves the value of a CSS variable from the root element.
 * @param name The name of the CSS variable (reference 'md_token.css')
 * @returns The value of the variable, or an empty string if not found/server-side.
 */
export function getCSS(name: string): string {
  if (typeof document === 'undefined') {
    console.warn(`getCSS is called outside of a browser environment for property "${name}".`)
    return '';
  }
  const element = document.body || document.documentElement;

  try {
    const computedStyle = getComputedStyle(element);
    return computedStyle.getPropertyValue(name).trim();
  } catch (error) {
    console.error(`Failed to get CSS property "${name}":`, error);
    return '';
  }
}

/**
 * Sets the value of a CSS variable on the root element.
 * @param name The name of the CSS variable (use 'md_token.css' as reference)
 * @param value The value to assign to the variable
 * @returns boolean true if successful, false if root is missing
 */
export function setCSS(name: string, value: string): boolean {
  if (typeof document === 'undefined') {
    console.warn(`setCSS called outside of a browser environment for property "${name}".`);
    return false;
  }
  const element = document.documentElement || document.body;
  if (!element) return false;

  try {
    element.style.setProperty(name, value);
    return true;
  } catch (error) {
    console.error(`Failed to set CSS property "${name}":`, error);
    return false;
  }
}

export function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

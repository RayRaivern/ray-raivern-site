// Taken from Svelte Tutorial and converted to Typescript

interface TypewriterOptions {
  speed?: number;
  delay?: number;
}

export function typewriter(node: HTMLElement, { speed = 1, delay = 0 }: TypewriterOptions = {}) {
  const text = node.textContent ?? '';
  const duration = text.length / (speed * 0.01);

  return {
    delay,
    duration,
    tick: (t: number) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}

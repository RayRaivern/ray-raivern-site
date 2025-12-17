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
}

export function starGenerator(count: number, radius: number, width: number, height: number): Star[] {
  const stars: Star[] = [];
  const colors: string[] = ['#ffffff', '#BFE9EE', '#D9CAED', '#EEE9BB'];
	for (let i = 0; i < count; i++) {
		stars.push({
			x: Math.random() * width,
			y: Math.random() * height,
			radius: Math.random() * radius,
			opacity: Math.random() * 0.5 + 0.2,
			color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
		});
	}

	return stars;
}

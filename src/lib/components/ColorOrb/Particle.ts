import { hexToRgba } from "$lib";

export class Gas {
  private canvas_x: number;
  private canvas_y: number;
  private color: string;
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;
  private max_radius = 30;
  private min_radius = 15;
  private radius = this.max_radius;
  private interaction: () => { hover: boolean, pressed: boolean };

  constructor(canvas_x: number, canvas_y: number, color: string, interaction: () => { hover: boolean, pressed: boolean }) {
    this.canvas_x = canvas_x;
    this.canvas_y = canvas_y;
    this.color = color;
    this.interaction = interaction;

    this.x = Math.floor(this.canvas_x / 2);
    this.y = Math.floor(this.canvas_y / 2);
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.1 + 0.05;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  }

  private centerizer(n: number, c: number, s: number): number {
    if (n < c) return n + s;
    else if (n > c) return n - s;
    else return n;
  }

  private update(hover: boolean, pressed: boolean): void {
    if (hover || pressed) {
      let speed = 0.05;
      let centre_x = this.canvas_x / 2;
      let centre_y = this.canvas_y / 2;

      this.x = this.centerizer(this.x, centre_x, speed);
      this.y = this.centerizer(this.y, centre_y, speed);
    } else {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x >= this.canvas_x || this.x <= 0) this.vx = -this.vx;
      if (this.y >= this.canvas_y || this.y <= 0) this.vy = -this.vy;
    }
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    const { hover, pressed } = this.interaction();
    let radius_rate = 0.05;
    this.update(hover, pressed);

    if (hover || pressed) {
      this.radius = Math.max(this.min_radius, this.radius - radius_rate);
    } else {
      this.radius = Math.min(this.max_radius, this.radius + radius_rate);
    }

    const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.1, this.x, this.y, this.radius);
    gradient.addColorStop(0, hexToRgba(this.color, 1));
    gradient.addColorStop(1, hexToRgba(this.color, 0));

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

import { hexToRgba } from "$lib";

export class Gas {
  canvas_x: number;
  canvas_y: number;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity = 1;
  radius = 25;

  constructor(canvas_x: number, canvas_y: number, color: string) {
    this.canvas_x = canvas_x;
    this.canvas_y = canvas_y;
    this.color = color;

    this.x = Math.floor(this.canvas_x / 2);
    this.y = Math.floor(this.canvas_y / 2);
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.1 + 0.05;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  }

  private update(): void {
    // let tvx = this.vx;
    // let tvy = this.vy;
    // this.vx += (Math.random() - 0.5) * 0.5;
    // this.vy += (Math.random() - 0.5) * 0.5;

    this.x += this.vx;
    this.y += this.vy;
    // this.vx = tvx;
    // this.vy = tvy;

    if(this.x >= this.canvas_x || this.x <= 0) this.vx = -this.vx;
    if(this.y >= this.canvas_y || this.y <= 0) this.vy = -this.vy;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    this.update();

    const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.1, this.x, this.y, this.radius);
    gradient.addColorStop(0, hexToRgba(this.color, this.opacity));
    gradient.addColorStop(1, hexToRgba(this.color, 0));

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export class Rectangle {
  startX: number
  startY: number
  endX: number
  endY: number

  constructor(startX: number, startY: number) {
    this.startX = startX
    this.startY = startY
    this.endX = startX
    this.endY = startY
  }

  get minX() {
    return Math.min(this.startX, this.endX)
  }
  get minY() {
    return Math.min(this.startY, this.endY)
  }
  get maxX() {
    return Math.max(this.startX, this.endX)
  }
  get maxY() {
    return Math.max(this.startY, this.endY)
  }
  get width() {
    return this.maxX - this.minX
  }
  get height() {
    return this.maxY - this.minY
  }

  isInside(x: number, y: number) {
    return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY
  }

  move(dx: number, dy: number) {
    this.startX += dx
    this.startY += dy
    this.endX += dx
    this.endY += dy
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.rect(this.minX, this.minY, this.width, this.height)
    ctx.fillStyle = '#000'
    ctx.fill()
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 4
    ctx.stroke()
  }
}

class BoundingBox {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.left = x;
    this.top = y;
    this.right = this.left + width;
    this.bottom = this.top + height;
  }

  collide(oth) {
    return this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top;
  }
}

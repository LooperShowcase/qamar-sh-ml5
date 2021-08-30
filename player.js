class Player {
  constructor() {
    this.size = 160;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.5;
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -35;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 40,
      this.size - 40,

      currentObs.x,
      currentObs.y,
      currentObs.size - 20,
      currentObs.size - 20
    );
    return isColliding;
  }
}

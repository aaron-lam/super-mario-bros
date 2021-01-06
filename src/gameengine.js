// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
  constructor() {
    this.entities = [];
    this.ctx = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;

    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.A = false;
    this.B = false;
  }

  init(ctx) { // called after page has loaded
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
  }

  start() {
    const that = this;
    (function gameLoop() {
      that.loop();
      requestAnimFrame(gameLoop, that.ctx.canvas);
    }());
  }

  startInput() {
    const that = this;

    this.ctx.canvas.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          that.left = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          that.right = true;
          break;
        case 'ArrowUp':
        case 'KeyW':
          that.up = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          that.down = true;
          break;
        case 'KeyZ':
          that.B = true;
          break;
        case 'KeyX':
          that.A = true;
          break;
        default:
          break;
      }
    }, false);

    this.ctx.canvas.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          that.left = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          that.right = false;
          break;
        case 'ArrowUp':
        case 'KeyW':
          that.up = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          that.down = false;
          break;
        case 'KeyZ':
          that.B = false;
          break;
        case 'KeyX':
          that.A = false;
          break;
        default:
          break;
      }
    }, false);
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    for (let i = 0; i < this.entities.length; i += 1) {
      this.entities[i].draw(this.ctx);
    }
  }

  update() {
    const entitiesCount = this.entities.length;

    for (let i = 0; i < entitiesCount; i += 1) {
      const entity = this.entities[i];

      if (!entity.removeFromWorld) {
        entity.update();
      }
    }

    for (let i = this.entities.length - 1; i >= 0; i -= 1) {
      if (this.entities[i].removeFromWorld) {
        this.entities.splice(i, 1);
      }
    }
  }

  loop() {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
  }
}

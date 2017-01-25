const Arrows = require("./arrows");

class Game {
  constructor(stage) {
    this.stage = stage;
  }

  play() {
    let that = this;

    let leftMovingArrow = new Arrows.leftMovingArrow();
    let downMovingArrow = new Arrows.downMovingArrow();
    let upMovingArrow = new Arrows.upMovingArrow();
    let rightMovingArrow = new Arrows.rightMovingArrow();

    that.stage.addChild(leftMovingArrow);
    that.stage.addChild(downMovingArrow);
    that.stage.addChild(upMovingArrow);
    that.stage.addChild(rightMovingArrow);

    that.stage.update();

    createjs.Ticker.on("tick", tick.bind(this));
    createjs.Ticker.setFPS(30);

    function tick(event) {
      leftMovingArrow.y = leftMovingArrow.y - 3;
      if (leftMovingArrow.y > that.stage.canvas.height) { leftMovingArrow.y = 600; }
      downMovingArrow.y = downMovingArrow.y - 3;
      if (downMovingArrow.y > that.stage.canvas.height) { downMovingArrow.y = 600; }
      upMovingArrow.y = upMovingArrow.y - 3;
      if (upMovingArrow.y > that.stage.canvas.height) { upMovingArrow.y = 600; }
      rightMovingArrow.y = rightMovingArrow.y - 3;
      if (rightMovingArrow.y > that.stage.canvas.height) { rightMovingArrow.y = 600; }
      that.stage.update(event);
    }
  }
}

module.exports = Game;

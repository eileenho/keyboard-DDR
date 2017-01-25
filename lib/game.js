const Arrows = require("./arrows");

class Game {
  constructor(stage) {
    this.stage = stage;
  }

  play() {
    let that = this;

    setInterval( createLeftArrow, 3000 );
    setInterval( createDownArrow, 2000 );
    setInterval( createUpArrow, 5000 );
    setInterval( createRightArrow, 6000 );

    function createLeftArrow() {
      let leftMovingArrow = new Arrows.leftMovingArrow();
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", tick.bind(this));
      createjs.Ticker.setFPS(30);
      function tick(event) {
        leftMovingArrow.y = leftMovingArrow.y - 3;
        if (leftMovingArrow.y > that.stage.canvas.height) { leftMovingArrow.y = 600; }
        that.stage.update(event);
      }
    }

    function createDownArrow() {
      let downMovingArrow = new Arrows.downMovingArrow();
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", tick.bind(this));
      createjs.Ticker.setFPS(30);
      function tick(event) {
        downMovingArrow.y = downMovingArrow.y - 3;
        if (downMovingArrow.y > that.stage.canvas.height) { downMovingArrow.y = 600; }
        that.stage.update(event);
      }
    }

    function createUpArrow() {
      let upMovingArrow = new Arrows.upMovingArrow();
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", tick.bind(this));
      createjs.Ticker.setFPS(30);
      function tick(event) {
        upMovingArrow.y = upMovingArrow.y - 3;
        if (upMovingArrow.y > that.stage.canvas.height) { upMovingArrow.y = 600; }
        that.stage.update(event);
      }
    }

    function createRightArrow(){
      let rightMovingArrow = new Arrows.rightMovingArrow();
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", tick.bind(this));
      createjs.Ticker.setFPS(30);
      function tick(event) {
        rightMovingArrow.y = rightMovingArrow.y - 3;
        if (rightMovingArrow.y > that.stage.canvas.height) { rightMovingArrow.y = 600; }
        that.stage.update(event);
      }
    }
  }
}

module.exports = Game;

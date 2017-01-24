class Gameview {
  constructor(stage) {
    this.stage = stage;
  }

    draw() {
      let background = new Image();
      background.src = "assets/background.jpg";

      let left = new createjs.Shape();
      left.graphics.beginFill("DeepSkyBlue").drawPolyStar(75, 75, 50, 3, 0, 60);
      this.stage.update();
    }
}

module.exports = Gameview;

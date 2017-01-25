class Gameview {
  constructor(stage) {
    this.stage = stage;
  }

    draw() {
      const leftArrow = new createjs.Bitmap("./assets/left-arrow.jpg");
      leftArrow.x = 100;
      leftArrow.y = 25;

      const downArrow = new createjs.Bitmap("./assets/down-arrow.jpg");
      downArrow.x = 200;
      downArrow.y = 25;

      const upArrow = new createjs.Bitmap("./assets/up-arrow.jpg");
      upArrow.x = 300;
      upArrow.y = 25;

      const rightArrow = new createjs.Bitmap("./assets/right-arrow.jpg");
      rightArrow.x = 400;
      rightArrow.y = 25;

      let that = this;

      rightArrow.image.onload = function() {
        that.stage.update();
      };

      this.stage.addChild(leftArrow);
      this.stage.addChild(downArrow);
      this.stage.addChild(upArrow);
      this.stage.addChild(rightArrow);

      this.stage.update();
    }
}

module.exports = Gameview;

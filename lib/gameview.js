/* global createjs */

class Gameview {
  constructor(stage) {
    this.stage = stage;

    this.startScreen = this.startScreen.bind(this);
  }

  startScreen() {
    let startText = new createjs.Text("Choose a level", "60px Impact", "#000000");
    let startText2 = new createjs.Text("to begin playing >>", "60px Impact", "#000000");
    startText.x = 50;
    startText.y = 250;
    startText2.x = 100;
    startText2.y = 325;
    startText.outline = 5;
    startText2.outline = 5;
    let startTextFill = startText.clone();
    startTextFill.outline = false;
    startTextFill.color = "#ffffff";
    let startText2Fill = startText2.clone();
    startText2Fill.outline = false;
    startText2Fill.color = "#ffffff";
    this.stage.addChild(startText, startTextFill, startText2, startText2Fill);
    this.stage.update;
    document.addEventListener("click", () => {
      this.stage.removeChild(startText, startTextFill, startText2, startText2Fill);
    });
  }

  draw() {
    this.startScreen();
    const leftArrow = new createjs.Bitmap("./assets/left-arrow-white.png");
    leftArrow.x = 100;
    leftArrow.y = 25;

    const downArrow = new createjs.Bitmap("./assets/down-arrow-white.png");
    downArrow.x = 200;
    downArrow.y = 25;

    const upArrow = new createjs.Bitmap("./assets/up-arrow-white.png");
    upArrow.x = 300;
    upArrow.y = 25;

    const rightArrow = new createjs.Bitmap("./assets/right-arrow-white.png");
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

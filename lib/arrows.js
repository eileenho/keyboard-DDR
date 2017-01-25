class Arrows {

  leftMovingArrow() {
    let leftMovingArrow = new createjs.Bitmap("./assets/left-arrow.png");
    leftMovingArrow.x = 100;
    leftMovingArrow.y = 600;
    return leftMovingArrow;
  }

  downMovingArrow() {
    let downMovingArrow = new createjs.Bitmap("./assets/down-arrow.png");
    downMovingArrow.x = 100;
    downMovingArrow.y = 600;
  }

  upMovingArrow() {
    let upMovingArrow = new createjs.Bitmap("./assets/up-arrow.png");
    upMovingArrow.x = 100;
    upMovingArrow.y = 600;
  }

  rightMovingArrow() {
    let rightMovingArrow = new createjs.Bitmap("./assets/right-arrow.png");
    rightMovingArrow.x = 100;
    rightMovingArrow.y = 600;
  }
}

module.exports = Arrows;

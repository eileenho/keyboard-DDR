class leftMovingArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/left-arrow.png");
    leftArrow.x = 100;
    leftArrow.y = 600;
    return leftArrow;
  }
}

class downMovingArrow {
  constructor() {
    let downArrow = new createjs.Bitmap("./assets/down-arrow.png");
    downArrow.x = 200;
    downArrow.y = 600;
    return downArrow;
  }
}

class upMovingArrow {
  constructor() {
    let upArrow = new createjs.Bitmap("./assets/up-arrow.png");
    upArrow.x = 300;
    upArrow.y = 600;
    return upArrow;
  }
}

class rightMovingArrow {
  constructor() {
    let rightArrow = new createjs.Bitmap("./assets/right-arrow.png");
    rightArrow.x = 400;
    rightArrow.y = 600;
    return rightArrow;
  }
}

module.exports = {
  leftMovingArrow,
  downMovingArrow,
  upMovingArrow,
  rightMovingArrow
};

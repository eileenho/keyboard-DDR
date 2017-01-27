/* global createjs */

class leftMovingArrow {
  constructor() {
    let leftArrow = new createjs.Bitmap("./assets/left-arrow.png");
    leftArrow.x = 100;
    leftArrow.y = 600;
    return leftArrow;
  }

  leftTick(e) {
    leftMovingArrow.y = leftMovingArrow.y - 3;
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

class glowLeftArrow {
  constructor() {
    let glowLeft = new createjs.Bitmap("./assets/glow-left-arrow.png");
    glowLeft.x = 100;
    glowLeft.y = 25;
    return glowLeft;
  }
}

class glowDownArrow {
  constructor() {
    let glowDown = new createjs.Bitmap("./assets/glow-down-arrow.png");
    glowDown.x = 200;
    glowDown.y = 25;
    return glowDown;
  }
}

class glowUpArrow {
  constructor() {
    let glowUp = new createjs.Bitmap("./assets/glow-up-arrow.png");
    glowUp.x = 300;
    glowUp.y = 25;
    return glowUp;
  }
}

class glowRightArrow {
  constructor() {
    let glowRight = new createjs.Bitmap("./assets/glow-right-arrow.png");
    glowRight.x = 400;
    glowRight.y = 25;
    return glowRight;
  }
}

module.exports = {
  leftMovingArrow,
  downMovingArrow,
  upMovingArrow,
  rightMovingArrow,
  glowLeftArrow,
  glowDownArrow,
  glowUpArrow,
  glowRightArrow
};

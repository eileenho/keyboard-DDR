const Gameview = require("./gameview");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");

  const gameview = new Gameview(stage);
  gameview.draw();
  stage.update();

  const game = new Game(stage);
  game.play();

  function handleKey(e) {
    switch (e.keyCode) {
      case 97:
        console.log("left");
        break;
      case 119:
        console.log("up");
        break;
      case 115:
        console.log("down");
        break;
      case 100:
        console.log("right");
        break;
    }
  }

  document.addEventListener("keypress", handleKey, false);


});

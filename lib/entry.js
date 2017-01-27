/* global createjs */

const Gameview = require("./gameview");
const Game = require("./game");
const Arrows = require("./arrows");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");
  const stageFlash = new createjs.Stage("canvas-flash");

  const gameview = new Gameview(stage);
  gameview.draw();
  stage.update();

  const game = new Game(stage, stageFlash);

  function handleKey(e) {
    switch (e.keyCode) {
      case 97:
        console.log("left");
        game.checkLeft();
        break;
      case 119:
        console.log("up");
        game.checkUp();
        break;
      case 115:
        console.log("down");
        game.checkDown();
        break;
      case 100:
        console.log("right");
        game.checkRight();
        break;
    }
  }

  document.getElementById("easy").addEventListener("click", () => {
    game.play("easy");
  });
  document.getElementById("normal").addEventListener("click", () => {
    game.play("normal");
  });
  document.getElementById("difficult").addEventListener("click", () => {
    game.play("difficult");
  });
  document.getElementById("stop").addEventListener("click", () =>{
    game.stop();
  });
  document.addEventListener("keypress", handleKey, false);
});

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

  //arrows: left 37, up 38, right 39, down 40
  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        game.checkLeft();
        break;
      case 38:
        game.checkUp();
        break;
      case 40:
        game.checkDown();
        break;
      case 39:
        game.checkRight();
        break;
    }
  }

  //wasd keys: a 97, w 119, d 100, s 115
  function handleKeyPress(e) {
    switch (e.keyCode) {
      case 97:
        game.checkLeft();
        break;
      case 119:
        game.checkUp();
        break;
      case 115:
        game.checkDown();
        break;
      case 100:
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
  document.addEventListener("keydown", handleKeyDown, false);
  document.addEventListener("keypress", handleKeyPress, false);
});

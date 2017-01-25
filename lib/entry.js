const Gameview = require("./gameview");

document.addEventListener("DOMContentLoaded", function () {

  const stage = new createjs.Stage("canvas");

  const gameview = new Gameview(stage);
  gameview.draw();
  stage.update();
});

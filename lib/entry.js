const Gameview = require("./gameview");

document.addEventListener("DOMContentLoaded", function () {
  // const canvasEl = document.getElementById("canvas");
  // canvasEl.width = 600;
  // canvasEl.height = 500;

  const stage = new createjs.Stage("canvas");
  // const ctx = canvasEl.getContext("2d");

  const gameview = new Gameview(stage);
  gameview.draw();
});

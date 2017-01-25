/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Gameview = __webpack_require__(1);
	const Game = __webpack_require__(2);
	
	document.addEventListener("DOMContentLoaded", function () {
	
	  const stage = new createjs.Stage("canvas");
	
	  const gameview = new Gameview(stage);
	  gameview.draw();
	  stage.update();
	
	  const game = new Game(stage);
	  game.play();
	
	  function handleKey(e) {
	    console.log(e.keyCode);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Gameview {
	  constructor(stage) {
	    this.stage = stage;
	  }
	
	    draw() {
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Arrows = __webpack_require__(3);
	
	class Game {
	  constructor(stage) {
	    this.stage = stage;
	  }
	
	  play() {
	    let that = this;
	
	    let leftMovingArrow = Arrows.leftmovingArrow();
	    // let leftMovingArrow = new createjs.Bitmap("./assets/left-arrow.png");
	    // leftMovingArrow.x = 100;
	    // leftMovingArrow.y = 600;
	
	    let downMovingArrow = new createjs.Bitmap("./assets/down-arrow.png");
	    downMovingArrow.x = 200;
	    downMovingArrow.y = 600;
	
	    let upMovingArrow = new createjs.Bitmap("./assets/up-arrow.png");
	    upMovingArrow.x = 300;
	    upMovingArrow.y = 600;
	
	    let rightMovingArrow = new createjs.Bitmap("./assets/right-arrow.png");
	    rightMovingArrow.x = 400;
	    rightMovingArrow.y = 600;
	
	    // that.stage.addChild(leftMovingArrow);
	    that.stage.addChild(downMovingArrow);
	    that.stage.addChild(upMovingArrow);
	    that.stage.addChild(rightMovingArrow);
	
	    that.stage.update();
	
	    createjs.Ticker.on("tick", tick.bind(this));
	    createjs.Ticker.setFPS(30);
	
	    function tick(event) {
	      // leftMovingArrow.y = leftMovingArrow.y - 3;
	      // if (leftMovingArrow.y > that.stage.canvas.height) { leftMovingArrow.y = 600; }
	      downMovingArrow.y = downMovingArrow.y - 3;
	      if (downMovingArrow.y > that.stage.canvas.height) { downMovingArrow.y = 600; }
	      upMovingArrow.y = upMovingArrow.y - 3;
	      if (upMovingArrow.y > that.stage.canvas.height) { upMovingArrow.y = 600; }
	      rightMovingArrow.y = rightMovingArrow.y - 3;
	      if (rightMovingArrow.y > that.stage.canvas.height) { rightMovingArrow.y = 600; }
	      that.stage.update(event);
	    }
	  }
	}
	
	module.exports = Game;


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
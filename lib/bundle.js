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
	
	document.addEventListener("DOMContentLoaded", function () {
	
	  const stage = new createjs.Stage("canvas");
	
	  const gameview = new Gameview(stage);
	  gameview.draw();
	  stage.update();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Gameview {
	  constructor(stage) {
	    this.stage = stage;
	  }
	
	    draw() {
	      const leftArrow = new createjs.Bitmap("./assets/left-arrow.jpg");
	      leftArrow.x = 100;
	      leftArrow.y = 25;
	
	      const downArrow = new createjs.Bitmap("./assets/down-arrow.jpg");
	      downArrow.x = 200;
	      downArrow.y = 25;
	
	      const upArrow = new createjs.Bitmap("./assets/up-arrow.jpg");
	      upArrow.x = 300;
	      upArrow.y = 25;
	
	      const rightArrow = new createjs.Bitmap("./assets/right-arrow.jpg");
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
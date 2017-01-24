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
	  // const canvasEl = document.getElementById("canvas");
	  // canvasEl.width = 600;
	  // canvasEl.height = 500;
	
	  const stage = new createjs.Stage("canvas");
	  // const ctx = canvasEl.getContext("2d");
	
	  const gameview = new Gameview(stage);
	  gameview.draw();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Gameview {
	  constructor(stage) {
	    this.stage = stage;
	  }
	
	    draw() {
	      let background = new Image();
	      background.src = "assets/background.jpg";
	
	      let left = new createjs.Shape();
	      left.graphics.beginFill("DeepSkyBlue").drawPolyStar(75, 75, 50, 3, 0, 60);
	      this.stage.update();
	    }
	}
	
	module.exports = Gameview;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
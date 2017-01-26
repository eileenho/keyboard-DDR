/* global createjs */

const Arrows = require("./arrows");

class Game {
  constructor(stage) {
    this.stage = stage;
    this.currentLeftArrows = [];
    this.currentDownArrows = [];
    this.currentUpArrows = [];
    this.currentRightArrows = [];
    this.play = this.play.bind(this);
  }

  checkLeft() {
    console.log(this.currentLeftArrows);
    if (this.currentLeftArrows[0].y < 50 && this.currentLeftArrows[0].y > 10) {
      console.log("Hit!");
    } else {
      console.log("miss!");
    }
  }

  play() {
    let that = this;

    setInterval( createLeftArrow, 3000 );
    setInterval( createDownArrow, 2000 );
    setInterval( createUpArrow, 5000 );
    setInterval( createRightArrow, 6000 );


    function createLeftArrow() {
      let leftMovingArrow = new Arrows.leftMovingArrow();
      that.currentLeftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", leftTick.bind(this));
      createjs.Ticker.setFPS(30);
      function leftTick(event) {
        leftMovingArrow.y = leftMovingArrow.y - 3;
        if (that.currentLeftArrows.length !== 0 && that.currentLeftArrows[0].y < 20) {
          that.stage.removeChild(that.currentLeftArrows[0]);
          that.currentLeftArrows.shift();
        }
        that.stage.update(event);
      }
    }

    function createDownArrow() {
      let downMovingArrow = new Arrows.downMovingArrow();
      that.currentDownArrows.push(downMovingArrow);
      that.stage.addChild(downMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", downTick.bind(this));
      createjs.Ticker.setFPS(30);
      function downTick(event) {
        downMovingArrow.y = downMovingArrow.y - 3;
        if (that.currentDownArrows.length !== 0 && that.currentDownArrows[0].y < 20) {
          that.stage.removeChild(that.currentDownArrows[0]);
          that.currentDownArrows.shift();
        }
        that.stage.update(event);
      }
    }

    function createUpArrow() {
      let upMovingArrow = new Arrows.upMovingArrow();
      that.currentUpArrows.push(upMovingArrow);
      that.stage.addChild(upMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", upTick.bind(this));
      createjs.Ticker.setFPS(30);
      function upTick(event) {
        upMovingArrow.y = upMovingArrow.y - 3;
        if (that.currentUpArrows.length !== 0 && that.currentUpArrows[0].y < 20) {
          that.stage.removeChild(that.currentUpArrows[0]);
          that.currentUpArrows.shift();
        }
        that.stage.update(event);
      }
    }

    function createRightArrow(){
      let rightMovingArrow = new Arrows.rightMovingArrow();
      that.currentRightArrows.push(rightMovingArrow);
      that.stage.addChild(rightMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", rightTick.bind(this));
      createjs.Ticker.setFPS(30);
      function rightTick(event) {
        rightMovingArrow.y = rightMovingArrow.y - 3;
        if (that.currentRightArrows.length !== 0 && that.currentRightArrows[0].y < 20) {
          that.stage.removeChild(that.currentRightArrows[0]);
          that.currentRightArrows.shift();
        }
        that.stage.update(event);
      }
    }
  }
}

module.exports = Game;

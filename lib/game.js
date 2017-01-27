/* global createjs */

const Arrows = require("./arrows");

class Game {
  constructor(stage, stageFlash) {
    this.stage = stage;
    this.stageFlash = stageFlash;
    this.score = 0;
    this.currentLeftArrows = [];
    this.currentDownArrows = [];
    this.currentUpArrows = [];
    this.currentRightArrows = [];

    this.leftInt;
    this.downInt;
    this.upInt;
    this.rightInt;

    this.hits = ["Great!", "Fantastic!", "Cool!", "Amazing!", "Nailed It!", "Unbelievable!"];
    this.misses = ["Miss!", "Try again!", "Nope!"];
    this.play = this.play.bind(this);
    this.showHit = this.showHit.bind(this);
    this.showMiss = this.showMiss.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  checkLeft() {
    let glowLeft = new Arrows.glowLeftArrow();
    this.stage.addChild(glowLeft);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(glowLeft);
      glowLeft.clear;
    }, 150);
    if (this.currentLeftArrows[0].y < 50 && this.currentLeftArrows[0].y > 10) {
      console.log("Hit!");
      this.showHit();
      this.score += 100;
      this.updateScore();
    } else {
      console.log("miss!");
      this.showMiss();
    }
  }

  checkDown() {
    let glowDown = new Arrows.glowDownArrow();
    this.stage.addChild(glowDown);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(glowDown);
      glowDown.clear;
    }, 150);
    if (this.currentDownArrows[0].y < 50 && this.currentDownArrows[0].y > 10) {
      console.log("Hit!");
      this.showHit();
      this.score += 100;
      this.updateScore();
    } else {
      console.log("miss!");
      this.showMiss();
    }
  }

  checkUp() {
    let glowUp = new Arrows.glowUpArrow();
    this.stage.addChild(glowUp);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(glowUp);
      glowUp.clear;
    }, 150);
    if (this.currentUpArrows[0].y < 50 && this.currentUpArrows[0].y > 10) {
      console.log("Hit!");
      this.showHit();
      this.score += 100;
      this.updateScore();
    } else {
      console.log("miss!");
      this.showMiss();
    }
  }

  checkRight() {
    let glowRight = new Arrows.glowRightArrow();
    this.stage.addChild(glowRight);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(glowRight);
      glowRight.clear;
    }, 150);
    if (this.currentRightArrows[0].y < 50 && this.currentRightArrows[0].y > 10) {
      console.log("Hit!");
      this.showHit();
      this.score += 100;
      this.updateScore();
    } else {
      console.log("miss!");
      this.showMiss();
    }
  }

  showHit() {
    let hit = this.hits[Math.floor(Math.random() * this.hits.length)];
    let hitText = new createjs.Text(hit, "45px Impact", "white");
    hitText.outline = 5;
    let xCoord = Math.floor((Math.random() * 400) + 50);
    let yCoord = Math.floor((Math.random() * 500) + 150);
    hitText.x = xCoord;
    hitText.y = yCoord;
    let hitTextFill = hitText.clone();
    hitTextFill.outline = false;
    hitTextFill.color = "#00ccff";
    this.stage.addChild(hitText, hitTextFill);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(hitText, hitTextFill);
      hitText.clear;
      hitTextFill.clear;
    }, 500);
  }

  showMiss() {
    let miss = this.misses[Math.floor(Math.random() * this.misses.length)];
    let missText = new createjs.Text(miss, "45px Impact", "white");
    missText.outline = 5;
    let xCoord = Math.floor((Math.random() * 400) + 50);
    let yCoord = Math.floor((Math.random() * 500) + 150);
    missText.x = xCoord;
    missText.y = yCoord;
    let missTextFill = missText.clone();
    missTextFill.outline = false;
    missTextFill.color = "#ff9933";
    this.stage.addChild(missText, missTextFill);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(missText, missTextFill);
      missText.clear;
      missTextFill.clear;
    }, 500);
  }

  updateScore() {
    let score = document.getElementById("score");
    score.innerHTML = this.score;
  }

  play() {

    let music = new Audio('./assets/music.mp3');
    music.play();

    let muteButton = document.getElementById("mute-button").addEventListener( "click", () => {
      if (music.paused === true) {
        music.play();
      } else {
        music.pause();
      }
    });

    let that = this;

    this.leftInt = setInterval( createLeftArrow, 3000 );
    this.downInt = setInterval( createDownArrow, 2000 );
    this.upInt = setInterval( createUpArrow, 5000 );
    this.rightInt = setInterval( createRightArrow, 6000 );

    createjs.Ticker.setFPS(30);

    function createLeftArrow() {
      let leftMovingArrow = new Arrows.leftMovingArrow();
      that.currentLeftArrows.push(leftMovingArrow);
      that.stage.addChild(leftMovingArrow);
      that.stage.update();
      createjs.Ticker.on("tick", leftTick.bind(this));

      function leftTick(event) {
        leftMovingArrow.y -= event.delta/1000 * 100;
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
      // createjs.Ticker.setFPS(30);
      function downTick(event) {
        downMovingArrow.y -= event.delta/1000 * 100;
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
      // createjs.Ticker.setFPS(30);
      function upTick(event) {
        upMovingArrow.y -= event.delta/1000 * 100;
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
      // createjs.Ticker.setFPS(30);
      function rightTick(event) {
        rightMovingArrow.y -= event.delta/1000 * 100;
        if (that.currentRightArrows.length !== 0 && that.currentRightArrows[0].y < 20) {
          that.stage.removeChild(that.currentRightArrows[0]);
          that.currentRightArrows.shift();
        }
        that.stage.update(event);
      }
    }
  }

  stop() {
    clearInterval(this.leftInt);
    clearInterval(this.downInt);
    clearInterval(this.upInt);
    clearInterval(this.rightInt);
  }
}

module.exports = Game;

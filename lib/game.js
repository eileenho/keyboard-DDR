/* global createjs */

const Arrows = require("./arrows");

class Game {
  constructor(stage) {
    this.stage = stage;
    this.score = 0;
    this.missScore = 0;
    this.currentLeftArrows = [];
    this.currentDownArrows = [];
    this.currentUpArrows = [];
    this.currentRightArrows = [];

    this.leftInt;
    this.downInt;
    this.upInt;
    this.rightInt;
    this.music;

    this.hits = ["Great!", "Fantastic!", "Cool!", "Amazing!", "Nailed It!", "Unbelievable!"];
    this.misses = ["Miss!", "Try again!", "Nope!"];
    this.play = this.play.bind(this);
    this.showHit = this.showHit.bind(this);
    this.showMiss = this.showMiss.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.showScore = this.showScore.bind(this);
  }

  checkLeft() {
    let glowLeft = new Arrows.glowLeftArrow();
    this.stage.addChild(glowLeft);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(glowLeft);
      glowLeft.clear;
    }, 150);
    if (this.currentLeftArrows[0] && this.currentLeftArrows[0].y < 50 && this.currentLeftArrows[0].y > 20) {
      this.showHit();
      this.removeHitLeft();
    } else {
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
    if (this.currentDownArrows[0] && this.currentDownArrows[0].y < 50 && this.currentDownArrows[0].y > 20) {
      this.showHit();
      this.removeHitDown();
    } else {
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
    if (this.currentUpArrows[0] && this.currentUpArrows[0].y < 50 && this.currentUpArrows[0].y > 20) {
      this.showHit();
      this.removeHitUp();
    } else {
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
    if (this.currentRightArrows[0] && this.currentRightArrows[0].y < 50 && this.currentRightArrows[0].y > 20) {
      this.showHit();
      this.removeHitRight();
    } else {
      this.showMiss();
    }
  }

  removeHitLeft() {
    this.stage.removeChild(this.currentLeftArrows[0]);
    this.currentLeftArrows.shift();
  }

  removeHitDown() {
    this.stage.removeChild(this.currentDownArrows[0]);
    this.currentDownArrows.shift();
  }

  removeHitUp() {
    this.stage.removeChild(this.currentUpArrows[0]);
    this.currentUpArrows.shift();
  }

  removeHitRight() {
    this.stage.removeChild(this.currentRightArrows[0]);
    this.currentRightArrows.shift();
  }

  removeLeft() {
    if (this.currentLeftArrows[0] && this.currentLeftArrows[0].y < 20) {
      this.stage.removeChild(this.currentLeftArrows[0]);
      this.currentLeftArrows.shift();
    }
  }

  showHit() {
    this.score += 100;
    this.updateScore();
    let hit = this.hits[Math.floor(Math.random() * this.hits.length)];
    let hitText = new createjs.Text(hit, "45px Impact", "white");
    hitText.outline = 5;
    let xCoord = Math.floor((Math.random() * 400) + 50);
    let yCoord = Math.floor((Math.random() * 300) + 150);
    hitText.x = xCoord;
    hitText.y = yCoord;
    let hitTextFill = hitText.clone();
    hitTextFill.outline = false;
    hitTextFill.color = "#6600ff";
    this.stage.addChild(hitText, hitTextFill);
    this.stage.update();
    setTimeout( () => {
      this.stage.removeChild(hitText, hitTextFill);
      hitText.clear;
      hitTextFill.clear;
    }, 500);
  }

  showMiss() {
    this.removeLeft();
    this.missScore += 1;
    this.updateMiss();
    if (this.missScore >= 20) {
      this.showScore();
      this.stop();
    }
    let miss = this.misses[Math.floor(Math.random() * this.misses.length)];
    let missText = new createjs.Text(miss, "45px Impact", "white");
    missText.outline = 5;
    let xCoord = Math.floor((Math.random() * 400) + 50);
    let yCoord = Math.floor((Math.random() * 300) + 150);
    missText.x = xCoord;
    missText.y = yCoord;
    let missTextFill = missText.clone();
    missTextFill.outline = false;
    missTextFill.color = "#ff3300";
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

  updateMiss() {
    let missScore = document.getElementById("misses");
    missScore.innerHTML = this.missScore;
  }

  play(level) {
    let times = [];

    if (level === "easy") {
      times = [ 5000, 9000, 14000, 20000];
    } else if (level === "normal" ) {
      times = [2000, 5000, 3000, 6000 ];
    } else {
      times = [ 1000, 1500, 2500, 2000 ];
    }

    this.leftInt = setInterval( createLeftArrow, times[0] );
    this.downInt = setInterval( createDownArrow, times[1] );
    this.upInt = setInterval( createUpArrow, times[2] );
    this.rightInt = setInterval( createRightArrow, times[3] );

    this.music = new Audio('./assets/music.mp3');
    this.music.play();

    let muteButton = document.getElementById("mute-button").addEventListener( "click", () => {
      if (this.music.paused === true) {
        this.music.play();
      } else {
        this.music.pause();
      }
    });

    let that = this;

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
          that.showMiss();
          // that.stage.removeChild(that.currentLeftArrows[0]);
          // that.currentLeftArrows.shift();
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
    this.music.pause();
    clearInterval(this.leftInt);
    clearInterval(this.downInt);
    clearInterval(this.upInt);
    clearInterval(this.rightInt);
    this.score = 0;
    this.missScore = 0;
    this.updateScore();
    this.updateMiss();
    this.music = false;
  }

  showScore() {
    let gameOver = new createjs.Text("Game Over", "60px Impact", "#6600ff");
    let text = new createjs.Text("You scored", "60px Impact", "#6600ff");
    let score = new createjs.Text(this.score, "60px Impact", "#6600ff");
    gameOver.x = 200;
    gameOver.y = 200;
    text.x = 200;
    text.y = 275;
    score.x = 300;
    score.y = 350;
    this.stage.addChild(gameOver, text, score);
    this.stage.update;
    document.addEventListener("click", () => {
      this.stage.removeChild(gameOver, text, score);
    });
  }
}

module.exports = Game;

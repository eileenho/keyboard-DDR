#Tap-Tap-Revolution

[Tap-Tap-Revolution][tap-tap-revolution] Tap-Tap-Revolution is a keyboard version of the popular
game, Dance-Dance-Revolution.

[tap-tap-revolution]: https://eileenho.github.io/keyboard-DDR/index.html

##Instructions

Colored arrows scroll vertically across the screen at varying levels of difficulty.  As they pass over the stationary arrows at the top of the screen, players need to press the corresponding keys.  If the player presses the key at the correct time, his or her score will increase by 100 points.  Incorrect key presses result in a "miss."  Gameplay ends once a player reaches 20 misses.

![screen][screen]

##Technology
The game was written in Javascript and rendered using canvas and Easeljs.  Each keypress calls a function to check the position of the currently moving arrow against the stationary arrow.

```js
checkLeft() {
  let glowLeft = new Arrows.glowLeftArrow();
  this.stage.addChild(glowLeft);
  this.stage.update();
  setTimeout( () => {
    this.stage.removeChild(glowLeft);
    glowLeft.clear;
  }, 150);
  if (this.currentLeftArrows[0] && this.currentLeftArrows[0].y < 50 && this.currentLeftArrows[0].y > 10) {
    this.showHit();
  } else {
    this.showMiss();
  }
}
```
By adding and removing children from Easeljs's stage, the illusion of arrows glowing and disappearing into each other was achieved.

The varying levels of difficulty was achieved by altering the intervals at which the scrolling arrows were created.  Easier levels created arrows at times that were further spaced apart and had fewer common multiples.  These times were stored in an array and use to set intervals based on the level passed to the play function.

```js
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
```

##Future features
* song variety varied arrow "choreography" that is not looped
* high score storage

[screen]: ./docs/screen.png

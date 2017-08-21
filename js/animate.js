function Animate(animationDelay, animationIndexCounter, animationCurrentFrame) {
    this.animationDelay = animationDelay;
    this.animationIndexCounter = animationIndexCounter;
    this.animationCurrentFrame = animationCurrentFrame;
}

var animationCounterIndex = 0;
var animationCounter = []; //new Array();

function initializeAnimationCounters() {

  for (var i = 0; i < 32000; i++) {
    animationCounter[i] = new Animate(0,0,0);
  }

}

function resetAnimationCounter() {
  animationCounterIndex = 0;
}

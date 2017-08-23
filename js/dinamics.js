var time = 120;

function initializeStatus() {

  this.lives = 4;
  this.points = 0;

}

function updateTime() {

    time--;

    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var display_time = minutes + ':' + seconds;

    $('.time').html(display_time);

}

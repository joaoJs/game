var time = 120;

function initializeStatus() {

  this.lives = 4;
  this.points = 0;

}

function updateTime() {

  if (time === 0) {
    console.log('end');
    $('.time').html('end');
  } else {

    time--;

    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (time === 0) {
      $('.time').html('end');
    } else {

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      var display_time = minutes + ':' + seconds;

      $('.time').html(display_time);

    }

  }

}

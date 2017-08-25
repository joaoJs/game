var time = 90;

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
      $('.gameOver').show();
      $('.gameOver').html("Game Over");
      stop();
    } else {

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      var display_time = minutes + ':' + seconds;

      $('.time').html(display_time);

    }

  }

}

function stop() {

  clearInterval(game_loop);
  clearInterval(timer);
  bach.pause();
  time = 90;


  $('.lives').addClass('end');
  $('.points').addClass('end');
  guy.lives = 5;
  guy.points = 0;

  coin.pos_x = 9*block_w;
  coin.pos_y = 2*block_w;

  coin2.pos_x = 1*block_w;
  coin2.pos_y = 2*block_w;

  coin3.pos_x = 5*block_w;
  coin3.pos_y = 2*block_w;

  coin4.pos_x = 9*block_w;
  coin4.pos_y = 6*block_w;

  coin5.pos_x = 2*block_w;
  coin5.pos_y = 2*block_w;

  coin6.pos_x = 3*block_w;
  coin6.pos_y = 7*block_w;

  coin7.pos_x = 7*block_w;
  coin7.pos_y = 7*block_w;

  coin8.pos_x = 9*block_w;
  coin8.pos_y = 0*block_w;

  coin9.pos_x = 2*block_w;
  coin9.pos_y = 0*block_w;

  coin10.pos_x = 3*block_w;
  coin10.pos_y = 0*block_w;

  coin11.pos_x = 4*block_w;
  coin11.pos_y = 0*block_w;

  coin12.pos_x = 3*block_w;
  coin12.pos_y = 6*block_w;

  coin13.pos_x = 0*block_w;
  coin13.pos_y = 4*block_w;

  coin14.pos_x = 4*block_w;
  coin14.pos_y = 6*block_w;

  coin15.pos_x = 9*block_w;
  coin15.pos_y = 1*block_w;

  coin16.pos_x = 2*block_w;
  coin16.pos_y = 7*block_w;

  coin17.pos_x = 4*block_w;
  coin17.pos_y = 0*block_w;

  coin18.pos_x = 7*block_w;
  coin18.pos_y = 8*block_w;

  coin19.pos_x = 5*block_w;
  coin19.pos_y = 2*block_w;

  coin20.pos_x = 9*block_w;
  coin20.pos_y = 1*block_w;

  coin21.pos_x = 4*block_w;
  coin21.pos_y = 0*block_w;

  coin22.pos_x = 5*block_w;
  coin22.pos_y = 3*block_w;

  coin23.pos_x = 8*block_w;
  coin23.pos_y = 2*block_w;

  coin24.pos_x = 9*block_w;
  coin24.pos_y = 2*block_w;




  life.pos_x = 5*block_w;
  life.pos_y = 8*block_w;

  setTimeout(function() {
    $('.stop').addClass('hide_stop');
    $('.opening').show();
    $('.gameOver').hide();
    currMap = 0;
    guy_x = 0;
    guy_y = 256;

  }, 3000);

}

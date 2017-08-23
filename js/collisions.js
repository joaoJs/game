var can_go_right = true;
var can_go_left = true;
var can_go_down = false;
var can_go_up = true;
var landed = true;

//check if square in map is wall

function check_if_wall(map) {

  var x = guy.pos_x_in_map;
  var y_right = Math.floor((guy.pos_y+60)/64);
  var x_left = Math.floor((guy.pos_x+50)/64);
  var y = Math.floor((guy.pos_y+0.4)/64);
  var y_gravity = Math.floor((guy.pos_y+16)/64);

  /*this.pos_x_in_map = Math.floor(this.pos_x / 32);
  this.pos_y_in_map = Math.floor(this.pos_y / 32);*/

  // index of guy in map
  var index_right = xy2i(x,y_right,10);
  var index_right2 = xy2i(x,y,10);
  var index_left = xy2i(x_left,y,10);
  var index_left2 = xy2i(x_left,y_right,10);
  var index_down = xy2i(x,y,10);
  var index_down2 = xy2i(x_left,y,10);
  var index_up = xy2i(x,y_right,10);
  var index_up2 = xy2i(x_left,y_right,10);
  var index_gravity = xy2i(x,y_gravity,10);
  var index_gravity2 = xy2i(x_left,y_gravity,10);

  //console.log(index);
  if ((map[index_right+1] === 0 || map[index_right2+1] === 0) || (map[index_right+1] === 5 || map[index_right2+1] === 5) && guy.pos_x_in_map !== 9) {
    can_go_right = false;
  } else {
    can_go_right = true;
  }
  if ((map[index_left-1] === 0 || map[index_left2-1] === 0) || (map[index_left-1] === 5 || map[index_left2-1] === 5) && guy.pos_x_in_map !== 0) {
    can_go_left = false;
  } else {
    can_go_left = true;
  }
  if ((map[index_down+10] === 0 || map[index_down2+10] === 0) || (map[index_down+10] === 5 || map[index_down2+10] === 5)) {
    can_go_down = false;
  } else {
    can_go_down = true;
  }
  if ((map[index_up-10] === 0 || map[index_up2-10] === 0) || (map[index_up-10] === 5 || map[index_up2-10] === 5)) {
    can_go_up = false;
  } else {
    can_go_up = true;
  }
  if ((map[index_gravity+10] === 0 || map[index_gravity2+10] === 0) || (map[index_gravity+10] === 5 || map[index_gravity2+10] === 5)) {
    landed = true;
  } else {
    landed = false;
  }

}

function check_if_bird(x_next, y_next, map) {
  // if there are any birds in current map
  //for each bird
    if (birds_per_map[map]) {
      birds_per_map[map].forEach(bird => {
        //console.log(x_next, y_next);
        //console.log(bird.pos_x, bird.pos_y);
        var diff_x = Math.abs(x_next - bird.pos_x);
        var diff_y = Math.abs(y_next - bird.pos_y);
        //console.log(diff_x, diff_y);
        if (diff_x <= 30 && diff_y <= 30) {
          console.log('touched bird!');

          var now = Date.now();
          // wait half second for next collision
          if (guy.lastCollision && now - guy.lastCollision < 500) {
            console.log('wait');
          } else {
            guy.lastCollision = now;
            guy.lives--;
            $('.lives').html(guy.lives);
            setTimeout(function(){
              $('#canvas').toggleClass('active_damage');
            }, 200);
            $('#canvas').toggleClass('active_damage');
          }
        }
      });
    }
}

function check_if_fireball(x_next, y_next, map) {
  // if there are any birds in current map
  //for each bird
    if (fireballs_per_map[map]) {
      fireballs_per_map[map].forEach(fireball => {
        //console.log(x_next, y_next);
        //console.log(bird.pos_x, bird.pos_y);
        var diff_x = Math.abs(x_next - fireball.pos_x);
        var diff_y = Math.abs(y_next - fireball.pos_y);
        //console.log(diff_x, diff_y);
        if (diff_x <= 30 && diff_y <= 30) {
          console.log('touched fireball!');
          var now = Date.now();
          // wait half second for next collision
          if (guy.lastCollision && now - guy.lastCollision < 500) {
            console.log('wait');
          } else {
            guy.lastCollision = now;
            guy.lives--;
            $('.lives').html(guy.lives);
            setTimeout(function(){
              $('#canvas').toggleClass('active_damage');
            }, 200);
            $('#canvas').toggleClass('active_damage');
          }
        }
      });
    }
}

function check_if_coin(x_next, y_next, map) {
  // if there are any birds in current map
  //for each bird
    if (coins_per_map[map]) {
      coins_per_map[map].forEach(coin => {
        //console.log(x_next, y_next);
        //console.log(bird.pos_x, bird.pos_y);
        var diff_x = Math.abs(x_next - coin.pos_x);
        var diff_y = Math.abs(y_next - coin.pos_y);
        //console.log(diff_x, diff_y);
        if (diff_x <= 30 && diff_y <= 30) {
          console.log('touched coin!');
          console.log(coin.pos_x_in_map,coin.pos_y_in_map);

          var now = Date.now();
          // wait half second for next collision
          if (guy.lastCollision_coin && now - guy.lastCollision_coin < 300) {
            //console.log('wait');
          } else {
            // make coins dissapear;
            coin.draw(-500,-500,[1,2,3,4]);
            guy.lastCollision_coin = now;
            guy.points++;
            $('.points').html(guy.points);
            setTimeout(function(){
              $('#canvas').toggleClass('active');
            }, 200);
            $('#canvas').toggleClass('active');
          }
        }
      });
    }
}

function check_if_life(x_next, y_next, map) {
  // if there are any birds in current map
  //for each bird
    if (lives_per_map[map]) {
      lives_per_map[map].forEach(life => {
        //console.log(x_next, y_next);
        //console.log(bird.pos_x, bird.pos_y);
        var diff_x = Math.abs(x_next - life.pos_x);
        var diff_y = Math.abs(y_next - life.pos_y);
        //console.log(diff_x, diff_y);
        if (diff_x <= 30 && diff_y <= 30) {
          console.log('touched life!');

          var now = Date.now();
          // wait half second for next collision
          if (guy.lastCollision && now - guy.lastCollision < 300) {
            //console.log('wait');
          } else {
            // make coins dissapear;
            life.draw(-500,-500,[1,2,3,4]);
            guy.lastCollision = now;
            guy.points += 2;
            guy.lives++;
            $('.points').html(guy.points);
            $('.lives').html(guy.lives);
            setTimeout(function(){
              $('#canvas').toggleClass('active_life');
            }, 200);
            $('#canvas').toggleClass('active_life');
          }
        }
      });
    }
}

var can_go_right = true;
var can_go_left = true;
var can_go_down = false;
var can_go_up = true;

//check if square in map is wall

function check_if_wall(map) {

  var x = guy.pos_x_in_map;
  var y_right = Math.floor((guy.pos_y+30)/32);
  var x_left = Math.floor((guy.pos_x+30)/32);
  var y = Math.floor((guy.pos_y+0.2)/32);

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

  //console.log(index);
  if ((map[index_right+1] === 0 || map[index_right2+1] === 0)&& guy.pos_x_in_map !== 9) {
    can_go_right = false;
  } else {
    can_go_right = true;
  }
  if ((map[index_left-1] === 0 || map[index_left2-1] === 0) && guy.pos_x_in_map !== 0) {
    can_go_left = false;
  } else {
    can_go_left = true;
  }
  if (map[index_down+10] === 0 || map[index_down2+10] === 0) {
    can_go_down = false;
  } else {
    can_go_down = true;
  }
  if (map[index_up-10] === 0 || map[index_up2-10] === 0) {
    can_go_up = false;
  } else {
    can_go_up = true;
  }



}

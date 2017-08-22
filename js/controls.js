function Keyboard() {
  this.leftArrow = false;
  this.upArrow = false;
  this.rightArrow = false;
  this.downArrow = false;
  this.a = false;
  this.w = false;
  this.d = false;
  this.s = false;
  this.space = false;
}

var key_left = 37;
var key_up = 38;
var key_right = 39;
var key_down = 40;
var key_a = 65;
var key_w = 87;
var key_d = 68;
var key_s = 83;
var key_space = 32;


var is_shift = false; // shift is 16
//var kstate = [false,false,false,false];
window.kstate = null;


function initializeKeyboard() {

  window.key = new Keyboard();

  $(document).keydown(function(e) {

    if (e.keyCode === 16) {
      is_shift = true;
    }
    if (e.keyCode === 32) {
      //jumping will be true
      key.space = true;
    }

    if (e.keyCode === key_left || e.keyCode === key_a) {
        //kstate[0] = true;
        key.leftArrow = true;
    }
    if (e.keyCode === key_up || e.keyCode === key_w) {
        key.upArrow = true;
    }
    if (e.keyCode === key_right || e.keyCode === key_d) {
        key.rightArrow = true;
    }
    if (e.keyCode === key_down || e.keyCode === key_s) {
        key.downArrow = true;
    }

  });

  $(document).keyup(function(e) {

    if (e.keyCode === 16) {
      is_shift = false;
    }
    if (e.keyCode === 32) {
      //jumping will be true
      key.space = false;
      //can jump
      guy.can_jump = true;
    }

    if (e.keyCode === key_left || e.keyCode === key_a) {
        //kstate[0] = false;
        key.leftArrow = false;
    }
    if (e.keyCode === key_up || e.keyCode === key_w) {
        key.upArrow = false;
    }
    if (e.keyCode === key_right || e.keyCode === key_d) {
        key.rightArrow = false;
    }
    if (e.keyCode === key_down || e.keyCode === key_s) {
        key.downArrow = false;
    }

  });

}

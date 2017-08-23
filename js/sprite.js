function Sprite(filename, is_pattern, sprite_size,x,y) {

  this.image = null;
  this.pattern = null;
  this.to_radians = Math.PI/180;

  this.image = null;
  this.spritesheet = null;

  this.pos_x = x;
  this.pos_y = y;

  this.pos_x_in_map = Math.floor(this.pos_x / 64);
  this.pos_y_in_map = Math.floor(this.pos_y / 64);

  this.gravity = 10;
  this.jumpMax = 22;
  this.jumping = false;
  this.jumping_velocity = 0;
  this.jumping_available = true;
  this.can_jump = true;
  //this.jumping_velocity = 0;

  //properties for positions
  this.go_right = null;
  this.go_left = null;
  this.go_up = null;
  this.go_down = null;
  this.switcher = 0;

  //properties for the initial status of the game
  this.lives = 5;
  this.points = 0;

  //property to check collision times
  this.lastCollision = null;


  /*
  this.animationDelay = 0;
  this.animationIndexCounter = 0;
  this.animationCurrentFrame = 0;
  */

  //load from Spritesheet
  if (filename instanceof Spritesheet) {
      this.spritesheet = filename;
      this.image = this.spritesheet.image;
  }

  if (filename !== undefined && filename !== '') {
    this.image = new Image();
    this.image.src = filename;

    if (is_pattern) {
    context.createPattern(this.image, 'repeat');
    }

  } else {
    console.log("unable to load sprite");
  }

  this.drawOldVersion = function(x,y) {
    context.drawImage(this.image, x,y, block_w, block_h);
  };

  this.draw = function(x,y,various) {

      this.pos_x = x;
      this.pos_y = y;

      this.pos_x_in_map = Math.floor(this.pos_x / 64);
      this.pos_y_in_map = Math.floor(this.pos_y / 64);

      var res;
      var animationCounterI = animationCounter[animationCounterIndex];

      if (various === undefined) {
        context.drawImage(this.image, x,y, block_w, block_h);
      } else if ($.isNumeric(various) && various >= 0) {
          res = i2xy(various,sprite_size);
          context.drawImage(this.image, res[0] * block_w, res[1] * block_h,block_w,block_h,x,y,block_w,block_h);
      } else if (various.length !== undefined && various.length > 0) {

        if (animationCounter[animationCounterIndex].animationDelay++ >= 3) {
          animationCounter[animationCounterIndex].animationDelay = 0;
          animationCounter[animationCounterIndex].animationIndexCounter++;
          if (animationCounter[animationCounterIndex].animationIndexCounter >= various.length) {
            animationCounter[animationCounterIndex].animationIndexCounter = 0;
          }
            animationCounter[animationCounterIndex].animationCurrentFrame = various[animationCounter[animationCounterIndex].animationIndexCounter];
        }
          res = i2xy(animationCounter[animationCounterIndex].animationCurrentFrame,sprite_size);
          context.drawImage(this.image, res[0] * block_w, res[1] * block_h,block_w,block_h,x,y,block_w,block_h);

          animationCounterIndex++;
      }

  };

  /*this.drawAnimated = function(x,y,spriteSheetIndex) {

      if (this.animationDelay++ >= 3) {
        this.animationDelay = 0;
        this.animationIndexCounter++;
        if (this.animationIndexCounter >= spriteSheetIndex.length) {
          this.animationIndexCounter = 0;
        }
        this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter];
      }
      var res = i2xy(this.animationCurrentFrame,4);
      context.drawImage(this.image, res[0] * 32, res[1] * 32,32,32,x,y,32,32);

  };*/

  this.draw2 = function(x,y,w,h) {

    if (this.pattern !== null) {
      context.fillStyle = this.pattern;
      context.fillRect(x,y,w,h);
    } else {

      // i guess it should be == undefined
      if (w === undefined || h === undefined) {

        context.drawImage(this.image,x,y,this.image.width,this.image.height);

      } else {

        context.drawImage(this.image,x,y,w,h);

      }

    }

  };

  this.rotate = function(x,y,angle) {
    context.save();
    context.translate(x,y);
    context.rotate(angle * this.to_radians);
    context.drawImage(this.image,-(this.image.width/2),-(this.image.height/2));
    context.restore();

  };

  this.jump = function() {

    this.can_jump = false;

    if (guy.jumping_available) {
      guy.jumping_velocity = guy.jumpMax;
      guy_y -= guy.jumping_velocity;
      //console.log(guy.jumping_velocity);
      if(guy.jumping_velocity <= 0) {
        guy.jumping_available = false;
        guy.jumpMax = 22;
      }
    }
    if (landed === true || (!can_go_down)) {
      //console.log('landed');
      guy.jumpMax = 22;
      guy.jumping_available = true;
    }

  };


}

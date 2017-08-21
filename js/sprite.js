function Sprite(filename, is_pattern) {

  this.image = null;
  this.pattern = null;
  this.to_radians = Math.PI/180;

  this.image = null;
  this.spritesheet = null;

  this.pos_x = null;
  this.pos_y = null;

  this.pos_x_in_map = null;
  this.pos_y_in_map = null;

  this.jumping = false;
  //this.jumping_velocity = 0;


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

      this.pos_x_in_map = Math.floor(this.pos_x / 32);
      this.pos_y_in_map = Math.floor(this.pos_y / 32);

      var res;
      var animationCounterI = animationCounter[animationCounterIndex];

      if (various === undefined) {
        context.drawImage(this.image, x,y, block_w, block_h);
      } else if ($.isNumeric(various) && various >= 0) {
          res = i2xy(various,4);
          context.drawImage(this.image, res[0] * 32, res[1] * 32,32,32,x,y,32,32);
      } else if (various.length !== undefined && various.length > 0) {

        if (animationCounter[animationCounterIndex].animationDelay++ >= 3) {
          animationCounter[animationCounterIndex].animationDelay = 0;
          animationCounter[animationCounterIndex].animationIndexCounter++;
          if (animationCounter[animationCounterIndex].animationIndexCounter >= various.length) {
            animationCounter[animationCounterIndex].animationIndexCounter = 0;
          }
            animationCounter[animationCounterIndex].animationCurrentFrame = various[animationCounter[animationCounterIndex].animationIndexCounter];
        }
          res = i2xy(animationCounter[animationCounterIndex].animationCurrentFrame,4);
          context.drawImage(this.image, res[0] * 32, res[1] * 32,32,32,x,y,32,32);

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


}

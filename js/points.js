var points_obj = {};

function Point(x,y) {
  this.x = x;
  this.y = y;

  this.draw = function(size, color) {

    context.beginPath();
    context.arc(this.x,this.y, size, 0, 2 * Math.PI, true);
    context.color = color;
    context.fill();
    context.strokeStyle = color;
    context.stroke();

  };
}

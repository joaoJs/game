function Point(x,y) {
  this.x = x;
  this.y = y;

  this.draw = function(size, color, color2) {

    context.beginPath();
    context.arc(this.x,this.y, size, 0, 2 * Math.PI, true);
    context.color = color;
    context.fill();
    context.lineWidth = 1;
    context.fillStyle = color2;
    context.strokeStyle = color;
    context.stroke();

  };
}

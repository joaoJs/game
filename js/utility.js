function i2xy(i, mapWidth) {
  var x = i % mapWidth;
  var y = Math.floor(i/mapWidth);
  return [x,y];
}

function xy2i(x,y,mapWidth) {
  var i = x + (y * mapWidth);
  return i;
}

function disableScrollBar() {
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
}

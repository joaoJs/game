function drawMap(map) {

  var i = 0;

  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      var tile_x = x * block_w;
      var tile_y = y * block_h;

      var tileType = map[i];

      if (tileType === 0) {
        water.draw(tile_x,tile_y);
      } else if (tileType === 1) {
        wall.draw(tile_x,tile_y);
      } 
      i++;
    }
  }

}

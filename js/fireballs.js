function setFireBalls(currMap) {

  // drawing fireballs per screen
  if (currMap === 1) {
    fireball.draw(fireball.pos_x,fireball.pos_y,[0,1,2,3,4,5,6,7]);
    fireball.pos_x -= 3;
    if (fireball.pos_x <= 4 * block_w) {
      fireball.pos_x = 7*block_w;
    }
  }

  if (currMap === 2) {
    fireball2.draw(fireball2.pos_x,fireball2.pos_y,[0,1,2,3,4,5,6,7]);
    fireball2.pos_x -= 3;
    if (fireball2.pos_x <= 2 * block_w) {
      fireball2.pos_x = 4 * block_w;
    }

    fireball3.draw(fireball3.pos_x,fireball3.pos_y,[32,33,34,35,36,37,38,39]);
    fireball3.pos_x += 3;
    if (fireball3.pos_x >= 9 * block_w) {
      fireball3.pos_x = 7 * block_w;
    }
  }

  if (currMap === 3) {
    fireball4.draw(fireball4.pos_x,fireball4.pos_y,[32,33,34,35,36,37,38,39]);
    fireball4.pos_x += 3;
    if (fireball4.pos_x >= 9 * block_w) {
      fireball4.pos_x = 5 * block_w;
    }
  }

  if (currMap === 4) {
    fireball5.draw(fireball5.pos_x,fireball5.pos_y,[0,1,2,3,4,5,6,7]);
    fireball5.pos_x -= 3;
    if (fireball5.pos_x <= 5 * block_w) {
      fireball5.pos_x = 9 * block_w;
    }
  }

  if (currMap === 5) {
    fireball6.draw(fireball6.pos_x,fireball6.pos_y,[48,49,50,51,52,53,54,55]);
    fireball6.pos_y += 3;
    if (fireball6.pos_y >= 8 * block_h) {
      fireball6.pos_y = 5 * block_w;
    }

    fireball7.draw(fireball7.pos_x,fireball7.pos_y,[16,17,18,19,20,21,22,23]);
    fireball7.pos_y -= 2;
    if (fireball7.pos_y <= 5 * block_h) {
      fireball7.pos_y = 7 * block_w;
    }
  }

  //if (currMap === 6) {

  //}

  if (currMap === 7) {
    fireball9.draw(fireball9.pos_x,fireball9.pos_y,[48,49,50,51,52,53,54,55]);
    fireball9.pos_y += 3;
    if (fireball9.pos_y >= 4 * block_h) {
      fireball9.pos_y = 0 * block_w;
    }

    fireball10.draw(fireball10.pos_x,fireball10.pos_y,[16,17,18,19,20,21,22,23]);
    fireball10.pos_y -= 3;
    if (fireball10.pos_y <= 0 * block_h) {
      fireball10.pos_y = 4 * block_w;
    }
  }

}

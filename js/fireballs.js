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

}

function setObstacles(currMap) {

  // drawing obstacles per screen
  if (currMap === 0) {
    bird.draw(bird.pos_x,bird.pos_y,[0,1,2,3]);
    if (bird.pos_x === 5 * block_w) {
      bird.go_right = true;
      bird.go_left = false;
    }
    if (bird.pos_x === 6 * block_w) {
      bird.go_right = false;
      bird.go_left = true;
    }
    if (bird.go_right) {
      bird.pos_x += 2;
    }
    if (bird.go_left) {
      bird.pos_x -= 2;
    }
  }

  if (currMap === 1) {
    bird2.draw(bird2.pos_x,bird2.pos_y,[0,1,2,3]);
    if (bird2.pos_y === 7 * block_w) {
      bird2.go_up = true;
      bird2.go_down = false;
    }
    if (bird2.pos_y === 5 * block_w) {
      bird2.go_up = false;
      bird2.go_down = true;
    }
    if (bird2.go_up) {
      bird2.pos_y -= 2;
    }
    if (bird2.go_down) {
      bird2.pos_y += 2;
    }

    bird3.draw(bird3.pos_x,bird3.pos_y,[0,1,2,3]);
    if (bird3.pos_x === 8 * block_w) {
      bird3.go_right = true;
      bird3.go_left = false;
    }
    if (bird3.pos_x === 9 * block_w) {
      bird3.go_right = false;
      bird3.go_left = true;
    }
    if (bird3.go_right) {
      bird3.pos_x += 2;
    }
    if (bird3.go_left) {
      bird3.pos_x -= 2;
    }
  }


    if (currMap === 2) {
      bird4.draw(bird4.pos_x,bird4.pos_y,[0,1,2,3]);
      if (bird4.pos_y === 8 * block_w) {
        bird4.go_up = true;
        bird4.go_down = false;
      }
      if (bird4.pos_y === 7 * block_w) {
        bird4.go_up = false;
        bird4.go_down = true;
      }
      if (bird4.go_up) {
        bird4.pos_y -= 2;
      }
      if (bird4.go_down) {
        bird4.pos_y += 2;
      }

      bird5.draw(bird5.pos_x,bird5.pos_y,[0,1,2,3]);
      if (bird5.pos_x === 6 * block_w && bird5.pos_y === 3 * block_w) {
        bird5.go_left = true;
        bird5.go_right = false;
        bird5.go_up = false;
        bird5.go_down = false;
      }
      if (bird5.pos_x === 5 * block_w && bird5.pos_y === 3 * block_w) {
        bird5.go_left = false;
        bird5.go_right = false;
        bird5.go_up = false;
        bird5.go_down = true;
      }
      if (bird5.pos_x === 5 * block_w && bird5.pos_y === 4 * block_w) {
        bird5.go_left = false;
        bird5.go_right = true;
        bird5.go_up = false;
        bird5.go_down = false;
      }
      if (bird5.pos_x === 6 * block_w && bird5.pos_y === 4 * block_w) {
        bird5.go_left = false;
        bird5.go_right = false;
        bird5.go_up = true;
        bird5.go_down = false;
      }
      if (bird5.go_right) {
        bird5.pos_x += 2;
      }
      if (bird5.go_left) {
        bird5.pos_x -= 2;
      }
      if (bird5.go_up) {
        bird5.pos_y -= 2;
      }
      if (bird5.go_down) {
        bird5.pos_y += 2;
      }

    }

    if (currMap === 3) {
      bird6.draw(bird6.pos_x,bird6.pos_y,[0,1,2,3]);
      if (bird6.pos_x === 2 * block_w) {
        bird6.go_right = true;
        bird6.go_left = false;
      }
      if (bird6.pos_x === 3 * block_w) {
        bird6.go_right = false;
        bird6.go_left = true;
      }
      if (bird6.go_right) {
        bird6.pos_x += 2;
      }
      if (bird6.go_left) {
        bird6.pos_x -= 2;
      }

      bird7.draw(bird7.pos_x,bird7.pos_y,[0,1,2,3]);
      if (bird7.pos_y === 6 * block_w) {
        bird7.go_up = true;
        bird7.go_down = false;
      }
      if (bird7.pos_y === 4 * block_w) {
        bird7.go_up = false;
        bird7.go_down = true;
      }
      if (bird7.go_up) {
        bird7.pos_y -= 2;
      }
      if (bird7.go_down) {
        bird7.pos_y += 2;
      }

    }

    if (currMap === 4) {
      bird8.draw(bird8.pos_x,bird8.pos_y,[0,1,2,3]);
      if (bird8.pos_x === 2 * block_w) {
        bird8.go_right = true;
        bird8.go_left = false;
      }
      if (bird8.pos_x === 5 * block_w) {
        bird8.go_right = false;
        bird8.go_left = true;
      }
      if (bird8.go_right) {
        bird8.pos_x += 2;
      }
      if (bird8.go_left) {
        bird8.pos_x -= 2;
      }

      bird9.draw(bird9.pos_x,bird9.pos_y,[0,1,2,3]);
      if (bird9.pos_x === 2 * block_w) {
        bird9.go_right = true;
        bird9.go_left = false;
      }
      if (bird9.pos_x === 3 * block_w) {
        bird9.go_right = false;
        bird9.go_left = true;
      }
      if (bird9.go_right) {
        bird9.pos_x += 2;
      }
      if (bird9.go_left) {
        bird9.pos_x -= 2;
      }

    }

    if (currMap === 5) {
      bird10.draw(bird10.pos_x,bird10.pos_y,[0,1,2,3]);
      if (bird10.pos_x === 3 * block_w && bird10.pos_y === 0 * block_w) {
        bird10.go_left = false;
        bird10.go_right = false;
        bird10.go_up = false;
        bird10.go_down = true;
      }
      if (bird10.pos_x === 3 * block_w && bird10.pos_y === 2 * block_w) {
        bird10.go_left = false;
        bird10.go_right = true;
        bird10.go_up = false;
        bird10.go_down = false;
      }
      if (bird10.pos_x === 5 * block_w && bird10.pos_y === 2 * block_w) {
        bird10.go_left = false;
        bird10.go_right = false;
        bird10.go_up = true;
        bird10.go_down = false;
      }
      if (bird10.pos_x === 5 * block_w && bird10.pos_y === 0 * block_w) {
        bird10.go_left = true;
        bird10.go_right = false;
        bird10.go_up = false;
        bird10.go_down = false;
      }
      if (bird10.go_right) {
        bird10.pos_x += 2;
      }
      if (bird10.go_left) {
        bird10.pos_x -= 2;
      }
      if (bird10.go_up) {
        bird10.pos_y -= 2;
      }
      if (bird10.go_down) {
        bird10.pos_y += 2;
      }

      bird11.draw(bird11.pos_x,bird11.pos_y,[0,1,2,3]);
      if (bird11.pos_x === 7 * block_w && bird11.pos_y === 7 * block_h) {
        bird11.go_left = false;
        bird11.go_right = true;
        bird11.go_up = false;
        bird11.go_down = false;
        bird11.switcher = 0;
      }
      if (bird11.pos_x === 8 * block_w && bird11.pos_y === 7 * block_h && bird11.switcher === 0) {
        bird11.go_left = false;
        bird11.go_right = false;
        bird11.go_up = false;
        bird11.go_down = true;
      }
      if (bird11.pos_x === 8 * block_w && bird11.pos_y === 8 * block_h) {
        bird11.go_left = false;
        bird11.go_right = false;
        bird11.go_up = true;
        bird11.go_down = false;
        bird11.switcher = 1;
      }
      if (bird11.pos_x === 8 * block_w && bird11.pos_y === 7 * block_h && bird11.switcher === 1) {
        bird11.go_left = true;
        bird11.go_right = false;
        bird11.go_up = false;
        bird11.go_down = false;
      }
      if (bird11.go_right) {
        bird11.pos_x += 2;
      }
      if (bird11.go_left) {
        bird11.pos_x -= 2;
      }
      if (bird11.go_up) {
        bird11.pos_y -= 2;
      }
      if (bird11.go_down) {
        bird11.pos_y += 2;
      }
    }

    if (currMap === 6) {
      bird12.draw(bird12.pos_x,bird12.pos_y,[0,1,2,3]);
      if (bird12.pos_x === 6 * block_w && bird12.pos_y === 3 * block_h) {
        bird12.go_left = true;
        bird12.go_right = false;
        bird12.go_up = false;
        bird12.go_down = true;
      }
      if (bird12.pos_x === 2 * block_w && bird12.pos_y === 7 * block_h) {
        bird12.go_left = false;
        bird12.go_right = true;
        bird12.go_up = true;
        bird12.go_down = false;
      }
      if (bird12.go_right) {
        bird12.pos_x += 2;
      }
      if (bird12.go_left) {
        bird12.pos_x -= 4;
      }
      if (bird12.go_up) {
        bird12.pos_y -= 2;
      }
      if (bird12.go_down) {
        bird12.pos_y += 4;
      }

      bird14.draw(bird14.pos_x,bird14.pos_y,[0,1,2,3]);
      if (bird14.pos_x === 6 * block_w && bird14.pos_y === 2 * block_h) {
        bird14.go_left = true;
        bird14.go_right = false;
        bird14.go_up = false;
        bird14.go_down = true;
      }
      if (bird14.pos_x === 1 * block_w && bird14.pos_y === 7 * block_h) {
        bird14.go_left = false;
        bird14.go_right = true;
        bird14.go_up = true;
        bird14.go_down = false;
      }
      if (bird14.go_right) {
        bird14.pos_x += 2;
      }
      if (bird14.go_left) {
        bird14.pos_x -= 4;
      }
      if (bird14.go_up) {
        bird14.pos_y -= 2;
      }
      if (bird14.go_down) {
        bird14.pos_y += 4;
      }

      bird16.draw(bird16.pos_x,bird16.pos_y,[0,1,2,3]);
      if (bird16.pos_x === 6 * block_w && bird16.pos_y === 1 * block_h) {
        bird16.go_left = true;
        bird16.go_right = false;
        bird16.go_up = false;
        bird16.go_down = true;
      }
      if (bird16.pos_x === 0 * block_w && bird16.pos_y === 7 * block_h) {
        bird16.go_left = false;
        bird16.go_right = true;
        bird16.go_up = true;
        bird16.go_down = false;
      }
      if (bird16.go_right) {
        bird16.pos_x += 2;
      }
      if (bird16.go_left) {
        bird16.pos_x -= 4;
      }
      if (bird16.go_up) {
        bird16.pos_y -= 2;
      }
      if (bird16.go_down) {
        bird16.pos_y += 4;
      }
    }

    if (currMap === 7) {
      bird13.draw(bird13.pos_x,bird13.pos_y,[0,1,2,3]);
      if (bird13.pos_x === 3 * block_w && bird13.pos_y === 4 * block_h) {
        bird13.go_left = true;
        bird13.go_right = false;
        bird13.go_up = false;
        bird13.go_down = true;
      }
      if (bird13.pos_x === 1 * block_w && bird13.pos_y === 6 * block_h) {
        bird13.go_left = false;
        bird13.go_right = true;
        bird13.go_up = true;
        bird13.go_down = false;
      }
      if (bird13.go_right) {
        bird13.pos_x += 2;
      }
      if (bird13.go_left) {
        bird13.pos_x -= 4;
      }
      if (bird13.go_up) {
        bird13.pos_y -= 2;
      }
      if (bird13.go_down) {
        bird13.pos_y += 4;
      }

      bird15.draw(bird15.pos_x,bird15.pos_y,[0,1,2,3]);
      if (bird15.pos_x === 3 * block_w && bird15.pos_y === 0 * block_w) {
        bird15.go_left = false;
        bird15.go_right = false;
        bird15.go_up = false;
        bird15.go_down = true;
      }
      if (bird15.pos_x === 3 * block_w && bird15.pos_y === 2 * block_w) {
        bird15.go_left = false;
        bird15.go_right = true;
        bird15.go_up = false;
        bird15.go_down = false;
      }
      if (bird15.pos_x === 5 * block_w && bird15.pos_y === 2 * block_w) {
        bird15.go_left = false;
        bird15.go_right = false;
        bird15.go_up = true;
        bird15.go_down = false;
      }
      if (bird15.pos_x === 5 * block_w && bird15.pos_y === 0 * block_w) {
        bird15.go_left = true;
        bird15.go_right = false;
        bird15.go_up = false;
        bird15.go_down = false;
      }
      if (bird15.go_right) {
        bird15.pos_x += 2;
      }
      if (bird15.go_left) {
        bird15.pos_x -= 2;
      }
      if (bird15.go_up) {
        bird15.pos_y -= 2;
      }
      if (bird15.go_down) {
        bird15.pos_y += 2;
      }
    }

}

/* follower_shape.js */

"use strict";

/* Shape that animates and follows cursor position */

class FollowerShape extends Shape {
  constructor(landscape) {
    super(landscape);
  }

  draw() {
    return;
    let activeCell = this.landscape.getCell(this.origin[1], this.origin[0]);
    activeCell.css("background-color", "cyan");
    activeCell.addClass("pop");

  }
}

class FontCanvas {
  constructor() {
    this.polygons = new Polygons();
  }
  getPolygons() {
    return this.polygons;
  }
  flip_left_right(x1, y1, x2, y2) {
    for (var i = 0; i < this.polygons.array.length; i++) {
      var inside = true;
      for (var j = 0; j < this.polygons.array[i].array.length; j++) {
        if (x1 > this.polygons.array[i].array[j].x || this.polygons.array[i].array[j].x > x2 ||
          y1 > this.polygons.array[i].array[j].y || this.polygons.array[i].array[j].y > y2) {
          inside = false;
        }
      }
      if (inside) {
        for (var j = 0; j < this.polygons.array[i].array.length; j++) {
          this.polygons.array[i].array[j].x = x2 - (this.polygons.array[i].array[j].x - x1);
          this.polygons.array[i].array[j].x = Math.floor(this.polygons.array[i].array[j].x * 10) / 10;
        }
      }
    }
  }
  flip_up_down(x1, y1, x2, y2) {
    for (var i = 0; i < this.polygons.array.length; i++) {
      var inside = true;
      for (var j = 0; j < this.polygons.array[i].array.length; j++) {
        if (x1 > this.polygons.array[i].array[j].x || this.polygons.array[i].array[j].x > x2 ||
          y1 > this.polygons.array[i].array[j].y || this.polygons.array[i].array[j].y > y2) {
          inside = false;
        }
      }
      if (inside) {
        for (var j = 0; j < this.polygons.array[i].array.length; j++) {
          this.polygons.array[i].array[j].y = y2 - (this.polygons.array[i].array[j].y - y1);
          this.polygons.array[i].array[j].y = Math.floor(this.polygons.array[i].array[j].y * 10) / 10;
        }
      }
    }
  }
  rotate90(x1, y1, x2, y2) {
    for (var i = 0; i < this.polygons.array.length; i++) {
      var inside = true;
      for (var j = 0; j < this.polygons.array[i].array.length; j++) {
        if (x1 > this.polygons.array[i].array[j].x || this.polygons.array[i].array[j].x > x2 ||
          y1 > this.polygons.array[i].array[j].y || this.polygons.array[i].array[j].y > y2) {
          inside = false;
        }
      }
      if (inside) {
        for (var j = 0; j < this.polygons.array[i].array.length; j++) {
          var x = this.polygons.array[i].array[j].x;
          var y = this.polygons.array[i].array[j].y;
          this.polygons.array[i].array[j].x = x1 + (y2 - y);
          this.polygons.array[i].array[j].y = y1 + (x - x1);
          this.polygons.array[i].array[j].x = Math.floor(this.polygons.array[i].array[j].x * 10) / 10;
          this.polygons.array[i].array[j].y = Math.floor(this.polygons.array[i].array[j].y * 10) / 10;
        }
      }
    }
  }
  rotate180(x1, y1, x2, y2) {
    for (var i = 0; i < this.polygons.array.length; i++) {
      var inside = true;
      for (var j = 0; j < this.polygons.array[i].array.length; j++) {
        if (x1 > this.polygons.array[i].array[j].x || this.polygons.array[i].array[j].x > x2 ||
          y1 > this.polygons.array[i].array[j].y || this.polygons.array[i].array[j].y > y2) {
          inside = false;
        }
      }
      if (inside) {
        for (var j = 0; j < this.polygons.array[i].array.length; j++) {
          var x = this.polygons.array[i].array[j].x;
          var y = this.polygons.array[i].array[j].y;
          this.polygons.array[i].array[j].x = x2 - (x - x1);
          this.polygons.array[i].array[j].y = y2 - (y - y1);
          this.polygons.array[i].array[j].x = Math.floor(this.polygons.array[i].array[j].x * 10) / 10;
          this.polygons.array[i].array[j].y = Math.floor(this.polygons.array[i].array[j].y * 10) / 10;
        }
      }
    }
  }
  rotate270(x1, y1, x2, y2) {
    for (var i = 0; i < this.polygons.array.length; i++) {
      var inside = true;
      for (var j = 0; j < this.polygons.array[i].array.length; j++) {
        if (x1 > this.polygons.array[i].array[j].x || this.polygons.array[i].array[j].x > x2 ||
          y1 > this.polygons.array[i].array[j].y || this.polygons.array[i].array[j].y > y2) {
          inside = false;
        }
      }
      if (inside) {
        for (var j = 0; j < this.polygons.array[i].array.length; j++) {
          var x = this.polygons.array[i].array[j].x;
          var y = this.polygons.array[i].array[j].y;
          this.polygons.array[i].array[j].x = x1 + (y - y1);
          this.polygons.array[i].array[j].y = y2 - (x - x1);
          this.polygons.array[i].array[j].x = Math.floor(this.polygons.array[i].array[j].x * 10) / 10;
          this.polygons.array[i].array[j].y = Math.floor(this.polygons.array[i].array[j].y * 10) / 10;
        }
      }
    }
  }
  drawUpperLeftCorner_v(x1, y1, kMinWidthT) {
    var poly = new Polygon();
    poly.push(x1 - kMinWidthT, y1);
    poly.push(x1 + kMinWidthT, y1);
    poly.push(x1 - kMinWidthT, y1 - kMinWidthT);
    this.polygons.push(poly);
  }
  drawUpperLeftCorner(x1, y1, x2, y2, kMinWidthT) {
    const rad = Math.atan((y2 - y1) / (x2 - x1));
    var v;
    if (x1 < x2) { v = 1; } else { v = -1; }
    const XX = Math.sin(rad) * v;
    const XY = Math.cos(rad) * v * -1;
    const YX = Math.cos(rad) * v;
    const YY = Math.sin(rad) * v;
    var poly = new Polygon();
    poly.push(x1 - kMinWidthT * XX, y1 - kMinWidthT * XY);
    poly.push(x1 + kMinWidthT * XX, y1 + kMinWidthT * XY);
    poly.push(x1 - kMinWidthT * XX - kMinWidthT * YX, y1 - kMinWidthT * XY - kMinWidthT * YY);
    this.polygons.push(poly);

  }
  drawUpperRightCorner(x1, y1, kMinWidthT, kagekMinWidthY, kagekWidth) {
    var poly = new Polygon();
    poly.push(x1 - kMinWidthT, y1 - kagekMinWidthY);
    poly.push(x1, y1 - kagekMinWidthY - kagekWidth);
    poly.push(x1 + kMinWidthT + kagekWidth, y1 + kagekMinWidthY);
    poly.push(x1 + kMinWidthT, y1 + kMinWidthT - 1);
    poly.push(x1 - kMinWidthT, y1 + kMinWidthT + 4);
    this.polygons.push(poly);
  }
  drawUpperRightCorner_straight_v(x1, y1, kMinWidthT, kagekMinWidthY, kagekWidth) {//vertical straight line
    var poly = new Polygon();
    poly.push(x1 - kMinWidthT, y1 - kagekMinWidthY);
    poly.push(x1, y1 - kagekMinWidthY - kagekWidth);
    poly.push(x1 + kMinWidthT + kagekWidth, y1 + kagekMinWidthY);
    poly.push(x1 + kMinWidthT, y1 + kMinWidthT);
    poly.push(x1 - kMinWidthT, y1);
    this.polygons.push(poly);
  }
  drawOpenBegin_straight(x1, y1, kMinWidthT, kagekMinWidthY, rad, v) {
    var XX = Math.sin(rad) * v;
    var XY = Math.cos(rad) * v * -1;
    var YX = Math.cos(rad) * v;
    var YY = Math.sin(rad) * v;

    var poly = new Polygon();
    poly.push(x1 + kMinWidthT * XX + (kagekMinWidthY * 0.5) * YX,
      y1 + kMinWidthT * XY + (kagekMinWidthY * 0.5) * YY);
    poly.push(x1 + (kMinWidthT + kMinWidthT * 0.5) * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YX,
      y1 + (kMinWidthT + kMinWidthT * 0.5) * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YY);
    poly.push(x1 + kMinWidthT * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2) * YX - 2 * XX,
      y1 + kMinWidthT * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2) * YY + 1 * XY);
    this.polygons.push(poly);

  }
  drawOpenBegin_straight_v(x1, y1, kMinWidthT, kagekMinWidthY) {
    var poly = new Polygon();
    poly.push(x1 + kMinWidthT, y1 + kagekMinWidthY * 0.5);
    poly.push(x1 + kMinWidthT + kMinWidthT * 0.5, y1 + kagekMinWidthY * 0.5 + kagekMinWidthY);
    poly.push(x1 + kMinWidthT - 2, y1 + kagekMinWidthY * 0.5 + kagekMinWidthY * 2 + 1);
    this.polygons.push(poly);
  }
  drawOpenBegin_curve_down(x1, y1, sx1, sy1, kMinWidthT, kagekMinWidthY) {

    var type;
    var pm = 0;

    type = (Math.atan2(Math.abs(y1 - sy1), Math.abs(x1 - sx1)) / Math.PI * 2 - 0.4);
    if (type > 0) {
      type = type * 2;
    } else {
      type = type * 16;
    }
    if (type < 0) {
      pm = -1;
    } else {
      pm = 1;
    }

    var rad = Math.atan((sy1 - y1) / (sx1 - x1));
    var v;
    if (x1 < sx1) { v = 1; } else { v = -1; }
    var XX = Math.sin(rad) * v;
    var XY = Math.cos(rad) * v * -1;
    var YX = Math.cos(rad) * v;
    var YY = Math.sin(rad) * v;

    if (x1 == sx1) {
      poly = new Polygon();
      poly.push(x1 - kMinWidthT, y1 + 1);
      poly.push(x1 + kMinWidthT, y1);
      poly.push(x1 - kMinWidthT * pm, y1 - kagekMinWidthY * type * pm);
      //if(x1 > x2){
      //  poly.reverse();
      //}
      this.polygons.push(poly);
    }
    else {
      poly = new Polygon();
      poly.push(x1 - kMinWidthT * XX + 1 * YX, y1 - kMinWidthT * XY + 1 * YY);
      poly.push(x1 + kMinWidthT * XX, y1 + kMinWidthT * XY);
      poly.push(x1 - kMinWidthT * pm * XX - kagekMinWidthY * type * pm * YX, y1 - kMinWidthT * pm * XY - kagekMinWidthY * type * pm * YY);
      //if(x1 > x2){
      //  poly.reverse();
      //}

      this.polygons.push(poly);
    }

    ////////////////////
    if (pm > 0) {
      type = 0;
    }
    var move = kagekMinWidthY * type * pm;
    var poly = new Polygon();

    if (x1 == sx1) {
      poly.push(x1 + kMinWidthT, y1 - move);
      poly.push(x1 + kMinWidthT * 1.5, y1 + kagekMinWidthY - move);
      poly.push(x1 + kMinWidthT - 2, y1 + kagekMinWidthY * 2 + 1);
    }
    else {
      poly.push(x1 + kMinWidthT * XX - move * YX,
        y1 + kMinWidthT * XY - move * YY);
      poly.push(x1 + kMinWidthT * 1.5 * XX + (kagekMinWidthY - move * 1.2) * YX,
        y1 + kMinWidthT * 1.5 * XY + (kagekMinWidthY - move * 1.2) * YY);
      poly.push(x1 + (kMinWidthT - 2) * XX + (kagekMinWidthY * 2 - move * 0.8 + 1) * YX,
        y1 + (kMinWidthT - 2) * XY + (kagekMinWidthY * 2 - move * 0.8 + 1) * YY);
      //if(x1 < x2){
      //  poly.reverse();
      //}
    }
    this.polygons.push(poly);


  }
  drawOpenBegin_curve_up(x1, y1, sx1, sy1, kMinWidthT, kagekMinWidthY) {

    if (x1 == sx1) {
      poly = new Polygon();
      poly.push(x1 - kMinWidthT, y1);
      poly.push(x1 + kMinWidthT, y1);
      poly.push(x1 + kMinWidthT, y1 - kagekMinWidthY);
      this.polygons.push(poly);
    }
    else {
      var rad = Math.atan((sy1 - y1) / (sx1 - x1));
      var v;
      if (x1 < sx1) { v = 1; } else { v = -1; }
      var XX = Math.sin(rad) * v;
      var XY = Math.cos(rad) * v * -1;
      var YX = Math.cos(rad) * v;
      var YY = Math.sin(rad) * v;

      poly = new Polygon();
      poly.push(x1 - kMinWidthT * XX, y1 - kMinWidthT * XY);
      poly.push(x1 + kMinWidthT * XX, y1 + kMinWidthT * XY);
      poly.push(x1 + kMinWidthT * XX - kagekMinWidthY * YX, y1 + kMinWidthT * XY - kagekMinWidthY * YY);
      //if(x1 < x2){
      //  poly.reverse();
      //}
      this.polygons.push(poly);
    }

    ////////////////////
    var poly = new Polygon();
    if (x1 == sx1) {
      poly.push(x1 - kMinWidthT, y1);
      poly.push(x1 - kMinWidthT * 1.5, y1 + kagekMinWidthY);
      poly.push(x1 - kMinWidthT * 0.5, y1 + kagekMinWidthY * 3);
    }
    else {
      poly.push(x1 - kMinWidthT * XX, y1 - kMinWidthT * XY);
      poly.push(x1 - kMinWidthT * 1.5 * XX + kagekMinWidthY * YX, y1 + kagekMinWidthY * YY - kMinWidthT * 1.5 * XY);
      poly.push(x1 - kMinWidthT * 0.5 * XX + kagekMinWidthY * 3 * YX, y1 + kagekMinWidthY * 3 * YY - kMinWidthT * 0.5 * XY);
      //if(x1 < x2){
      //  poly.reverse();
      //}
    }
    this.polygons.push(poly);
  }
  drawLowerRightHT_v(x2, y2, kMinWidthT, kagekMinWidthY) {//for T design
    var poly = new Polygon();
    poly.push(x2, y2 + kagekMinWidthY);
    poly.push(x2 + kMinWidthT, y2 - kagekMinWidthY * 3);
    poly.push(x2 + kMinWidthT * 2, y2 - kagekMinWidthY);
    poly.push(x2 + kMinWidthT * 2, y2 + kagekMinWidthY);
    this.polygons.push(poly);
  }
  drawLowerRightHT(x2, y2, kMinWidthT, kagekMinWidthY) {//for T design
    poly = new Polygon();
    poly.push(x2, y2 + kagekMinWidthY);
    poly.push(x2 + kMinWidthT * 0.5, y2 - kagekMinWidthY * 4);
    poly.push(x2 + kMinWidthT * 2, y2 - kagekMinWidthY);
    poly.push(x2 + kMinWidthT * 2, y2 + kagekMinWidthY);
    this.polygons.push(poly);
  }
  drawNewGTHbox(x2m, y2, kMinWidthT, kagekMinWidthY) {//for new GTH box's left bottom corner MUKI KANKEINASHI
    var poly = new Polygon();
    poly.push(x2m, y2 - kagekMinWidthY * 5);
    poly.push(x2m - kMinWidthT * 2, y2);
    poly.push(x2m - kagekMinWidthY, y2 + kagekMinWidthY * 5);
    poly.push(x2m + kMinWidthT, y2 + kagekMinWidthY);
    poly.push(x2m, y2);
    this.polygons.push(poly);
  }
  drawLowerLeft(x2, y2, kMinWidthT, kagekMinWidthY) {
    var poly = new Polygon();
    poly.push(x2 - kMinWidthT, y2 - kagekMinWidthY * 3);
    poly.push(x2 - kMinWidthT * 2, y2);
    poly.push(x2 - kagekMinWidthY, y2 + kagekMinWidthY * 5);
    poly.push(x2 + kMinWidthT, y2 + kagekMinWidthY);
    this.polygons.push(poly);
  }
  drawTailCircle_wrong(tailX, tailY, srcX, srcY, r) {
    //draw a (semi)circle on the tail of the line from (srcX, srcY) to (tailX, tailY)
    //The process for lines directed exactly in the negative x-direction or y-direction is not correct, so it's named as "wrong".

    if (srcX == tailX) {//vertical
      this.drawTailCircle_v(tailX, tailY, r);
    }
    else if (srcY == tailY) {//horizontal
      this.drawTailCircle_h(tailX, tailY, r);
    }
    else {
      var rad = Math.atan((tailY - srcY) / (tailX - srcX));
      var v;
      if (srcX < tailX) { v = 1; } else { v = -1; }

      this.drawTailCircle_rad(tailX, tailY, rad, v, r);
    }
  }
  drawTailCircle_right(tailX, tailY, srcX, srcY, r) {
    //draw a (semi)circle on the tail of the line from (srcX, srcY) to (tailX, tailY)
    var rad;
    var v;
    if (srcX == tailX) {//vertical
      if (tailY > srcY) {
        rad = Math.PI / 2;
      } else {
        rad = -Math.PI / 2;
      }
      v = 1;
    } else {
      rad = Math.atan((tailY - srcY) / (tailX - srcX));
      if (srcX < tailX) { v = 1; } else { v = -1; }
    }
    this.drawTailCircle_rad(tailX, tailY, rad, v, r);
  }
  drawTailCircle_wrong_c(tailX, tailY, srcX, srcY, r) {
    //draw a (semi)circle on the tail of the line from (srcX, srcY) to (tailX, tailY)
    //The process for lines directed exactly in the negative x-direction or y-direction is not correct, so it's named as "wrong".
    if (srcX == tailX) {//vertical
      this.drawTailCircle_v_c(tailX, tailY, r);
    }
    else if (srcY == tailY) {//horizontal
      this.drawTailCircle_h_c(tailX, tailY, r);
    }
    else {
      var rad = Math.atan((tailY - srcY) / (tailX - srcX));
      var v;
      if (srcX < tailX) { v = 1; } else { v = -1; }
      this.drawTailCircle_rad_c(tailX, tailY, rad, v, r);
    }
  }
  drawTailCircle_right_c(tailX, tailY, srcX, srcY, r) {
    //draw a (semi)circle on the tail of the line from (srcX, srcY) to (tailX, tailY)
    var rad;
    var v;
    if (srcX == tailX) {//vertical
      if (tailY > srcY) {
        rad = Math.PI / 2;
      } else {
        rad = -Math.PI / 2;
      }
      v = 1;
    } else {
      rad = Math.atan((tailY - srcY) / (tailX - srcX));
      if (srcX < tailX) { v = 1; } else { v = -1; }
    }
    this.drawTailCircle_rad_c(tailX, tailY, rad, v, r);
  }
  drawTailCircle_h(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2, y2 - kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.7, y2 - kMinWidthT2 * 0.7);
    poly.push(x2 + kMinWidthT2, y2);
    poly.push(x2 + kMinWidthT2 * 0.7, y2 + kMinWidthT2 * 0.7);
    poly.push(x2, y2 + kMinWidthT2);
    this.polygons.push(poly);
  }
  drawTailCircle_h_c(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2, y2 - kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.9, y2 - kMinWidthT2 * 0.9, 1);
    poly.push(x2 + kMinWidthT2, y2);
    poly.push(x2 + kMinWidthT2 * 0.9, y2 + kMinWidthT2 * 0.9, 1);
    poly.push(x2, y2 + kMinWidthT2);
    this.polygons.push(poly);
  }
  drawTailCircle_h_neg_c(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2, y2 - kMinWidthT2);
    poly.push(x2 - kMinWidthT2 * 0.9, y2 - kMinWidthT2 * 0.9, 1);
    poly.push(x2 - kMinWidthT2, y2);
    poly.push(x2 - kMinWidthT2 * 0.9, y2 + kMinWidthT2 * 0.9, 1);
    poly.push(x2, y2 + kMinWidthT2);
    this.polygons.push(poly);
  }
  drawTailCircle2_h(x2, y2, kMinWidthT2) {
    var poly = new Polygon();

    poly.push(x2, y2 - kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.6, y2 - kMinWidthT2 * 0.6);
    poly.push(x2 + kMinWidthT2, y2);
    poly.push(x2 + kMinWidthT2 * 0.6, y2 + kMinWidthT2 * 0.6);
    poly.push(x2, y2 + kMinWidthT2);
    this.polygons.push(poly);
  }
  drawTailCircle2_h_neg(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2, y2 - kMinWidthT2);
    poly.push(x2 - kMinWidthT2 * 0.6, y2 - kMinWidthT2 * 0.6);
    poly.push(x2 - kMinWidthT2, y2);
    poly.push(x2 - kMinWidthT2 * 0.6, y2 + kMinWidthT2 * 0.6);
    poly.push(x2, y2 + kMinWidthT2);
    this.polygons.push(poly);
  }
  drawTailCircle_v(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2 - kMinWidthT2, y2);
    poly.push(x2 - kMinWidthT2 * 0.7, y2 + kMinWidthT2 * 0.7);
    poly.push(x2, y2 + kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.7, y2 + kMinWidthT2 * 0.7);
    poly.push(x2 + kMinWidthT2, y2);
    this.polygons.push(poly);
  }
  drawTailCircle2_v(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2 - kMinWidthT2, y2);
    poly.push(x2 - kMinWidthT2 * 0.6, y2 + kMinWidthT2 * 0.6);
    poly.push(x2, y2 + kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.6, y2 + kMinWidthT2 * 0.6);
    poly.push(x2 + kMinWidthT2, y2);
    this.polygons.push(poly);
  }
  drawTailCircle_v_c(x2, y2, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2 - kMinWidthT2, y2);
    poly.push(x2 - kMinWidthT2 * 0.9, y2 + kMinWidthT2 * 0.9, 1);
    poly.push(x2, y2 + kMinWidthT2);
    poly.push(x2 + kMinWidthT2 * 0.9, y2 + kMinWidthT2 * 0.9, 1);
    poly.push(x2 + kMinWidthT2, y2);
    this.polygons.push(poly);
  }
  drawTailCircle_rad(x2, y2, rad, v, kMinWidthT2) {
    var poly = new Polygon();

    poly.push(x2 + Math.sin(rad) * kMinWidthT2 * v, y2 - Math.cos(rad) * kMinWidthT2 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * 0.7 * v + Math.sin(rad) * kMinWidthT2 * 0.7 * v,
      y2 + Math.sin(rad) * kMinWidthT2 * 0.7 * v - Math.cos(rad) * kMinWidthT2 * 0.7 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * v, y2 + Math.sin(rad) * kMinWidthT2 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * 0.7 * v - Math.sin(rad) * kMinWidthT2 * 0.7 * v,
      y2 + Math.sin(rad) * kMinWidthT2 * 0.7 * v + Math.cos(rad) * kMinWidthT2 * 0.7 * v);
    poly.push(x2 - Math.sin(rad) * kMinWidthT2 * v, y2 + Math.cos(rad) * kMinWidthT2 * v);
    this.polygons.push(poly);

  }
  drawKAGICircle_rad(x2, y2, rad, v, kMinWidthT) {
    var poly = new Polygon();
    poly.push(x2 + Math.sin(rad) * kMinWidthT * v, y2 - Math.cos(rad) * kMinWidthT * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT * 0.8 * v + Math.sin(rad) * kMinWidthT * 0.6 * v,
      y2 + Math.sin(rad) * kMinWidthT * 0.8 * v - Math.cos(rad) * kMinWidthT * 0.6 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT * v, y2 + Math.sin(rad) * kMinWidthT * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT * 0.8 * v - Math.sin(rad) * kMinWidthT * 0.6 * v,
      y2 + Math.sin(rad) * kMinWidthT * 0.8 * v + Math.cos(rad) * kMinWidthT * 0.6 * v);
    poly.push(x2 - Math.sin(rad) * kMinWidthT * v, y2 + Math.cos(rad) * kMinWidthT * v);
    this.polygons.push(poly);

  }
  drawTailCircle_rad_c(x2, y2, rad, v, kMinWidthT2) {
    var poly = new Polygon();
    poly.push(x2 + Math.sin(rad) * kMinWidthT2 * v, y2 - Math.cos(rad) * kMinWidthT2 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * 0.9 * v + Math.sin(rad) * kMinWidthT2 * 0.9 * v,
      y2 + Math.sin(rad) * kMinWidthT2 * 0.9 * v - Math.cos(rad) * kMinWidthT2 * 0.9 * v, 1);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * v, y2 + Math.sin(rad) * kMinWidthT2 * v);
    poly.push(x2 + Math.cos(rad) * kMinWidthT2 * 0.9 * v - Math.sin(rad) * kMinWidthT2 * 0.9 * v,
      y2 + Math.sin(rad) * kMinWidthT2 * 0.9 * v + Math.cos(rad) * kMinWidthT2 * 0.9 * v, 1);
    poly.push(x2 - Math.sin(rad) * kMinWidthT2 * v, y2 + Math.cos(rad) * kMinWidthT2 * v);
    this.polygons.push(poly);

  }
  drawL2RSweepEnd(x2, y2, sx2, sy2, kMinWidthT, kagekL2RDfatten) {
    var rad, v;
    var YX, YY, XX, XY;
    rad = Math.atan((y2 - sy2) / (x2 - sx2));
    if (sx2 < x2) { v = 1; } else { v = -1; }
    YX = Math.sin(rad) * v * -1;
    YY = Math.cos(rad) * v;
    XX = Math.cos(rad) * v;
    XY = Math.sin(rad) * v;

    var type = (Math.atan2(Math.abs(y2 - sy2), Math.abs(x2 - sx2)) / Math.PI * 2 - 0.6);
    if (type > 0) {
      type = type * 8;
    } else {
      type = type * 3;
    }
    var pm = 0;
    if (type < 0) {
      pm = -1;
    } else {
      pm = 1;
    }
    var poly = new Polygon();
    if (sy2 == y2) {
      poly.push(x2, y2 + kMinWidthT * kagekL2RDfatten);
      poly.push(x2, y2 - kMinWidthT * kagekL2RDfatten);
      poly.push(x2 + kMinWidthT * kagekL2RDfatten * Math.abs(type), y2 + kMinWidthT * kagekL2RDfatten * pm);
    } else {
      poly.push(x2 + kMinWidthT * kagekL2RDfatten * YX, y2 + kMinWidthT * kagekL2RDfatten * YY);
      poly.push(x2 - kMinWidthT * kagekL2RDfatten * YX, y2 - kMinWidthT * kagekL2RDfatten * YY);
      poly.push(x2 + kMinWidthT * kagekL2RDfatten * Math.abs(type) * XX + kMinWidthT * kagekL2RDfatten * pm * YX,
        y2 + kMinWidthT * kagekL2RDfatten * Math.abs(type) * XY + kMinWidthT * kagekL2RDfatten * pm * YY);
    }

    this.polygons.push(poly);

  }
  drawTurnUpwards_Bending_pos_h(x2, y2, kMinWidthT, kagekWidth, opt1, kagekAdjustMageStep) {
    var poly = new Polygon();
    //poly.push(x2, y2 - kMinWidthT + 1);
    poly.push(x2, y2 - kMinWidthT);
    poly.push(x2 + 2, y2 - kMinWidthT - kagekWidth * (4 * (1 - opt1 / kagekAdjustMageStep) + 1));
    poly.push(x2, y2 - kMinWidthT - kagekWidth * (4 * (1 - opt1 / kagekAdjustMageStep) + 1));
    //poly.push(x2 - kMinWidthT, y2 - kMinWidthT + 1);
    poly.push(x2 - kMinWidthT, y2 - kMinWidthT);
    //poly.reverse(); // for fill-rule
    this.polygons.push(poly);
  }
  drawTurnUpwards_Bending_pos(x2, y2, kMinWidthT, kagekWidth, rad, v) {
    var poly = new Polygon();
    poly.push(x2 + (kMinWidthT - 1) * Math.sin(rad) * v, y2 - (kMinWidthT - 1) * Math.cos(rad) * v);
    poly.push(x2 + 2 * Math.cos(rad) * v + (kMinWidthT + kagekWidth * 5) * Math.sin(rad) * v,
      y2 + 2 * Math.sin(rad) * v - (kMinWidthT + kagekWidth * 5) * Math.cos(rad) * v);
    poly.push(x2 + (kMinWidthT + kagekWidth * 5) * Math.sin(rad) * v,
      y2 - (kMinWidthT + kagekWidth * 5) * Math.cos(rad) * v);
    poly.push(x2 + (kMinWidthT - 1) * Math.sin(rad) * v - kMinWidthT * Math.cos(rad) * v,
      y2 - (kMinWidthT - 1) * Math.cos(rad) * v - kMinWidthT * Math.sin(rad) * v);
    this.polygons.push(poly);
  }
  drawTurnUpwards_Bending_neg_h(x2, y2, kMinWidthT, kagekWidth, opt1, kagekAdjustMageStep) {
    var poly = new Polygon();
    //poly.push(x2, y2 - kMinWidthT + 1);
    poly.push(x2, y2 - kMinWidthT);
    poly.push(x2 - 2, y2 - kMinWidthT - kagekWidth * (4 * (1 - opt1 / kagekAdjustMageStep) + 1));
    poly.push(x2, y2 - kMinWidthT - kagekWidth * (4 * (1 - opt1 / kagekAdjustMageStep) + 1));
    //poly.push(x2 + kMinWidthT, y2 - kMinWidthT + 1);
    poly.push(x2 + kMinWidthT, y2 - kMinWidthT);
    //poly.reverse(); // for fill-rule
    this.polygons.push(poly);
  }
  drawTurnUpwards_Bending_neg(x2, y2, kMinWidthT, kagekWidth, rad, v) {
    var poly = new Polygon();
    poly.push(x2 - (kMinWidthT - 1) * Math.sin(rad) * v, y2 + (kMinWidthT - 1) * Math.cos(rad) * v);
    poly.push(x2 + 2 * Math.cos(rad) * v - (kMinWidthT + kagekWidth * 5) * Math.sin(rad) * v,
      y2 + 2 * Math.sin(rad) * v + (kMinWidthT + kagekWidth * 5) * Math.cos(rad) * v);
    poly.push(x2 - (kMinWidthT + kagekWidth * 5) * Math.sin(rad) * v,
      y2 + (kMinWidthT + kagekWidth * 5) * Math.cos(rad) * v);
    poly.push(x2 + (kMinWidthT - 1) * Math.sin(rad) * v - kMinWidthT * Math.cos(rad) * v,
      y2 - (kMinWidthT - 1) * Math.cos(rad) * v - kMinWidthT * Math.sin(rad) * v);
    this.polygons.push(poly);
  }
  drawTurnUpwards_CurveBezier(y1, x2, y2, kMinWidthT, kagekWidth) {
    //ENDTYPE = TURN_UPWARDS
    //this method is used in STROKETYPE=CURVE(2) or BEZIER(6), and not in BENDING(3) or BENDING_ROUND(4)
    //The angle is fixed(always upwards).
    var poly = new Polygon();
    if (y1 < y2) {
      poly.push(x2, y2 - kMinWidthT + 1);
      poly.push(x2 + 2, y2 - kMinWidthT - kagekWidth * 5);
      poly.push(x2, y2 - kMinWidthT - kagekWidth * 5);
      poly.push(x2 - kMinWidthT, y2 - kMinWidthT + 1);
    } else {
      poly.push(x2, y2 + kMinWidthT - 1);
      poly.push(x2 - 2, y2 + kMinWidthT + kagekWidth * 5);
      poly.push(x2, y2 + kMinWidthT + kagekWidth * 5);
      poly.push(x2 + kMinWidthT, y2 + kMinWidthT - 1);
    }
    this.polygons.push(poly);
  }
  drawTurnLeft(x2, y2, opt2, kMinWidthT, kagekWidth, kagekMinWidthT) {
    var poly = new Polygon();
    poly.push(x2, y2);
    poly.push(x2, y2 - kMinWidthT);
    poly.push(x2 - kagekWidth * 4 * Math.min(1 - opt2 / 10, Math.pow(kMinWidthT / kagekMinWidthT, 3)), y2 - kMinWidthT);
    poly.push(x2 - kagekWidth * 4 * Math.min(1 - opt2 / 10, Math.pow(kMinWidthT / kagekMinWidthT, 3)), y2 - kMinWidthT * 0.5);
    //poly.reverse();
    this.polygons.push(poly);

  }
  drawUroko_h(x2, y2, kagekMinWidthY, urokoX, urokoY) {
    var poly = new Polygon();
    poly.push(x2, y2 - kagekMinWidthY);
    poly.push(x2 - urokoX, y2);
    poly.push(x2 - urokoX / 2, y2 - urokoY);
    this.polygons.push(poly);
  }
  drawUroko(x2, y2, x1, y1, kagekMinWidthY, urokoX, urokoY) {
    var rad = Math.atan((y2 - y1) / (x2 - x1));
    var poly = new Polygon();
    poly.push(x2 + Math.sin(rad) * kagekMinWidthY, y2 - Math.cos(rad) * kagekMinWidthY);
    poly.push(x2 - Math.cos(rad) * urokoX, y2 - Math.sin(rad) * urokoX);
    poly.push(x2 - Math.cos(rad) * urokoX / 2 + Math.sin(rad) * urokoX / 2, y2 - Math.sin(rad) * urokoY - Math.cos(rad) * urokoY);
    //should be fixed as following:
    //poly.push(x2 - Math.cos(rad) * urokoX / 2 + Math.sin(rad) * urokoY, y2 - Math.sin(rad) * urokoX / 2 - Math.cos(rad) * urokoY);
    this.polygons.push(poly);
  }
  drawLine(x1, y1, x2, y2, halfWidth) {
    //draw a line(rectangle).
    var poly = new Polygon(4);
    if (x1 == x2) {//vertical
      poly.set(0, x1 - halfWidth, y1);
      poly.set(1, x2 - halfWidth, y2);
      poly.set(2, x2 + halfWidth, y2);
      poly.set(3, x1 + halfWidth, y1);
      //clockwise if y2<y1 (need reversing?)
    } else if (y1 == y2) {//horizontal
      poly.set(0, x1, y1 - halfWidth);
      poly.set(1, x2, y2 - halfWidth);
      poly.set(2, x2, y2 + halfWidth);
      poly.set(3, x1, y1 + halfWidth);
      //clockwise if x1<x2
    } else {
      rad = Math.atan((y2 - y1) / (x2 - x1));
      poly.set(0, x1 + Math.sin(rad) * halfWidth, y1 - Math.cos(rad) * halfWidth);
      poly.set(1, x2 + Math.sin(rad) * halfWidth, y2 - Math.cos(rad) * halfWidth);
      poly.set(2, x2 - Math.sin(rad) * halfWidth, y2 + Math.cos(rad) * halfWidth);
      poly.set(3, x1 - Math.sin(rad) * halfWidth, y1 + Math.cos(rad) * halfWidth);
    }
    this.polygons.push(poly);

  }
  drawOffsetLine_wrong(x1, y1, x2, y2, halfWidth, off_left1, off_right1, off_left2, off_right2) {
    //Draw a line(rectangle), and adjust the rectangle to trapezoid.
    //off_left1 means how much the start point of the left side (seeing from (x1, y1)) of the rectangle is stretched.
    //Note that the positive Y-axis goes in the downwards.
    //off_left2 deals with the end point.  The right side is managed similarly.
    //The process for lines directed exactly in the negative x-direction or y-direction is not correct, so it's named as "wrong".
    //The generated polygon will be clockwise (unless "wrong" input is given).
    var poly = new Polygon(4);
    if (x1 == x2) { //vertical
      poly.set(3, x1 - halfWidth, y1 - off_right1);
      poly.set(0, x1 + halfWidth, y1 - off_left1);

      poly.set(2, x2 - halfWidth, y2 + off_right2);
      poly.set(1, x2 + halfWidth, y2 + off_left2);
    } else if (y1 == y2) {//horizontal
      poly.set(0, x1 - off_left1, y1 - halfWidth);
      poly.set(3, x1 - off_right1, y1 + halfWidth);

      poly.set(1, x2 + off_left2, y2 - halfWidth);
      poly.set(2, x2 + off_right2, y2 + halfWidth);
    } else {
      rad = Math.atan((y2 - y1) / (x2 - x1));
      if (x1 > x2) { v = -1; } else { v = 1; }
      poly.set(0, x1 + Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_left1 * v,
        y1 - Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_left1 * v);
      poly.set(3, x1 - Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_right1 * v,
        y1 + Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_right1 * v);

      poly.set(1, x2 + Math.sin(rad) * halfWidth * v + off_left2 * Math.cos(rad) * v,
        y2 - Math.cos(rad) * halfWidth * v + off_left2 * Math.sin(rad) * v);
      poly.set(2, x2 - Math.sin(rad) * halfWidth * v + off_right2 * Math.cos(rad) * v,
        y2 + Math.cos(rad) * halfWidth * v + off_right2 * Math.sin(rad) * v);
    }
    this.polygons.push(poly);
  }
  minchoDrawBezier(kage, x1pre, y1pre, sx1, sy1, sx2, sy2, x2pre, y2pre, a1, a2, kMinWidthT) {
    var rad, t;
    var x, y, v;
    var delta;
    var deltad;
    var hosomi;
    var newx1, newy1, newx2, newy2;

    switch (a1 % 100) {
      case 0:
      case 7:
        delta = -1 * kage.kMinWidthY * 0.5;
        break;
      case 1:
      case 2: // ... must be 32
      case 6:
      case 22:
      case 32: // changed
        delta = 0;
        break;
      case 12:
        //case 32:
        delta = kage.kMinWidthY;
        break;
      default:
        break;
    }
    let [x1, y1] = get_extended_dest(x1pre, y1pre, sx1, sy1, delta);

    switch (a2 % 100) {
      case 0:
      case 1:
      case 7:
      case 9:
      case 15: // it can change to 15->5
      case 14: // it can change to 14->4
      case 17: // no need
      case 5:
        delta = 0;
        break;
      case 8: // get shorten for tail's circle
        delta = -1 * kMinWidthT * 0.5;
        break;
      default:
        break;
    }
    let [x2, y2] = get_extended_dest(x2pre, y2pre, sx2, sy2, delta);
    hosomi = 0.5;
    if (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) < 50) {
      hosomi += 0.4 * (1 - Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 50);
    }


    var poly = new Polygon();
    var poly2 = new Polygon();
    var ix, iy, ia, ib, ir;
    var tt;



    for (tt = 0; tt <= 1000; tt = tt + kage.kRate) {
      t = tt / 1000;

      // calculate a dot
      x = (1.0 - t) * (1.0 - t) * (1.0 - t) * x1 + 3.0 * t * (1.0 - t) * (1.0 - t) * sx1 + 3 * t * t * (1.0 - t) * sx2 + t * t * t * x2;
      y = (1.0 - t) * (1.0 - t) * (1.0 - t) * y1 + 3.0 * t * (1.0 - t) * (1.0 - t) * sy1 + 3 * t * t * (1.0 - t) * sy2 + t * t * t * y2;
      // KATAMUKI of vector by BIBUN
      ix = t * t * (-3 * x1 + 9 * sx1 + -9 * sx2 + 3 * x2) + t * (6 * x1 + -12 * sx1 + 6 * sx2) + -3 * x1 + 3 * sx1;
      iy = t * t * (-3 * y1 + 9 * sy1 + -9 * sy2 + 3 * y2) + t * (6 * y1 + -12 * sy1 + 6 * sy2) + -3 * y1 + 3 * sy1;

      // line SUICHOKU by vector
      if (ix != 0 && iy != 0) {
        ir = Math.atan(iy / ix * -1);
        ia = Math.sin(ir) * (kMinWidthT);
        ib = Math.cos(ir) * (kMinWidthT);
      }
      else if (ix == 0) {
        if (iy < 0) {
          ia = -kMinWidthT;
        } else {
          ia = kMinWidthT;
        }
        ib = 0;
      }
      else {
        ia = 0;
        ib = kMinWidthT;
      }

      if (a1 == 7 && a2 == 0) { // L2RD: fatten
        deltad = Math.pow(t, hosomi) * kage.kL2RDfatten;
      }
      else if (a1 == 7) {
        deltad = Math.pow(t, hosomi);
        deltad = Math.pow(deltad, 0.7); // make fatten
      }
      else if (a2 == 7) {
        deltad = Math.pow(1.0 - t, hosomi);
      }
      else { deltad = 1; }

      if (deltad < 0.15) {
        deltad = 0.15;
      }
      ia = ia * deltad;
      ib = ib * deltad;

      //reverse if vector is going 2nd/3rd quadrants
      if (ix <= 0) {
        ia = ia * -1;
        ib = ib * -1;
      }

      //copy to polygon structure
      poly.push(x - ia, y - ib);
      poly2.push(x + ia, y + ib);
    }

    // suiheisen ni setsuzoku
    if (a1 == 132) {
      var index = 0;
      while (true) {
        if (poly2.array[index].y <= y1 && y1 <= poly2.array[index + 1].y) {
          break;
        }
        index++;
      }
      newx1 = poly2.array[index + 1].x + (poly2.array[index].x - poly2.array[index + 1].x) *
        (poly2.array[index + 1].y - y1) / (poly2.array[index + 1].y - poly2.array[index].y);
      newy1 = y1;
      newx2 = poly.array[0].x + (poly.array[0].x - poly.array[1].x) * (poly.array[0].y - y1) /
        (poly.array[1].y - poly.array[0].y);
      newy2 = y1;

      for (var i = 0; i < index; i++) {
        poly2.shift();
      }
      poly2.set(0, newx1, newy1);
      poly.unshift(newx2, newy2);
    }

    // suiheisen ni setsuzoku 2
    if (a1 == 22) {
      if (x1 > sx1) {
        var index = 0;
        while (true) {
          if (poly2.array[index].y <= y1 && y1 <= poly2.array[index + 1].y) {
            break;
          }
          index++;
        }
        newx1 = poly2.array[index + 1].x + (poly2.array[index].x - poly2.array[index + 1].x) *
          (poly2.array[index + 1].y - y1) / (poly2.array[index + 1].y - poly2.array[index].y);
        newy1 = y1;
        newx2 = poly.array[0].x + (poly.array[0].x - poly.array[1].x - 1) * (poly.array[0].y - y1) /
          (poly.array[1].y - poly.array[0].y);
        newy2 = y1 + 1;

        for (var i = 0; i < index; i++) {
          poly2.shift();
        }
        poly2.set(0, newx1, newy1);
        poly.unshift(newx2, newy2);
      }
    }
    poly2.reverse();
    poly.concat(poly2);
    this.polygons.push(poly);
  }
  minchoDrawCurve(kage, x1pre, y1pre, sx, sy, x2pre, y2pre, a1, a2, kMinWidthT, opt3, opt4) {
    var rad, t;
    var x, y, v;
    var delta;
    var deltad;
    var hosomi;
    var kMinWidthT;
    //var a1, a2, opt1, opt2, opt3, opt4;
    //////
    var newx1, newy1, newx2, newy2;
    //////

    //a1 = ta1 % 1000;
    //a2 = ta2 % 100;
    //opt1 = Math.floor((ta1 % 10000) / 1000);
    //opt2 = Math.floor((ta2 % 1000) / 100);
    //opt3 = Math.floor(ta1 / 10000);
    //opt4 = Math.floor(ta2 / 1000);
    //kMinWidthT = kage.kMinWidthT - opt1 / 2;


    //kMinWidthT2 = kage.kMinWidthT - opt4 / 2;

    switch (a1 % 100) {
      case 0:
      case 7:
        delta = -1 * kage.kMinWidthY * 0.5;
        break;
      case 1:
      case 2: // ... must be 32
      case 6:
      case 22:
      case 32: // changed
        delta = 0;
        break;
      case 12:
        //case 32:
        delta = kage.kMinWidthY;
        break;
      default:
        break;
    }

    let [x1, y1] = get_extended_dest(x1pre, y1pre, sx, sy, delta);

    switch (a2 % 100) {
      case 0:
      case 1:
      case 7:
      case 9:
      case 15: // it can change to 15->5
      case 14: // it can change to 14->4
      case 17: // no need
      case 5:
        delta = 0;
        break;
      case 8: // get shorten for tail's circle
        delta = -1 * kMinWidthT * 0.5;
        break;
      default:
        break;
    }

    let [x2, y2] = get_extended_dest(x2pre, y2pre, sx, sy, delta);

    //this.minchoDrawCurveOthers(kage, x1, y1, sx, sy, sx, sy, x2, y2, ta1, ta2);

    hosomi = 0.5;
    if (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) < 50) {
      hosomi += 0.4 * (1 - Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 50);
    }

    var poly = new Polygon();
    var poly2 = new Polygon();
    var ix, iy, ia, ib, ir;
    var tt;

    if (kage.kUseCurve) {
      // generating fatten curve -- begin
      var kage2 = new Kage();
      kage2.kMinWidthY = kage.kMinWidthY;
      kage2.kMinWidthT = kMinWidthT;
      kage2.kWidth = kage.kWidth;
      kage2.kKakato = kage.kKakato;
      kage2.kRate = 10;

      var curve = new Array(2); // L and R
      get_candidate(kage2, curve, a1, a2, x1, y1, sx, sy, x2, y2, opt3, opt4);

      var dcl12_34 = new Array(2);
      var dcr12_34 = new Array(2);
      var dpl12_34 = new Array(2);
      var dpr12_34 = new Array(2);
      divide_curve(kage2, x1, y1, sx, sy, x2, y2, curve[0], dcl12_34, dpl12_34);
      divide_curve(kage2, x1, y1, sx, sy, x2, y2, curve[1], dcr12_34, dpr12_34);

      var ncl1 = new Array(7);
      var ncl2 = new Array(7);
      find_offcurve(kage2, dcl12_34[0], dpl12_34[0][2], dpl12_34[0][3], ncl1);
      find_offcurve(kage2, dcl12_34[1], dpl12_34[1][2], dpl12_34[1][3], ncl2);

      poly.push(ncl1[0], ncl1[1]);
      poly.push(ncl1[2], ncl1[3], 1);
      poly.push(ncl1[4], ncl1[5]);
      poly.push(ncl2[2], ncl2[3], 1);
      poly.push(ncl2[4], ncl2[5]);

      poly2.push(dcr12_34[0][0][0], dcr12_34[0][0][1]);
      poly2.push(dpr12_34[0][2] - (ncl1[2] - dpl12_34[0][2]), dpl12_34[0][3] - (ncl1[3] - dpl12_34[0][3]), 1);
      poly2.push(dcr12_34[0][dcr12_34[0].length - 1][0], dcr12_34[0][dcr12_34[0].length - 1][1]);
      poly2.push(dpr12_34[1][2] - (ncl2[2] - dpl12_34[1][2]), dpl12_34[1][3] - (ncl2[3] - dpl12_34[1][3]), 1);
      poly2.push(dcr12_34[1][dcr12_34[1].length - 1][0], dcr12_34[1][dcr12_34[1].length - 1][1]);

      poly2.reverse();
      poly.concat(poly2);
      this.polygons.push(poly);
      // generating fatten curve -- end
    } else {
      for (tt = 0; tt <= 1000; tt = tt + kage.kRate) {
        t = tt / 1000;

        // calculate a dot
        x = ((1.0 - t) * (1.0 - t) * x1 + 2.0 * t * (1.0 - t) * sx + t * t * x2);
        y = ((1.0 - t) * (1.0 - t) * y1 + 2.0 * t * (1.0 - t) * sy + t * t * y2);

        // KATAMUKI of vector by BIBUN
        ix = (x1 - 2.0 * sx + x2) * 2.0 * t + (-2.0 * x1 + 2.0 * sx);
        iy = (y1 - 2.0 * sy + y2) * 2.0 * t + (-2.0 * y1 + 2.0 * sy);

        // line SUICHOKU by vector
        if (ix != 0 && iy != 0) {
          ir = Math.atan(iy / ix * -1);
          ia = Math.sin(ir) * (kMinWidthT);
          ib = Math.cos(ir) * (kMinWidthT);
        }
        else if (ix == 0) {
          if (iy < 0) {
            ia = -kMinWidthT;
          } else {
            ia = kMinWidthT;
          }
          ib = 0;
        }
        else {
          ia = 0;
          ib = kMinWidthT;
        }
        if (a1 == 7 && a2 == 0) { // L2RD: fatten
          deltad = Math.pow(t, hosomi) * kage.kL2RDfatten;
        }
        else if (a1 == 7) {
          deltad = Math.pow(t, hosomi);
        }
        else if (a2 == 7) {
          deltad = Math.pow(1.0 - t, hosomi);
        }
        else if (opt3 > 0 || opt4 > 0) {
          deltad = ((kage.kMinWidthT - opt3 / 2) - (opt4 - opt3) / 2 * t) / kage.kMinWidthT;
        }
        else { deltad = 1; }

        if (deltad < 0.15) {
          deltad = 0.15;
        }
        ia = ia * deltad;
        ib = ib * deltad;

        //reverse if vector is going 2nd/3rd quadrants
        if (ix <= 0) {
          ia = ia * -1;
          ib = ib * -1;
        }

        //copy to polygon structure
        poly.push(x - ia, y - ib);
        poly2.push(x + ia, y + ib);
      }

      // suiheisen ni setsuzoku
      if (a1 == 132) {
        var index = 0;
        while (true) {
          if (poly2.array[index].y <= y1 && y1 <= poly2.array[index + 1].y) {
            break;
          }
          index++;
        }
        newx1 = poly2.array[index + 1].x + (poly2.array[index].x - poly2.array[index + 1].x) *
          (poly2.array[index + 1].y - y1) / (poly2.array[index + 1].y - poly2.array[index].y);
        newy1 = y1;
        newx2 = poly.array[0].x + (poly.array[0].x - poly.array[1].x) * (poly.array[0].y - y1) /
          (poly.array[1].y - poly.array[0].y);
        newy2 = y1;
        for (var i = 0; i < index; i++) {
          poly2.shift();
        }
        poly2.set(0, newx1, newy1);
        poly.unshift(newx2, newy2);
      }

      // suiheisen ni setsuzoku 2
      if (a1 == 22 && y1 > y2) {
        var index = 0;
        while (true) {
          if (poly2.array[index].y <= y1 && y1 <= poly2.array[index + 1].y) {
            break;
          }
          index++;
        }
        newx1 = poly2.array[index + 1].x + (poly2.array[index].x - poly2.array[index + 1].x) *
          (poly2.array[index + 1].y - y1) / (poly2.array[index + 1].y - poly2.array[index].y);
        newy1 = y1;
        newx2 = poly.array[0].x + (poly.array[0].x - poly.array[1].x - 1) * (poly.array[0].y - y1) /
          (poly.array[1].y - poly.array[0].y);
        newy2 = y1 + 1;

        for (var i = 0; i < index; i++) {
          poly2.shift();
        }
        poly2.set(0, newx1, newy1);
        poly.unshift(newx2, newy2);
      }

      poly2.reverse();
      poly.concat(poly2);
      this.polygons.push(poly);
    }
  }
  minchoDrawLine(kage, tx1, ty1, tx2, ty2, a1, a2, opt1, opt2) {
    var rad;
    var v;
    var poly;
    const x1 = tx1;
    const y1 = ty1;
    const x2 = tx2;
    const y2 = ty2;

    const kMinWidthT = kage.kMinWidthT - opt1 / 2;
    if (x1 == x2) { //if TATE stroke, use y-axis
      var left1, left2, right1, right2;
      switch (a1) {
        case 0:
          right1 = kage.kMinWidthY / 2;
          left1 = -kage.kMinWidthY / 2;
          break;
        case 1:
        case 6: //... no need
        case 22:
          right1 = 0;
          left1 = 0;
          break;
        case 12:
          right1 = kage.kMinWidthY + kMinWidthT;
          left1 = kage.kMinWidthY;
          break;
        case 32:
          right1 = kage.kMinWidthY;
          left1 = kage.kMinWidthY;
          break;
      }
      switch (a2) {
        case 0:
          if (a1 == 6) { //KAGI's tail ... no need
            right2 = 0;
            left2 = 0;
          }
          else {
            right2 = kMinWidthT / 2;
            left2 = -kMinWidthT / 2;
          }
          break;
        case 1:
          right2 = 0;
          left2 = 0;
          break;
        case 13:
          right2 = kage.kAdjustKakatoL[opt2] + kMinWidthT;
          left2 = kage.kAdjustKakatoL[opt2];
          break;
        case 23:
          right2 = kage.kAdjustKakatoR[opt2] + kMinWidthT;
          left2 = kage.kAdjustKakatoR[opt2];
          break;
        case 24: //for T/H design
          right2 = kage.kMinWidthY;
          left2 = kage.kMinWidthY;
          break;
        case 32:
          right2 = kage.kMinWidthY;
          left2 = kage.kMinWidthY;
          break;
      }
      this.drawOffsetLine_wrong(x1, y1, x2, y2, kMinWidthT, left1, right1, left2, right2);
      if (a2 == 24) { //for T design
        this.drawLowerRightHT_v(x2, y2, kMinWidthT, kage.kMinWidthY);
      }

      if (a2 == 13 && opt2 == 4) { //for new GTH box's left bottom corner
        this.drawLowerLeft(x2, y2, kMinWidthT, kage.kMinWidthY);
      }

      if (a1 == 22) { //box's right top corner
        this.drawUpperRightCorner_straight_v(x1, y1, kMinWidthT, kage.kMinWidthY, kage.kWidth);
      }
      if (a1 == 0) { //beginning of the stroke
        this.drawOpenBegin_straight_v(x1, y1, kMinWidthT, kage.kMinWidthY);
      }
      if ((a1 == 6 && a2 == 0) || a2 == 1) { //KAGI NO YOKO BOU NO SAIGO NO MARU ... no need only used at 1st=yoko
        poly = new Polygon();
        if (kage.kUseCurve) {
          this.drawTailCircle_v_c(x2, y2, kMinWidthT);
        } else {
          this.drawTailCircle2_v(x2, y2, kMinWidthT);
        }
        //poly.reverse(); // for fill-rule
        this.polygons.push(poly);
      }
    }
    else if (y1 == y2) { //if it is YOKO stroke, use x-axis
      if (a1 == 6) { //if it is KAGI's YOKO stroke, get bold
        this.drawLine(x1, y1, x2, y2, kMinWidthT);

        if (a2 == 1 || a2 == 0 || a2 == 5) { // no need a2=1
          //KAGI NO YOKO BOU NO SAIGO NO MARU
          poly = new Polygon();
          if (kage.kUseCurve) {
            if (x1 < x2) {
              drawTailCircle_h_c(x2, y2, kMinWidthT);
            } else {
              drawTailCircle_h_neg_c(x2, y2, kMinWidthT);
            }
          } else {
            if (x1 < x2) {
              this.drawTailCircle2_h(x2, y2, kMinWidthT);
            } else {
              this.drawTailCircle2_h_neg(x2, y2, kMinWidthT);
            }
          }
          this.polygons.push(poly);
        }
        if (a2 == 5) {
          //KAGI NO YOKO BOU NO HANE
          poly = new Polygon();
          if (x1 < x2) {
            this.drawTurnUpwards_Bending_pos_h(x2, y2, kMinWidthT, kage.kWidth, opt1, kage.kAdjustMageStep);
          } else {
            this.drawTurnUpwards_Bending_neg_h(x2, y2, kMinWidthT, kage.kWidth, opt1, kage.kAdjustMageStep);
          }
        }
      }
      else {
        //always same
        this.drawLine(x1, y1, x2, y2, kage.kMinWidthY);

        //UROKO
        if (a2 == 0) {
          this.drawUroko_h(x2, y2, kage.kMinWidthY, kage.kAdjustUrokoX[opt2], kage.kAdjustUrokoY[opt2]);
        }
      }
    }
    else { //for others, use x-axis
      rad = Math.atan((y2 - y1) / (x2 - x1));
      if ((Math.abs(y2 - y1) < Math.abs(x2 - x1)) && (a1 != 6) && (a2 != 6) && !(x1 > x2)) { //ASAI KAUDO
        // Math.abs(y2 - y1) < x2 - x1 <==> (Math.abs(y2 - y1) < Math.abs(x2 - x1)) && !(x1 > x2)
        //always same
        this.drawLine(x1, y1, x2, y2, kage.kMinWidthY);
        //UROKO
        if (a2 == 0) {
          this.drawUroko(x2, y2, x1, y1, kage.kMinWidthY, kage.kAdjustUrokoX[opt2], kage.kAdjustUrokoY[opt2]);
        }
      }
      else { //KAKUDO GA FUKAI or KAGI NO YOKO BOU
        var left1, left2, right1, right2;

        if (x1 > x2) { v = -1; } else { v = 1; }
        poly = new Polygon(4);
        switch (a1) {
          case 0:
            right1 = kage.kMinWidthY * 0.5;
            left1 = kage.kMinWidthY * -0.5;
            poly.set(0, x1 + Math.sin(rad) * kMinWidthT * v + kage.kMinWidthY * Math.cos(rad) * 0.5 * v,
              y1 - Math.cos(rad) * kMinWidthT * v + kage.kMinWidthY * Math.sin(rad) * 0.5 * v);
            poly.set(3, x1 - Math.sin(rad) * kMinWidthT * v - kage.kMinWidthY * Math.cos(rad) * 0.5 * v,
              y1 + Math.cos(rad) * kMinWidthT * v - kage.kMinWidthY * Math.sin(rad) * 0.5 * v);
            break;
          case 1:
          case 6:
            right1 = 0;
            left1 = 0;
            poly.set(0, x1 + Math.sin(rad) * kMinWidthT * v, y1 - Math.cos(rad) * kMinWidthT * v);
            poly.set(3, x1 - Math.sin(rad) * kMinWidthT * v, y1 + Math.cos(rad) * kMinWidthT * v);
            break;
          case 12:
            right1 = kage.kMinWidthY + kMinWidthT;
            left1 = kage.kMinWidthY;
            poly.set(0, x1 + Math.sin(rad) * kMinWidthT * v - kage.kMinWidthY * Math.cos(rad) * v,
              y1 - Math.cos(rad) * kMinWidthT * v - kage.kMinWidthY * Math.sin(rad) * v);
            poly.set(3, x1 - Math.sin(rad) * kMinWidthT * v - (kMinWidthT + kage.kMinWidthY) * Math.cos(rad) * v,
              y1 + Math.cos(rad) * kMinWidthT * v - (kMinWidthT + kage.kMinWidthY) * Math.sin(rad) * v);
            break;
          case 22:
            poly.set(0, x1 + (kMinWidthT * v + 1) / Math.sin(rad), y1 + 1);
            poly.set(3, x1 - (kMinWidthT * v) / Math.sin(rad), y1);
            break;
          case 32:
            poly.set(0, x1 + (kMinWidthT * v) / Math.sin(rad), y1);
            poly.set(3, x1 - (kMinWidthT * v) / Math.sin(rad), y1);
            break;
        }

        switch (a2) {
          case 0:
            if (a1 == 6) {
              right2 = 0;
              left2 = 0;

              poly.set(1, x2 + Math.sin(rad) * kMinWidthT * v, y2 - Math.cos(rad) * kMinWidthT * v);
              poly.set(2, x2 - Math.sin(rad) * kMinWidthT * v, y2 + Math.cos(rad) * kMinWidthT * v);
            }
            else {
              right2 = kMinWidthT * 0.5;
              left2 = -kMinWidthT * 0.5;
              poly.set(1, x2 + Math.sin(rad) * kMinWidthT * v - kMinWidthT * 0.5 * Math.cos(rad) * v,
                y2 - Math.cos(rad) * kMinWidthT * v - kMinWidthT * 0.5 * Math.sin(rad) * v);
              poly.set(2, x2 - Math.sin(rad) * kMinWidthT * v + kMinWidthT * 0.5 * Math.cos(rad) * v,
                y2 + Math.cos(rad) * kMinWidthT * v + kMinWidthT * 0.5 * Math.sin(rad) * v);
            }
            break;
          case 1: // is needed?
          case 5:
            right2 = 0;
            left2 = 0;

            poly.set(1, x2 + Math.sin(rad) * kMinWidthT * v, y2 - Math.cos(rad) * kMinWidthT * v);
            poly.set(2, x2 - Math.sin(rad) * kMinWidthT * v, y2 + Math.cos(rad) * kMinWidthT * v);
            break;
          case 13:
            right2 = kage.kAdjustKakatoL[opt2] + kMinWidthT;
            left2 = kage.kAdjustKakatoL[opt2];

            poly.set(1, x2 + Math.sin(rad) * kMinWidthT * v + kage.kAdjustKakatoL[opt2] * Math.cos(rad) * v,
              y2 - Math.cos(rad) * kMinWidthT * v + kage.kAdjustKakatoL[opt2] * Math.sin(rad) * v);
            poly.set(2, x2 - Math.sin(rad) * kMinWidthT * v + (kage.kAdjustKakatoL[opt2] + kMinWidthT) * Math.cos(rad) * v,
              y2 + Math.cos(rad) * kMinWidthT * v + (kage.kAdjustKakatoL[opt2] + kMinWidthT) * Math.sin(rad) * v);
            break;
          case 23:
            right2 = kage.kAdjustKakatoR[opt2] + kMinWidthT;
            left2 = kage.kAdjustKakatoR[opt2];

            poly.set(1, x2 + Math.sin(rad) * kMinWidthT * v + kage.kAdjustKakatoR[opt2] * Math.cos(rad) * v,
              y2 - Math.cos(rad) * kMinWidthT * v + kage.kAdjustKakatoR[opt2] * Math.sin(rad) * v);
            poly.set(2,
              x2 - Math.sin(rad) * kMinWidthT * v + (kage.kAdjustKakatoR[opt2] + kMinWidthT) * Math.cos(rad) * v,
              y2 + Math.cos(rad) * kMinWidthT * v + (kage.kAdjustKakatoR[opt2] + kMinWidthT) * Math.sin(rad) * v);
            break;
          case 24:
            poly.set(1, x2 + (kMinWidthT * v) / Math.sin(rad), y2);
            poly.set(2, x2 - (kMinWidthT * v) / Math.sin(rad), y2);
            break;
          case 32:
            poly.set(1, x2 + (kMinWidthT * v) / Math.sin(rad), y2);
            poly.set(2, x2 - (kMinWidthT * v) / Math.sin(rad), y2);
            break;
        }

        this.polygons.push(poly);
        if (a2 == 24) { //for T design
          drawLowerRightHT(x2, y2, kMinWidthT, kage.kMinWidthY);
        }

        if ((a1 == 6) && (a2 == 0 || a2 == 5)) { //KAGI NO YOKO BOU NO SAIGO NO MARU
          poly = new Polygon();
          if (kage.kUseCurve) {
            this.drawTailCircle_rad_c(x2, y2, rad, v, kMinWidthT);

          } else {
            this.drawKAGICircle_rad(x2, y2, rad, v, kMinWidthT);
          }
          this.polygons.push(poly);
        }

        if (a1 == 6 && a2 == 5) {
          //KAGI NO YOKO BOU NO HANE
          if (x1 < x2) {
            this.drawTurnUpwards_Bending_pos(x2, y2, kMinWidthT, kage.kWidth, rad, v);
          } else {
            this.drawTurnUpwards_Bending_neg(x2, y2, kMinWidthT, kage.kWidth, rad, v);
          }
        }
        if (a1 == 22) { //SHIKAKU MIGIUE UROKO NANAME DEMO MASSUGU MUKI
          this.drawUpperRightCorner(x1, y1, kMinWidthT, kage.kMinWidthY, kage.kWidth);
        }
        if (a1 == 0) { //beginning of the stroke
          this.drawOpenBegin_straight(x1, y1, kMinWidthT, kage.kMinWidthY, rad, v);
        }
      }
    }


  }
  gothicDrawBezier(kage, x1, y1, x2, y2, x3, y3, x4, y4) {
    this.gothicDrawCurveU(kage, x1, y1, x2, y2, x3, y3, x4, y4);
  }
  gothicDrawCurve(kage, x1, y1, x2, y2, x3, y3) {
    this.gothicDrawCurveU(kage, x1, y1, x2, y2, x2, y2, x3, y3);
  }
  gothicDrawLine(kage, tx1, ty1, tx2, ty2, ta1, ta2) {
    var rad;
    var x1, y1, x2, y2;
    var a1, a2;
    var poly;
    //gothic
    if (tx1 == tx2) { //if TATE stroke, use y-axis
      if (ty1 > ty2) {
        x1 = tx2;
        y1 = ty2;
        x2 = tx1;
        y2 = ty1;
        a1 = ta2;
        a2 = ta1;
      }
      else {
        x1 = tx1;
        y1 = ty1;
        x2 = tx2;
        y2 = ty2;
        a1 = ta1;
        a2 = ta2;
      }
      if (a1 % 10 == 2) { y1 = y1 - kage.kWidth; }
      if (a2 % 10 == 2) { y2 = y2 + kage.kWidth; }
      if (a1 % 10 == 3) { y1 = y1 - kage.kWidth * kage.kKakato; }
      if (a2 % 10 == 3) { y2 = y2 + kage.kWidth * kage.kKakato; }

      poly = new Polygon();
      poly.push(x1 - kage.kWidth, y1);
      poly.push(x2 - kage.kWidth, y2);
      poly.push(x2 + kage.kWidth, y2);
      poly.push(x1 + kage.kWidth, y1);
      //poly.reverse(); // for fill-rule

      this.polygons.push(poly);
    }
    else if (ty1 == ty2) { //if YOKO stroke, use x-axis
      if (tx1 > tx2) {
        x1 = tx2;
        y1 = ty2;
        x2 = tx1;
        y2 = ty1;
        a1 = ta2;
        a2 = ta1;
      }
      else {
        x1 = tx1;
        y1 = ty1;
        x2 = tx2;
        y2 = ty2;
        a1 = ta1;
        a2 = ta2;
      }
      if (a1 % 10 == 2) { x1 = x1 - kage.kWidth; }
      if (a2 % 10 == 2) { x2 = x2 + kage.kWidth; }
      if (a1 % 10 == 3) { x1 = x1 - kage.kWidth * kage.kKakato; }
      if (a2 % 10 == 3) { x2 = x2 + kage.kWidth * kage.kKakato; }

      poly = new Polygon();
      poly.push(x1, y1 - kage.kWidth);
      poly.push(x2, y2 - kage.kWidth);
      poly.push(x2, y2 + kage.kWidth);
      poly.push(x1, y1 + kage.kWidth);
      this.polygons.push(poly);
    }
    else { //for others, use x-axis
      if (tx1 > tx2) {
        x1 = tx2;
        y1 = ty2;
        x2 = tx1;
        y2 = ty1;
        a1 = ta2;
        a2 = ta1;
      }
      else {
        x1 = tx1;
        y1 = ty1;
        x2 = tx2;
        y2 = ty2;
        a1 = ta1;
        a2 = ta2;
      }
      rad = Math.atan((y2 - y1) / (x2 - x1));
      if (a1 % 10 == 2) {
        x1 = x1 - kage.kWidth * Math.cos(rad);
        y1 = y1 - kage.kWidth * Math.sin(rad);
      }
      if (a2 % 10 == 2) {
        x2 = x2 + kage.kWidth * Math.cos(rad);
        y2 = y2 + kage.kWidth * Math.sin(rad);
      }
      if (a1 % 10 == 3) {
        x1 = x1 - kage.kWidth * Math.cos(rad) * kage.kKakato;
        y1 = y1 - kage.kWidth * Math.sin(rad) * kage.kKakato;
      }
      if (a2 % 10 == 3) {
        x2 = x2 + kage.kWidth * Math.cos(rad) * kage.kKakato;
        y2 = y2 + kage.kWidth * Math.sin(rad) * kage.kKakato;
      }

      //SUICHOKU NO ICHI ZURASHI HA Math.sin TO Math.cos NO IREKAE + x-axis MAINASU KA
      poly = new Polygon();
      poly.push(x1 + Math.sin(rad) * kage.kWidth, y1 - Math.cos(rad) * kage.kWidth);
      poly.push(x2 + Math.sin(rad) * kage.kWidth, y2 - Math.cos(rad) * kage.kWidth);
      poly.push(x2 - Math.sin(rad) * kage.kWidth, y2 + Math.cos(rad) * kage.kWidth);
      poly.push(x1 - Math.sin(rad) * kage.kWidth, y1 + Math.cos(rad) * kage.kWidth);
      this.polygons.push(poly);
    }
  }
  gothicDrawCurveU(kage, x1, y1, sx1, sy1, sx2, sy2, x2, y2) {
    var t;
    var x, y;
    var ix, iy, ia, ib, ir;
    var tt;
    var poly, poly2;
    var a1, a2;
    //gothic
    if (a1 % 10 == 2) {
      let [x1ext, y1ext] = get_extended_dest_wrong(x1, y1, sx1, sy1, kage.kWidth);
      x1 = x1ext; y1 = y1ext;
    } else if (a1 % 10 == 3) {
      let [x1ext, y1ext] = get_extended_dest_wrong(x1, y1, sx1, sy1, kage.kWidth * kage.kKakato);
      x1 = x1ext; y1 = y1ext;
    }
    if (a2 % 10 == 2) {
      let [x2ext, y2ext] = get_extended_dest_wrong(x2, y2, sx2, sy2, kage.kWidth);
      x2 = x2ext; y2 = y2ext;
    } else if (a2 % 10 == 3) {
      let [x2ext, y2ext] = get_extended_dest_wrong(x2, y2, sx2, sy2, kage.kWidth * kage.kKakato);
      x2 = x2ext; y2 = y2ext;
    }
    poly = new Polygon();
    poly2 = new Polygon();
    for (tt = 0; tt <= 1000; tt = tt + kage.kRate) {
      t = tt / 1000;
      if (sx1 == sx2 && sy1 == sy2) {
        //calculating each point
        x = ((1.0 - t) * (1.0 - t) * x1 + 2.0 * t * (1.0 - t) * sx1 + t * t * x2);
        y = ((1.0 - t) * (1.0 - t) * y1 + 2.0 * t * (1.0 - t) * sy1 + t * t * y2);
        //SESSEN NO KATAMUKI NO KEISAN(BIBUN)
        ix = (x1 - 2.0 * sx1 + x2) * 2.0 * t + (-2.0 * x1 + 2.0 * sx1);
        iy = (y1 - 2.0 * sy1 + y2) * 2.0 * t + (-2.0 * y1 + 2.0 * sy1);
      }else{//cubic bezier
        //not implemented
      }
      if (ix != 0 && iy != 0) {
        ir = Math.atan(iy / ix * -1.0);
        ia = Math.sin(ir) * kage.kWidth;
        ib = Math.cos(ir) * kage.kWidth;
      }
      else if (ix == 0) {
        if (iy < 0) {
          ia = -kage.kWidth;
        } else {
          ia = kage.kWidth;
        }
        ib = 0;
      }
      else {
        ia = 0;
        ib = kage.kWidth;
      }
      //reverse if vector is going 2nd/3rd quadrants
      if (ix <= 0) {
        ia = ia * -1;
        ib = ib * -1;
      }
      //save to polygon
      poly.push(x - ia, y - ib);
      poly2.push(x + ia, y + ib);
    }
    poly2.reverse();
    poly.concat(poly2);
    this.polygons.push(poly);
  }
}
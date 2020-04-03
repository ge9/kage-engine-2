class FontCanvas {
  constructor() {
    this.polygons = new Polygons();
  }
  getPolygons() {
    return this.polygons;
  }
  addPolygon(poly) {
    this.polygons.push(poly);
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
    const v = (x1 < x2) ? 1 : -1;
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

  drawOpenBegin_straight_wrong(x1, y1, kMinWidthT, kagekMinWidthY, rad, v) {
    const XX = Math.sin(rad) * v;
    const XY = Math.cos(rad) * v * -1;
    const YX = Math.cos(rad) * v;
    const YY = Math.sin(rad) * v;
    var poly = new Polygon();
    poly.push(x1 + kMinWidthT * XX + (kagekMinWidthY * 0.5) * YX,
      y1 + kMinWidthT * XY + (kagekMinWidthY * 0.5) * YY);
    poly.push(x1 + (kMinWidthT + kMinWidthT * 0.5) * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YX,
      y1 + (kMinWidthT + kMinWidthT * 0.5) * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YY);
    poly.push(x1 + kMinWidthT * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2) * YX - 2 * XX,
      y1 + kMinWidthT * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2) * YY + 1 * XY);
    this.polygons.push(poly);
  }

  drawOpenBegin_straight(x1, y1, kMinWidthT, kagekMinWidthY, rad, v) {
    const XX = Math.sin(rad) * v;
    const XY = Math.cos(rad) * v * -1;
    const YX = Math.cos(rad) * v;
    const YY = Math.sin(rad) * v;
    var poly = new Polygon();
    poly.push(x1 + kMinWidthT * XX + (kagekMinWidthY * 0.5) * YX,
      y1 + kMinWidthT * XY + (kagekMinWidthY * 0.5) * YY);
    poly.push(x1 + (kMinWidthT + kMinWidthT * 0.5) * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YX,
      y1 + (kMinWidthT + kMinWidthT * 0.5) * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY) * YY);
    poly.push(x1 + (kMinWidthT - 2) * XX + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2 + 1) * YX,
      y1 + (kMinWidthT - 2) * XY + (kagekMinWidthY * 0.5 + kagekMinWidthY * 2 + 1) * YY);
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
    var poly;
    var type;
    type = (Math.atan2(Math.abs(y1 - sy1), Math.abs(x1 - sx1)) / Math.PI * 2 - 0.4);
    if (type > 0) {
      type = type * 2;
    } else {
      type = type * 16;
    }
    const pm = (type < 0) ? -1 : 1;
    const rad = Math.atan((sy1 - y1) / (sx1 - x1));
    const v = (x1 < sx1) ? 1 : -1;
    const XX = Math.sin(rad) * v;
    const XY = Math.cos(rad) * v * -1;
    const YX = Math.cos(rad) * v;
    const YY = Math.sin(rad) * v;
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
    const move = kagekMinWidthY * type * pm;
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
    const rad = Math.atan((sy1 - y1) / (sx1 - x1));
    const v = (x1 < sx1) ? 1 : -1;
    const XX = Math.sin(rad) * v;
    const XY = Math.cos(rad) * v * -1;
    const YX = Math.cos(rad) * v;
    const YY = Math.sin(rad) * v;
    if (x1 == sx1) {
      poly = new Polygon();
      poly.push(x1 - kMinWidthT, y1);
      poly.push(x1 + kMinWidthT, y1);
      poly.push(x1 + kMinWidthT, y1 - kagekMinWidthY);
      this.polygons.push(poly);
    }
    else {
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
    var poly = new Polygon();
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

  drawNewGTHbox_v(x2, y2, kMinWidthT, kagekMinWidthY) {
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
      const rad = Math.atan((tailY - srcY) / (tailX - srcX));
      const v =  (srcX < tailX) ? 1 : -1;
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
      const rad = Math.atan((tailY - srcY) / (tailX - srcX));
      const v = (srcX < tailX) ? 1 : -1;
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
    const rad = Math.atan((y2 - sy2) / (x2 - sx2));
    const v = (sx2 < x2) ? 1 : -1;
    const YX = Math.sin(rad) * v * -1;
    const YY = Math.cos(rad) * v;
    const XX = Math.cos(rad) * v;
    const XY = Math.sin(rad) * v;
    var type = (Math.atan2(Math.abs(y2 - sy2), Math.abs(x2 - sx2)) / Math.PI * 2 - 0.6);
    if (type > 0) {
      type = type * 8;
    } else {
      type = type * 3;
    }
    const pm = (type < 0) ? -1 : 1;
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
    const rad = Math.atan((y2 - y1) / (x2 - x1));
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

  drawOffsetLine(x1, y1, x2, y2, halfWidth, off_left1, off_right1, off_left2, off_right2) {
    //Draw a line(rectangle), and adjust the rectangle to trapezoid.
    //off_left1 means how much the start point of the left side (seeing from (x1, y1)) of the rectangle is stretched.
    //Note that the positive Y-axis goes in the downwards.
    //off_left2 deals with the end point.  The right side is managed similarly.
    //The generated polygon will be clockwise.
    var poly = new Polygon(4);
    if (x1 == x2) { //vertical
      if (y1 < y2) {
        poly.set(0, x1 - halfWidth, y1 - off_right1);
        poly.set(1, x1 + halfWidth, y1 - off_left1);

        poly.set(3, x2 - halfWidth, y2 + off_right2);
        poly.set(2, x2 + halfWidth, y2 + off_left2);
      } else {
        poly.set(0, x1 + halfWidth, y1 + off_right1);
        poly.set(1, x1 - halfWidth, y1 + off_left1);

        poly.set(3, x2 + halfWidth, y2 - off_right2);
        poly.set(2, x2 - halfWidth, y2 - off_left2);
      }
    } else if (y1 == y2) {//horizontal
      if (x1 < x2) {
        poly.set(1, x1 - off_left1, y1 - halfWidth);
        poly.set(0, x1 - off_right1, y1 + halfWidth);

        poly.set(2, x2 + off_left2, y2 - halfWidth);
        poly.set(3, x2 + off_right2, y2 + halfWidth);
      } else {
        poly.set(1, x1 + off_left1, y1 + halfWidth);
        poly.set(0, x1 + off_right1, y1 - halfWidth);

        poly.set(2, x2 - off_left2, y2 + halfWidth);
        poly.set(3, x2 - off_right2, y2 - halfWidth);
      }
    } else {
      rad = Math.atan((y2 - y1) / (x2 - x1));
      if (x1 > x2) { v = -1; } else { v = 1; }
      poly.set(1, x1 + Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_left1 * v,
        y1 - Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_left1 * v);
      poly.set(0, x1 - Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_right1 * v,
        y1 + Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_right1 * v);

      poly.set(2, x2 + Math.sin(rad) * halfWidth * v + off_left2 * Math.cos(rad) * v,
        y2 - Math.cos(rad) * halfWidth * v + off_left2 * Math.sin(rad) * v);
      poly.set(3, x2 - Math.sin(rad) * halfWidth * v + off_right2 * Math.cos(rad) * v,
        y2 + Math.cos(rad) * halfWidth * v + off_right2 * Math.sin(rad) * v);
    }
    this.polygons.push(poly);
  }

  drawCBezier(x1, y1, sx1, sy1, sx2, sy2, x2, y2, width_func, curve_step) {
    var poly = new Polygon();
    var poly2 = new Polygon();
    for (var tt = 0; tt <= curve_step; tt++) {
      const t = tt / curve_step;
      // calculate a dot
      const x = (1.0 - t) * (1.0 - t) * (1.0 - t) * x1 + 3.0 * t * (1.0 - t) * (1.0 - t) * sx1 + 3 * t * t * (1.0 - t) * sx2 + t * t * t * x2;
      const y = (1.0 - t) * (1.0 - t) * (1.0 - t) * y1 + 3.0 * t * (1.0 - t) * (1.0 - t) * sy1 + 3 * t * t * (1.0 - t) * sy2 + t * t * t * y2;
      // KATAMUKI of vector by BIBUN
      const ix = t * t * (-3 * x1 + 9 * sx1 + -9 * sx2 + 3 * x2) + t * (6 * x1 + -12 * sx1 + 6 * sx2) + -3 * x1 + 3 * sx1;
      const iy = t * t * (-3 * y1 + 9 * sy1 + -9 * sy2 + 3 * y2) + t * (6 * y1 + -12 * sy1 + 6 * sy2) + -3 * y1 + 3 * sy1;

      let [ia, ib] = get_unit_normal_vector(ix, iy);
      const deltad = width_func(t);
      ia = ia * deltad;
      ib = ib * deltad;
      //copy to polygon structure
      poly.push(x - ia, y - ib);
      poly2.push(x + ia, y + ib);
    }
    poly2.reverse();
    poly.concat(poly2);
    this.polygons.push(poly);
  }

  drawQBezier(x1, y1, sx, sy, x2, y2, width_func, curve_step) {
    var poly = new Polygon();
    var poly2 = new Polygon();
    for (var tt = 0; tt <= curve_step; tt++) {
      const t = tt / curve_step;
      // calculate a dot
      const x = ((1.0 - t) * (1.0 - t) * x1 + 2.0 * t * (1.0 - t) * sx + t * t * x2);
      const y = ((1.0 - t) * (1.0 - t) * y1 + 2.0 * t * (1.0 - t) * sy + t * t * y2);
      // KATAMUKI of vector by BIBUN
      const ix = (x1 - 2.0 * sx + x2) * 2.0 * t + (-2.0 * x1 + 2.0 * sx);
      const iy = (y1 - 2.0 * sy + y2) * 2.0 * t + (-2.0 * y1 + 2.0 * sy);

      let [ia, ib] = get_unit_normal_vector(ix, iy);
      const deltad = width_func(t);
      ia = ia * deltad;
      ib = ib * deltad;
      //copy to polygon structure
      poly.push(x - ia, y - ib);
      poly2.push(x + ia, y + ib);
    }
    poly2.reverse();
    poly.concat(poly2);
    this.polygons.push(poly);
  }
}
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

  //flipping and rotating
  //polygons in the rectangle (x1, y1, x2, y2) are flipped or rotated
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

  drawUpperLeftCorner(x1, y1, dir, kMinWidthT) {
    var p = new PointMaker(x1, y1, dir, kMinWidthT);
    var poly = new Polygon();
    poly.push2(p.vec(0, 1));
    poly.push2(p.vec(0, -1));
    poly.push2(p.vec(-1, 1));
    poly.reverse();
    this.polygons.push(poly);
  }

  drawUpperRightCorner(x1, y1, kMinWidthT, kagekMinWidthY, kagekWidth) {
    var p = new PointMaker(x1, y1);
    var poly = new Polygon();
    poly.push2(p.vec(-kMinWidthT,-kagekMinWidthY));
    poly.push2(p.vec(0,-kagekMinWidthY - kagekWidth));
    poly.push2(p.vec(kMinWidthT+kagekWidth,kagekMinWidthY));
    poly.push2(p.vec(kMinWidthT,kMinWidthT*0.8), 2);
    poly.push2(p.vec(0,kMinWidthT*1.2), 2);
    poly.push2(p.vec(-kMinWidthT,kMinWidthT*1.3));
    this.polygons.push(poly);
  }
  
  drawUpperRightCorner_straight_v(x1, y1, kMinWidthT, kagekMinWidthY, kagekWidth) {//vertical straight line
    var p = new PointMaker(x1, y1);
    var poly = new Polygon();
    poly.push2(p.vec(-kMinWidthT,-kagekMinWidthY));
    poly.push2(p.vec(0,-kagekMinWidthY - kagekWidth));
    poly.push2(p.vec(kMinWidthT+kagekWidth,kagekMinWidthY));
    poly.push2(p.vec(kMinWidthT,kMinWidthT));
    poly.push2(p.vec(-kMinWidthT,0));
    this.polygons.push(poly);
  }

  drawOpenBegin_straight(x1, y1, kMinWidthT, kagekMinWidthY, dir) {
    const rad_offset = Math.atan(kagekMinWidthY*0.5/kMinWidthT);
    var poly = new Polygon();
    let p1 = new PointMaker(x1, y1, dir);
    let[x, y] = p1.vec(kagekMinWidthY*0.5, -kMinWidthT);
    const offs_sin = Math.sin(rad_offset);
    const offs_cos = Math.cos(rad_offset);
    const new_dir = {sin: dir.sin*offs_cos+dir.cos*offs_sin, cos: dir.cos*offs_cos-dir.sin*offs_sin};
    let p2 = new PointMaker(x, y, new_dir, kMinWidthT);
    poly.push2(p2.vec(0, 0));
    poly.push2(p2.vec(0, -1.4), 2);
    poly.push2(p2.vec(0.6, -1.4), 2);
    poly.push2(p2.vec(2.0, 1.0));
    this.polygons.push(poly);
  }

  drawOpenBegin_curve_down2(x1, y1, dir, kMinWidthT, rad_offset){
    var poly = new Polygon();
    let p1 = new PointMaker(x1, y1, dir);
    poly.push2(p1.vec(0, kMinWidthT));

    let p2 = new PointMaker();
    const offs_sin = Math.sin(rad_offset);
    const offs_cos = Math.cos(rad_offset);
    p2.setscale(kMinWidthT);
    p2.setdir({sin: dir.sin*offs_cos+dir.cos*offs_sin, cos: dir.cos*offs_cos-dir.sin*offs_sin});
    if(rad_offset>0){
      poly.push2(p1.vec(-(offs_sin/offs_cos)*2*kMinWidthT, kMinWidthT));
      let[x, y] = p1.vec(0, -kMinWidthT);
      poly.push(x, y);
      p2.setpos(x, y);
      let[x2, y2] = p2.vec(0, -rad_offset);
      p2.setpos(x2, y2);
    }else{
      let[x, y] = p1.vec(0+2*kMinWidthT*offs_sin, kMinWidthT-2*kMinWidthT*offs_cos);
      p2.setpos(x, y);
    }

    poly.push2(p2.vec(0, 0));
    poly.push2(p2.vec(0, -0.8), 2);
    poly.push2(p2.vec(0.6, -0.8), 2);
    poly.push2(p2.vec(1.8, 1.0));
    this.polygons.push(poly);
  }

  drawOpenBegin_curve_down(x1, y1, dir, kMinWidthT, kagekMinWidthY){
    const rad = Math.atan2(Math.abs(dir.sin), Math.abs(dir.cos));
    var rad_offset;
    if(rad > Math.PI * 0.2){//36 degrees
      rad_offset = (0.1*Math.PI)*(rad-Math.PI * 0.2)/(Math.PI*0.3);
    }else{
      rad_offset = (-0.25*Math.PI)*(Math.PI*0.2-rad)/(Math.PI*0.2);
    }
    this.drawOpenBegin_curve_down2(x1, y1, dir, kMinWidthT, rad_offset);
  }

  drawOpenBegin_curve_up(x1, y1, dir, kMinWidthT, kagekMinWidthY) {
    var poly = new Polygon();
    let p1 = new PointMaker(x1, y1, dir);
    const offs_sin = Math.sin(-0.1*Math.PI);
    const offs_cos = Math.cos(-0.1*Math.PI);
    poly.push2(p1.vec(0, -kMinWidthT));
    poly.push2(p1.vec((offs_sin/offs_cos)*2*kMinWidthT, -kMinWidthT));

    let p2 = new PointMaker();
    p2.setscale(kMinWidthT);
    p2.setdir({sin: dir.sin*offs_cos+dir.cos*offs_sin, cos: dir.cos*offs_cos-dir.sin*offs_sin});
    let[x, y] = p1.vec(0, kMinWidthT);
    p2.setpos(x, y);

    poly.push2(p2.vec(0, 0));
    poly.push2(p2.vec(0, 0.8), 2);
    poly.push2(p2.vec(0.6, 0.8), 2);
    poly.push2(p2.vec(1.8, -1.0));
    poly.reverse();
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
    poly.reverse();
    this.polygons.push(poly);
  }

  drawNewGTHbox_v(x2, y2, kMinWidthT, kagekMinWidthY) {
    var poly = new Polygon();
    poly.push(x2 - kMinWidthT, y2 - kagekMinWidthY * 3);
    poly.push(x2 - kMinWidthT * 2, y2);
    poly.push(x2 - kagekMinWidthY, y2 + kagekMinWidthY * 5);
    poly.push(x2 + kMinWidthT, y2 + kagekMinWidthY);
    poly.reverse();
    this.polygons.push(poly);
  }
  
  drawTailCircle_tan(tailX, tailY, dir, r, tan1, tan2) {
    //draw a (semi)circle on the tail of the line to (tailX, tailY)
    var poly = new Polygon();
    const vec1 = vector_to_len(tan1, r*bez_cir*0.74);
    const vec2 = vector_to_len(tan2, r*bez_cir*0.78);
    let p = new PointMaker(tailX, tailY, dir, r);
    let [x1, y1] = p.vec(0, -1);
    let [x2, y2] = p.vec(0, 1);
    poly.push(x1, y1);
    poly.push(x1 + vec1[0], y1 + vec1[1], 2);
    poly.push2(p.vec(0.94,-bez_cir*1.09), 2);
    poly.push2(p.vec(0.94,0));
    poly.push2(p.vec(0.94,+bez_cir*1.09), 2);
    poly.push(x2 + vec2[0], y2 + vec2[1], 2);
    poly.push(x2, y2);
    this.polygons.push(poly);
  }

  drawTailCircle(tailX, tailY, dir, r) {
    //draw a (semi)circle on the tail of the line to (tailX, tailY)
    var poly = new Polygon();
    var p = new PointMaker(tailX, tailY, dir, r);
    poly.push2(p.vec(0, -1));
    poly.push2(p.vec(bez_cir, -1), 2);
    poly.push2(p.vec(1, -bez_cir), 2);
    poly.push2(p.vec(1, 0));
    poly.push2(p.vec(1, bez_cir), 2);
    poly.push2(p.vec(bez_cir, 1), 2);
    poly.push2(p.vec(0, 1));
    this.polygons.push(poly);
  }

  drawCircle_bend_pos(x2, y2, dir, kMinWidthT2) {
    var poly = new Polygon();
    var p = new PointMaker(x2, y2, dir, kMinWidthT2);
    poly.push2(p.vec(0, -1));
    poly.push2(p.vec(1.5, -1), 2);
    poly.push2(p.vec(0.9,  1), 2);
    poly.push2(p.vec(-1,  1));
    this.polygons.push(poly);
  }

  drawCircle_bend_neg(x2, y2, dir, kMinWidthT2) {
    var poly = new Polygon();
    var p = new PointMaker(x2, y2, dir, kMinWidthT2);
    poly.push2(p.vec(0, 1));
    poly.push2(p.vec(1.5, 1), 2);
    poly.push2(p.vec(0.9,  -1), 2);
    poly.push2(p.vec(-1,  -1));
    poly.reverse();
    this.polygons.push(poly);
  }

  drawL2RSweepEnd(x2, y2, dir, kMinWidthT, kagekL2RDfatten) {
    var type = (Math.atan2(Math.abs(dir.sin), Math.abs(dir.cos)) / Math.PI * 2 - 0.6);
    if (type > 0) {
      type = type * 8;
    } else {
      type = type * 3;
    }
    const pm = (type < 0) ? -1 : 1;
    var p = new PointMaker(x2, y2, dir);
    var poly = new Polygon();
    poly.push2(p.vec(0, kMinWidthT * kagekL2RDfatten));
    poly.push2(p.vec(0, -kMinWidthT * kagekL2RDfatten));
    poly.push2(p.vec(kMinWidthT * kagekL2RDfatten * Math.abs(type), kMinWidthT * kagekL2RDfatten * pm));
    this.polygons.push(poly);
  }

  drawTurnUpwards_pos(x2, y2, kMinWidthT, length_param, dir) {
    var poly = new Polygon();
    var p = new PointMaker(x2, y2, dir);
    poly.push2(p.vec(kMinWidthT*0.7,  - kMinWidthT*0.7));
    poly.push2(p.vec(0, - kMinWidthT),2);
    poly.push2(p.vec(kMinWidthT*0.3, - kMinWidthT - length_param/2), 2);
    poly.push2(p.vec(kMinWidthT*0.5, - kMinWidthT - length_param));
    poly.push2(p.vec(0,  - kMinWidthT - length_param));
    poly.push2(p.vec( - kMinWidthT*0.6, - kMinWidthT - length_param/4), 2);
    poly.push2(p.vec( - kMinWidthT*1.8, - kMinWidthT), 2);
    poly.push2(p.vec( - kMinWidthT*2.2, - kMinWidthT));
    
    poly.reverse(); // for fill-rule
    this.polygons.push(poly);
  }

  drawTurnUpwards_neg(x2, y2, kMinWidthT, length_param, dir) {
    var poly = new Polygon();
    var p = new PointMaker(x2, y2, dir);
    poly.push2(p.vec(kMinWidthT*0.7, kMinWidthT*0.7));
    poly.push2(p.vec(0, kMinWidthT),2);
    poly.push2(p.vec(kMinWidthT*0.3, kMinWidthT + length_param/2), 2);
    poly.push2(p.vec(kMinWidthT*0.5, kMinWidthT + length_param));
    poly.push2(p.vec(0, kMinWidthT + length_param));
    poly.push2(p.vec( - kMinWidthT*0.6, kMinWidthT + length_param/4), 2);
    poly.push2(p.vec( - kMinWidthT*1.8, kMinWidthT), 2);
    poly.push2(p.vec( - kMinWidthT*2.2, kMinWidthT));
    this.polygons.push(poly);
  }
  
  drawTurnLeft(x2, y2, kMinWidthT, length_param) {
    var poly = new Polygon();
    poly.push(x2, y2 - kMinWidthT);
    poly.push(x2 - length_param, y2 - kMinWidthT);
    poly.push(x2 - length_param, y2 - kMinWidthT * 0.5);
    poly.push(x2 - kMinWidthT*0.7, y2 - kMinWidthT * 0.3,2);
    poly.push(x2, y2 + kMinWidthT * 0.3, 2);
    poly.push(x2, y2 + kMinWidthT);
    poly.reverse();
    this.polygons.push(poly);
  }

  drawUroko_h(x2, y2, kagekMinWidthY, urokoX, urokoY) {
    var poly = new Polygon();
    poly.push(x2, y2 - kagekMinWidthY);
    poly.push(x2 - urokoX, y2);
    poly.push(x2 - urokoX / 2, y2 - urokoY);
    this.polygons.push(poly);
  }

  drawUroko(x2, y2, dir, kagekMinWidthY, urokoX, urokoY) {
    var poly = new Polygon();
    poly.push(x2 + dir.sin * kagekMinWidthY, y2 - dir.cos * kagekMinWidthY);
    poly.push(x2 - dir.cos * urokoX, y2 - dir.sin * urokoX);
    poly.push(x2 - dir.cos * urokoX / 2 + dir.sin * urokoY, y2 - dir.sin * urokoX / 2 - dir.cos * urokoY);
    this.polygons.push(poly);
  }

  drawLine(x1, y1, x2, y2, halfWidth) {
    //draw a line(rectangle).
    var poly = new Polygon;
    const dir = get_dir(x2-x1, y2-y1);
    let p = new PointMaker(x1, y1, dir);
    poly.push2(p.vec(0, halfWidth));
    poly.push2(p.vec(0, -halfWidth));
    p.setpos(x2, y2);
    poly.push2(p.vec(0, -halfWidth));
    poly.push2(p.vec(0, halfWidth));
    this.polygons.push(poly);
  }

  drawOffsetLine(x1, y1, x2, y2, halfWidth, off_left1, off_right1, off_left2, off_right2) {
    //Draw a line(rectangle), and adjust the rectangle to trapezoid.
    //off_left1 means how much the start point of the left side (seeing from (x1, y1)) of the rectangle is stretched.
    //Note that the positive Y-axis goes in the downwards.
    //off_left2 deals with the end point.  The right side is managed similarly.
    //The generated polygon will be clockwise.
    var poly = new Polygon;
    const dir = get_dir(x2-x1, y2-y1);
    let p = new PointMaker(x1, y1, dir);
    poly.push2(p.vec(-off_right1, halfWidth));
    poly.push2(p.vec(-off_left1, -halfWidth));
    p.setpos(x2, y2);
    poly.push2(p.vec(off_left2, -halfWidth));
    poly.push2(p.vec(off_right2, halfWidth));
    this.polygons.push(poly);
  }

  drawCBezier(x1, y1, sx1, sy1, sx2, sy2, x2, y2, width_func, width_func_d, curve_step) {
    let [bez1, bez2] = Bezier.cBezier(x1, y1, sx1, sy1, sx2, sy2, x2, y2, width_func, width_func_d, curve_step);
    var poly = Bezier.bez_to_poly(bez1);
    poly.concat(Bezier.bez_to_poly(bez2));
    this.polygons.push(poly);
  }
  drawQBezier(x1, y1, sx, sy, x2, y2, width_func, width_func_d, curve_step) {
    let [bez1, bez2] = Bezier.qBezier(x1, y1, sx, sy, x2, y2, width_func, width_func_d, curve_step);
    var poly = Bezier.bez_to_poly(bez1);
    poly.concat(Bezier.bez_to_poly(bez2));
    this.polygons.push(poly);
  }
  drawQBezier2(x1, y1, sx, sy, x2, y2, width_func, width_func_d, curve_step) {
    let [bez1, bez2] = Bezier.qBezier2(x1, y1, sx, sy, x2, y2, width_func, width_func_d, curve_step);
    var poly = Bezier.bez_to_poly(bez1);
    poly.concat(Bezier.bez_to_poly(bez2));
    this.polygons.push(poly);
  }
}
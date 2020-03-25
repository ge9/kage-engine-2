class Mincho {
  constructor(size) {
    this.kRate = 100;
    if (size == 1) {
      this.kMinWidthY = 1.2;
      this.kMinWidthT = 3.6;
      this.kWidth = 3;
      this.kKakato = 1.8;
      this.kL2RDfatten = 1.1;
      this.kMage = 6;
      this.kUseCurve = 0;

      this.kAdjustKakatoL = ([8, 5, 3, 1, 0]); // for KAKATO adjustment 000,100,200,300,400
      this.kAdjustKakatoR = ([4, 3, 2, 1]); // for KAKATO adjustment 000,100,200,300
      this.kAdjustKakatoRangeX = 12; // check area width
      this.kAdjustKakatoRangeY = ([1, 11, 14, 18]); // 3 steps of checking
      this.kAdjustKakatoStep = 3; // number of steps

      this.kAdjustUrokoX = ([14, 12, 9, 7]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoY = ([7, 6, 5, 4]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoLength = ([13, 21, 30]); // length for checking
      this.kAdjustUrokoLengthStep = 3; // number of steps
      this.kAdjustUrokoLine = ([13, 15, 18]); // check for crossing. corresponds to length
    } else {
      this.kMinWidthY = 2;
      this.kMinWidthT = 6;
      this.kWidth = 5;
      this.kKakato = 3;
      this.kL2RDfatten = 1.1;
      this.kMage = 10;
      this.kUseCurve = 0;

      this.kAdjustKakatoL = ([14, 9, 5, 2, 0]); // for KAKATO adjustment 000,100,200,300,400
      this.kAdjustKakatoR = ([8, 6, 4, 2]); // for KAKATO adjustment 000,100,200,300
      this.kAdjustKakatoRangeX = 20; // check area width
      this.kAdjustKakatoRangeY = ([1, 19, 24, 30]); // 3 steps of checking
      this.kAdjustKakatoStep = 3; // number of steps

      this.kAdjustUrokoX = ([24, 20, 16, 12]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoY = ([12, 11, 9, 8]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoLength = ([22, 36, 50]); // length for checking
      this.kAdjustUrokoLengthStep = 3; // number of steps
      this.kAdjustUrokoLine = ([22, 26, 30]); // check for crossing. corresponds to length

      this.kAdjustUroko2Step = 3;
      this.kAdjustUroko2Length = 40;

      this.kAdjustTateStep = 4;

      this.kAdjustMageStep = 5;
    }

  }
  getPolygons(glyphData) {
    var cv = new FontCanvas();
    for (var i = 0; i < glyphData.length; i++) {
      var tempdata = glyphData.slice();
      tempdata.splice(i, 1)
      this.drawAdjustedStroke(cv, glyphData[i], tempdata);
    }
    return cv.getPolygons();
  }
  drawAdjustedStroke(cv, s, others) {//draw stroke on the canvas
    const a1 = s[0];
    const a2 = s[1];
    const a3 = s[2];
    const x1 = s[3];
    const y1 = s[4];
    const x2 = s[5];
    const y2 = s[6];
    const x3 = s[7];
    const y3 = s[8];
    const x4 = s[9];
    const y4 = s[10];

    switch (a1) {
      case 0: {//rotate and flip
        if (a2 == 98) {
          cv.flip_left_right(x1, y1, x2, y2);
        } else if (a2 == 97) {
          cv.flip_up_down(x1, y1, x2, y2);
        } else if (a2 == 99 && a3 == 1) {
          cv.rotate90(x1, y1, x2, y2);
        } else if (a2 == 99 && a3 == 2) {
          cv.rotate180(x1, y1, x2, y2);
        } else if (a2 == 99 && a3 == 3) {
          cv.rotate270(x1, y1, x2, y2);
        }
        break;
      }



      case STROKETYPE.STRAIGHT: {
        var param_tate = this.adjustTateParam(s, others);
        switch (a3) {
          case ENDTYPE.TURN_LEFT:
            let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
            var param_hane = this.adjustHaneParam(x2, y2, others);
            cv.minchoDrawLine(this, x1, y1, tx1, ty1, a2, 1, param_tate, 0);
            cv.minchoDrawCurve(this, tx1, ty1, x2, y2,
              x2 - this.kMage * (((this.kAdjustTateStep + 4) - param_tate) / (this.kAdjustTateStep + 4)), y2,
              1, 14, this.kMinWidthT - param_tate / 2, 0, 0);
            cv.drawTurnLeft(x2 - this.kMage * (((this.kAdjustTateStep + 4) - param_tate) / (this.kAdjustTateStep + 4)), y2,
              param_hane, this.kMinWidthT - param_tate / 2, this.kWidth, this.kMinWidthT);
            break;
          case ENDTYPE.OPEN:
            var param_uroko = this.adjustUrokoParam(s, others);
            var param_uroko2 = this.adjustUroko2Param(s, others);
            if (x1 == x2) {//vertical
              cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, param_tate, param_uroko);
            } else if (y1 == y2) {//horizontal
              cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, 0, Math.max(param_uroko, param_uroko2));
            } else {
              cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, 0, param_uroko);
            }
            break;
          case ENDTYPE.LOWER_LEFT_CORNER:
          case ENDTYPE.LOWER_RIGHT_CORNER:
            cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, param_tate, this.adjustKakatoParam(s, others));
            break;
          case ENDTYPE.LOWER_LEFT_ZH_NEW:
            var m = 0;
            if (x1 > x2 && y1 != y2) {
              m = Math.floor((x1 - x2) / (y2 - y1) * 3);
            }
            cv.drawNewGTHbox(x2 + m, y2, this.kMinWidthT - param_tate / 2, this.kMinWidthY);
            cv.minchoDrawLine(this, x1, y1, x2, y2, a2, 13, param_tate, 4);
            break;
          case ENDTYPE.LOWER_LEFT_ZH_OLD:
            cv.minchoDrawLine(this, x1, y1, x2, y2, a2, 13, param_tate, 3);
          default:
            cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, param_tate, 0);
            break;
        }
        break;
      }



      case STROKETYPE.CURVE: {
        if (a2 == STARTTYPE.OPEN) { //beginning of the stroke
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, -1 * this.kMinWidthY * 0.5);

          var y3temp = y3;
          if(a3 == ENDTYPE.TURN_LEFT){
            let [tx1, ty1] = get_extended_dest_wrong(x3, y3, x2, y2, -this.kMage);
            y3temp = ty1;
          }
          if (y1ext <= y3temp) { //from up to bottom
            //ここは普通にy3にし（て上5行を消し）てもほとんど変わらないが、旧バージョンと動作が揃わない。
            cv.drawOpenBegin_curve_down(x1ext, y1ext, x2, y2, this.kMinWidthT, this.kMinWidthY);
          }
          else { //from bottom to up
            cv.drawOpenBegin_curve_up(x1ext, y1ext, x2, y2, this.kMinWidthT, this.kMinWidthY);
          }
        } else if (a2 == STARTTYPE.UPPER_RIGHT_CORNER) {
          cv.drawUpperRightCorner(x1, y1, this.kMinWidthT, this.kMinWidthY, this.kWidth);
        } else if (a2 == STARTTYPE.UPPER_LEFT_CORNER) {
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, this.kMinWidthY);
          if (x1ext == x2) {
            cv.drawUpperLeftCorner_v(x1ext, y1ext, this.kMinWidthT);
          }
          else {
            cv.drawUpperLeftCorner(x1ext, y1ext, x2, y2, this.kMinWidthT);
          }
        }
        var a2temp = (a2 == STARTTYPE.CONNECTING_V && this.adjustKirikuchiParam(s, others)) ? 100 + a2 : a2;
        //case 12: // ... no need

        switch (a3) {
          case ENDTYPE.TURN_LEFT: {
            let [tx1, ty1] = get_extended_dest_wrong(x3, y3, x2, y2, -this.kMage);
            var param_hane = this.adjustHaneParam(x3, y3, others);
            cv.minchoDrawCurve(this, x1, y1, x2, y2, tx1, ty1, a2temp, 1, this.kMinWidthT, 0, 0);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(tx1, ty1, x2, y2, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(tx1, ty1, x2, y2, this.kMinWidthT);
            }
            cv.minchoDrawCurve(this, tx1, ty1, x3, y3, x3 - this.kMage, y3, 1, 14, this.kMinWidthT, 0, 0);
            cv.drawTurnLeft(x3 - this.kMage, y3, param_hane, this.kMinWidthT, this.kWidth, this.kMinWidthT);
            break;
          }
          case ENDTYPE.TURN_UPWARDS: {
            cv.minchoDrawCurve(this, x1, y1, x2, y2, x3, y3, a2temp, 15, this.kMinWidthT, 0, 0);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(x3, y3, x2, y2, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(x3, y3, x2, y2, this.kMinWidthT);
            }
            cv.drawTurnUpwards_CurveBezier(y1, x3, y3, this.kMinWidthT, this.kWidth);
            break;
          }
          case ENDTYPE.STOP: {
            cv.minchoDrawCurve(this, x1, y1, x2, y2, x3, y3, a2temp, a3, this.kMinWidthT, 0, 0);
            let [x3ex, y3ex] = get_extended_dest(x3, y3, x2, y2, -1 * this.kMinWidthT * 0.5);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(x3ex, y3ex, x2, y2, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(x3ex, y3ex, x2, y2, this.kMinWidthT);
            }
            break;
          }
          default: {
            if (a2 == STARTTYPE.THIN && a3 == ENDTYPE.OPEN) {
              cv.drawL2RSweepEnd(x3, y3, x2, y2, this.kMinWidthT, this.kL2RDfatten);
            }
            cv.minchoDrawCurve(this, x1, y1, x2, y2, x3, y3, a2temp, a3, this.kMinWidthT, 0, 0);
            break;
          }
        }
        break;
      }



      case STROKETYPE.BENDING: {
        var param_tate = this.adjustTateParam(s, others);
        var param_mage = this.adjustMageParam(s, others);
        let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
        let [tx2, ty2] = get_extended_dest(x2, y2, x3, y3, -this.kMage);
        cv.minchoDrawLine(this, x1, y1, tx1, ty1, a2, 1, param_tate, 0);
        cv.minchoDrawCurve(this, tx1, ty1, x2, y2, tx2, ty2, 1, 1, this.kMinWidthT, param_tate, param_mage);
        
        if (this.kUseCurve) {
          cv.drawTailCircle_wrong_c(tx2, ty2, x2, y2, this.kMinWidthT - param_mage / 2);
        } else {
          cv.drawTailCircle_wrong(tx2, ty2, x2, y2, this.kMinWidthT - param_mage / 2);
        }
        if (a3 == ENDTYPE.TURN_UPWARDS) {
          var tx3 = x3;
          var ty3 = y3;
          if ((x2 < x3 && tx3 - tx2 > 0) || (x2 > x3 && tx2 - tx3 > 0)) { // for closer position
            cv.minchoDrawLine(this, tx2, ty2, tx3, ty3, 6, 5, param_mage, 0); // bolder by force
          }
        }
        else {
          cv.minchoDrawLine(this, tx2, ty2, x3, y3, 6, a3, param_mage, param_mage); // bolder by force
        }
        break;
      }



      case 12: {
        throw "unknown stroketype 12";
        cv.minchoDrawCurve(this, x1, y1, x2, y2, x3, y3, a2, 1);
        cv.minchoDrawLine(this, x3, y3, x4, y4, 6, a3);
        break;
      }



      case STROKETYPE.BENDING_ROUND: {
        var rate = 6;
        if ((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2) < 14400) { // smaller than 120 x 120
          rate = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)) / 120 * 6;
        }
        let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage * rate);
        let [tx2, ty2] = get_extended_dest(x2, y2, x3, y3, -this.kMage * rate);
        cv.minchoDrawLine(this, x1, y1, tx1, ty1, a2, 1, 0, 0);
        cv.minchoDrawCurve(this, tx1, ty1, x2, y2, tx2, ty2, 1, 1, this.kMinWidthT, 0, 0);
        if (this.kUseCurve) {
          cv.drawTailCircle_wrong_c(tx2, ty2, x2, y2, this.kMinWidthT);
        } else {
          cv.drawTailCircle_wrong(tx2, ty2, x2, y2, this.kMinWidthT);
        }
        if (a3 == ENDTYPE.TURN_UPWARDS) {
          var tx3 = x3;
          var ty3 = y3;
          if (tx3 - tx2 > 0) { // for closer position
            cv.minchoDrawLine(this, tx2, ty2, tx3, ty3, 6, 5, 0, 0); // bolder by force
          }
        } else {
          cv.minchoDrawLine(this, tx2, ty2, x3, y3, 6, a3, 0, 0); // bolder by force
        }
        break;
      }



      case STROKETYPE.BEZIER: {
        if (a2 == STARTTYPE.OPEN) { //beginning of the stroke
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, -1 * this.kMinWidthY * 0.5);

          var y4temp = y4;
          if(a3 == ENDTYPE.TURN_LEFT){
            let [tx1, ty1] = get_extended_dest_wrong(x4, y4, x3, y3, -this.kMage);
            y4temp = ty1;
          }
          if (y1ext <= y4temp) { //from up to bottom
            //y4tempをy4に変えて上5行を消してもほぼ変わらない CURVEでの類似箇所参照
            cv.drawOpenBegin_curve_down(x1ext, y1ext, x2, y2, this.kMinWidthT, this.kMinWidthY);
          }
          else { //from bottom to up
            cv.drawOpenBegin_curve_up(x1ext, y1ext, x2, y2, this.kMinWidthT, this.kMinWidthY);
          }
        } else if (a2 == STARTTYPE.UPPER_RIGHT_CORNER) {
          cv.drawUpperRightCorner(x1, y1, this.kMinWidthT, this.kMinWidthY, this.kWidth);
        } else if (a2 == STARTTYPE.UPPER_LEFT_CORNER) {
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, this.kMinWidthY);
          if (x1ext == x2) {
            cv.drawUpperLeftCorner_v(x1ext, y1ext, this.kMinWidthT);
          }
          else {
            cv.drawUpperLeftCorner(x1ext, y1ext, x2, y2, this.kMinWidthT);
          }
        }

        switch (a3) {
          case ENDTYPE.TURN_LEFT:
            let [tx1, ty1] = get_extended_dest_wrong(x4, y4, x3, y3, -this.kMage);
            cv.minchoDrawBezier(this, x1, y1, x2, y2, x3, y3, tx1, ty1, a2, 1, this.kMinWidthT);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(tx1, ty1, x3, y3, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(tx1, ty1, x3, y3, this.kMinWidthT);
            }
            cv.minchoDrawCurve(this, tx1, ty1, x4, y4, x4 - this.kMage, y4, 1, 14, this.kMinWidthT, 0, 0);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(x4 - this.kMage, y4, x4, y4, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(x4 - this.kMage, y4, x4, y4, this.kMinWidthT);
            }
            var param_hane = this.adjustHaneParam(x4, y4, others);
            cv.drawTurnLeft(x4 - this.kMage, y4, param_hane, this.kMinWidthT, this.kWidth, this.kMinWidthT);
            break;
          case ENDTYPE.TURN_UPWARDS:
            cv.minchoDrawBezier(this, x1, y1, x2, y2, x3, y3, x4, y4, a2, 15, this.kMinWidthT);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(x4, y4, x3, y3, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(x4, y4, x3, y3, this.kMinWidthT);
            }
            cv.drawTurnUpwards_CurveBezier(y1, x4, y4, this.kMinWidthT, this.kWidth);
            break;
          case ENDTYPE.STOP:
            cv.minchoDrawBezier(this, x1, y1, x2, y2, x3, y3, x4, y4, a2, a3, this.kMinWidthT);
            let [x4ex, y4ex] = get_extended_dest(x4, y4, x3, y3, -1 * this.kMinWidthT * 0.5);
            if (this.kUseCurve) {
              cv.drawTailCircle_wrong_c(x4ex, y4ex, x3, y3, this.kMinWidthT);
            } else {
              cv.drawTailCircle_wrong(x4ex, y4ex, x3, y3, this.kMinWidthT);
            }
            break;
          default:
            if (a2 == STARTTYPE.THIN && a3 == ENDTYPE.OPEN) {
              cv.drawL2RSweepEnd(x4, y4, x3, y3, this.kMinWidthT, this.kL2RDfatten);
            }
            cv.minchoDrawBezier(this, x1, y1, x2, y2, x3, y3, x4, y4, a2, a3, this.kMinWidthT);
            break;
        }
        break;
      }



      case STROKETYPE.VCURVE: {
        var param_tate = this.adjustTateParam(s, others);
        cv.minchoDrawLine(this, x1, y1, x2, y2, a2, 1, param_tate, 0);
        cv.minchoDrawCurve(this, x2, y2, x3, y3, x4, y4, 1, a3, this.kMinWidthT - param_tate / 2, 0, 0);
        break;
      }
      case 9: // may not be exist ... no need
        //kageCanvas[y1][x1] = 0;
        //kageCanvas[y2][x2] = 0;
        break;
      default:
        break;
    }
  }
  adjustTateParam(stroke, others) { // strokes
    //(STROKETYPE.STRAIGHT || STROKETYPE.BENDING || STROKETYPE.VCURVE)
    if (stroke[3] != stroke[5]) return 0;
    var res = 0;
    for (let other of others) {
      if ((other[0] == 1 || other[0] == 3 || other[0] == 7) && other[3] == other[5] &&
        !(stroke[4] + 1 > other[6] || stroke[6] - 1 < other[4]) &&
        Math.abs(stroke[3] - other[3]) < this.kMinWidthT * this.kAdjustTateStep) {
        res += (this.kAdjustTateStep - Math.floor(Math.abs(stroke[3] - other[3]) / this.kMinWidthT));
      }
    }
    res = Math.min(res, this.kAdjustTateStep);
    return res;//a2 += res * 1000
  }
  adjustUrokoParam(stroke, others) { // strokes
    //STROKETYPE.STRAIGHT && ENDTYPE.OPEN
    var res = 0;
    for (var k = 0; k < this.kAdjustUrokoLengthStep; k++) {
      var tx, ty, tlen;
      if (stroke[4] == stroke[6]) { // YOKO
        tx = stroke[5] - this.kAdjustUrokoLine[k];
        ty = stroke[6] - 0.5;
        tlen = stroke[5] - stroke[3];
      } else {
        var rad = Math.atan((stroke[6] - stroke[4]) / (stroke[5] - stroke[3]));
        tx = stroke[5] - this.kAdjustUrokoLine[k] * Math.cos(rad) - 0.5 * Math.sin(rad);
        ty = stroke[6] - this.kAdjustUrokoLine[k] * Math.sin(rad) - 0.5 * Math.cos(rad);
        tlen = Math.sqrt((stroke[6] - stroke[4]) * (stroke[6] - stroke[4]) +
          (stroke[5] - stroke[3]) * (stroke[5] - stroke[3]));
      }
      if (tlen < this.kAdjustUrokoLength[k] ||
        isCrossWithOthers(others, -1, tx, ty, stroke[5], stroke[6])
      ) {
        res += (this.kAdjustUrokoLengthStep - k);
        k = Infinity;
      }
    }
    return res;//a3 += res * 100;
  }
  adjustUroko2Param(stroke, others) { // strokes
    //STROKETYPE.STRAIGHT && ENDTYPE.OPEN && y1==y2
    var pressure = 0;
    for (let other of others) {
      if (
        (other[0] == 1 && other[4] == other[6] &&
          !(stroke[3] + 1 > other[5] || stroke[5] - 1 < other[3]) &&
          Math.abs(stroke[4] - other[4]) < this.kAdjustUroko2Length) ||
        (other[0] == 3 && other[6] == other[8] &&
          !(stroke[3] + 1 > other[7] || stroke[5] - 1 < other[5]) &&
          Math.abs(stroke[4] - other[6]) < this.kAdjustUroko2Length)
      ) {
        pressure += Math.pow(this.kAdjustUroko2Length - Math.abs(stroke[4] - other[6]), 1.1);
      }
    }
    var result = Math.min(Math.floor(pressure / this.kAdjustUroko2Length), this.kAdjustUroko2Step);
    return result;//a3 += res * 100;
  }

  adjustHaneParam(epx, epy, others) { // adjust "Hane" (short line turning to the left)
    //endPointX, endPointY
    //(STROKETYPE.STRAIGHT || STROKETYPE.CURVE || STROKETYPE.BEZIER) && ENDTYPE.TURN_LEFT
    var res = 0;
    var nearest = Infinity; // the nearest point to the short line
    if (epx + 18 < 100) {
      nearest = epx + 18;
    }
    for (let other of others) {
      if (other[0] == STROKETYPE.STRAIGHT && other[3] == other[5] && other[3] < epx && other[4] <= epy && other[6] >= epy) {
        if (epx - other[3] < 100) {
          nearest = Math.min(nearest, epx - other[3]);
        }
      }
    }
    if (nearest != Infinity) {
      res = 7 - Math.floor(nearest / 15); // 0-99 -> 0-700
    }
    return res;//a3 += res * 100;

  }
  adjustMageParam(stroke, others) { // strokes
    //STROKETYPE.BENDING
    //applied only if y2=y3
    if (stroke[6] != stroke[8]) return 0;
    var res = 0;
    for (let other of others) {
      if (
        (other[0] == 1 && other[4] == other[6] &&
          !(stroke[5] + 1 > other[5] || stroke[7] - 1 < other[3]) &&
          Math.abs(stroke[6] - other[4]) < this.kMinWidthT * this.kAdjustMageStep) ||
        (other[0] == 3 && other[6] == other[8] &&
          !(stroke[5] + 1 > other[7] || stroke[7] - 1 < other[5]) &&
          Math.abs(stroke[6] - other[6]) < this.kMinWidthT * this.kAdjustMageStep)
      ) {
        res += this.kAdjustMageStep - Math.floor(Math.abs(stroke[6] - other[6]) / this.kMinWidthT);
      }
    }
    res = Math.min(res, this.kAdjustMageStep);
    return res;//a3 += res * 1000;
  }
  adjustKirikuchiParam(stroke, others) { // connecting to other strokes.
    //STROKETYPE.CURVE, STARTTYPE.CONNECTING_V
    if (stroke[3] > stroke[5] &&
      stroke[4] < stroke[6]) {
      for (let other of others) {
        if (other[0] == 1 &&
          other[3] < stroke[3] && other[5] > stroke[3] &&
          other[4] == stroke[4] && other[4] == other[6]) {
          return true;
        }
      }
    }
    return false;
    //if (res) a2 += 100;
  }
  adjustKakatoParam(stroke, others) { // strokes
    //if (STROKETYPE.STRAIGHT && (LOWER_LEFT_CORNER || LOWER_RIGHT_CORNER))
    for (var k = 0; k < this.kAdjustKakatoStep; k++) {
      if (isCrossBoxWithOthers(others, -1,
        stroke[5] - this.kAdjustKakatoRangeX / 2,
        stroke[6] + this.kAdjustKakatoRangeY[k],
        stroke[5] + this.kAdjustKakatoRangeX / 2,
        stroke[6] + this.kAdjustKakatoRangeY[k + 1])
        | stroke[6] + this.kAdjustKakatoRangeY[k + 1] > 200 // adjust for baseline
        | stroke[6] - stroke[4] < this.kAdjustKakatoRangeY[k + 1] // for thin box
      ) {
        return (3 - k);
      }
    }
    return 0;
    //a3 += res * 100;
  }
}
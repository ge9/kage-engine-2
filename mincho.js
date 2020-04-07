class Mincho {
  constructor(size) {
    this.kRate = 50;
    if (size == 1) {
      this.kMinWidthY = 1.2;
      this.kMinWidthT = 3.6;
      this.kWidth = 3;
      this.kKakato = 1.8;
      this.kL2RDfatten = 1.1;
      this.kMage = 6;

      this.kAdjustKakatoL = ([8, 5, 3, 1]); // for KAKATO adjustment 000,100,200,300,400
      this.kAdjustKakatoR = ([4, 3, 2, 1]); // for KAKATO adjustment 000,100,200,300
      this.kAdjustKakatoRangeX = 12; // check area width
      this.kAdjustKakatoRangeY = ([1, 11, 14, 18]); // 3 steps of checking
      this.kAdjustKakatoStep = 3; // number of steps

      this.kAdjustUrokoX = ([14, 12, 9, 7]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoY = ([7, 6, 5, 4]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoLength = ([13, 21, 30]); // length for checking
      this.kAdjustUrokoLengthStep = 3; // number of steps
      this.kAdjustUrokoLine = ([13, 15, 18]); // check for crossing. corresponds to length

      this.kAdjustUroko2Step = 3;
      this.kAdjustUroko2Length = 25;

      this.kAdjustTateStep = 4;
      this.kAdjustMageStep = 5;
    } else if (size == 3) {
      this.kMinWidthY = 3;
      this.kMinWidthT = 8;
      this.kWidth = 6;
      this.kKakato = 4;
      this.kL2RDfatten = 1.1;
      this.kMage = 14;

      this.kAdjustKakatoL = ([20, 13, 7, 3]); // for KAKATO adjustment 000,100,200,300,400
      this.kAdjustKakatoR = ([12, 9, 6, 3]); // for KAKATO adjustment 000,100,200,300
      this.kAdjustKakatoRangeX = 26; // check area width
      this.kAdjustKakatoRangeY = ([2, 26, 30, 40]); // 3 steps of checking
      this.kAdjustKakatoStep = 3; // number of steps

      this.kAdjustUrokoX = ([30, 25, 20, 15]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoY = ([15, 14, 13, 12]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoLength = ([29, 40, 62]); // length for checking
      this.kAdjustUrokoLengthStep = 3; // number of steps
      this.kAdjustUrokoLine = ([29, 34, 39]); // check for crossing. corresponds to length

      this.kAdjustUroko2Step = 3;
      this.kAdjustUroko2Length = 50;

      this.kAdjustTateStep = 4;
      this.kAdjustMageStep = 5;
    } else if (size > 1) {
      this.kMinWidthY = size;
      this.kMinWidthT = size * 2.7;
      this.kWidth = size * 2.2;
      this.kKakato = size * 1.2 + 0.6;
      this.kL2RDfatten = 1.1;
      this.kMage = size * 4 + 2;

      this.kAdjustKakatoL = ([size * 4 + 4, size * 3 + 3, size * 2 + 2, size * 1 + 1]); // for KAKATO adjustment 000,100,200,300,400
      this.kAdjustKakatoR = ([size * 3.2, size * 2.4, size * 1.6, size * 0.8]); // for KAKATO adjustment 000,100,200,300
      this.kAdjustKakatoRangeX = size * 4 + 8; // check area width
      this.kAdjustKakatoRangeY = ([size, size * 5 + 3, size * 9 + 5, size * 12 + 6]); // 3 steps of checking
      this.kAdjustKakatoStep = 3; // number of steps

      this.kAdjustUrokoX = ([size * 8 + 6, size * 7 + 5, size * 6 + 4, size * 5 + 3]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoY = ([size * 5 + 2, size * 4.8 + 1, size * 4.6, size * 4.4 - 1]); // for UROKO adjustment 000,100,200,300
      this.kAdjustUrokoLength = ([size * 7 + 7, size * 11 + 11, size * 15 + 15]); // length for checking
      this.kAdjustUrokoLengthStep = 3; // number of steps
      this.kAdjustUrokoLine = ([size * 7 + 7, size * 9 + 8, size * 11 + 9]); // check for crossing. corresponds to length

      this.kAdjustUroko2Step = 3;
      this.kAdjustUroko2Length = size * 20;

      this.kAdjustTateStep = 4;
      this.kAdjustMageStep = 5;
    } else {
      this.kMinWidthY = 2;
      this.kMinWidthT = 6;
      this.kWidth = 5;
      this.kKakato = 3;
      this.kL2RDfatten = 1.1;
      this.kMage = 10;

      this.kAdjustKakatoL = ([14, 9, 5, 2]); // for KAKATO adjustment 000,100,200,300,400
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
      tempdata.splice(i, 1);
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
        if (a3 == ENDTYPE.CONNECTING_H) {//usually horizontal
          cv.drawLine(x1, y1, x2, y2, this.kMinWidthY);
        } else if (a3 == ENDTYPE.OPEN && Math.abs(y2 - y1) < x2 - x1) { //horizontal or gentle slope
          const param_uroko = this.adjustUrokoParam(s, others);
          const param_uroko2 = this.adjustUroko2Param(s, others);
          cv.drawLine(x1, y1, x2, y2, this.kMinWidthY);
          if (y1 == y2) {//horizontal
            const uroko_max = Math.max(param_uroko, param_uroko2);
            cv.drawUroko_h(x2, y2, this.kMinWidthY, this.kAdjustUrokoX[uroko_max], this.kAdjustUrokoY[uroko_max]);
          } else {
            cv.drawUroko(x2, y2, x1, y1, this.kMinWidthY, this.kAdjustUrokoX[param_uroko], this.kAdjustUrokoY[param_uroko]);
          }
        } else {//vertical or steep slope
          let poly_end = new Polygon(2);
          const param_tate = this.adjustTateParam(s, others);
          const kMinWidthT_m = this.kMinWidthT - param_tate / 2;
          //head
          let poly_start = this.getStartOfVLine(x1, y1, x2, y2, a2, kMinWidthT_m, cv);
          //tail
          switch (a3) {
            case ENDTYPE.OPEN: {
              const right2 = kMinWidthT_m / 2;
              const left2 = -kMinWidthT_m / 2;
              poly_end = this.getEndOfOffsetLine(x1, y1, x2, y2, kMinWidthT_m, right2, left2);
              break;
            }
            case ENDTYPE.TURN_LEFT: {
              let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
              const width_func = (t) => { return kMinWidthT_m; }
              cv.drawQBezier(tx1, ty1, x2, y2,
                x2 - this.kMage * (((this.kAdjustTateStep + 4) - param_tate) / (this.kAdjustTateStep + 4)), y2, width_func, t => 0);
              const param_hane = this.adjustHaneParam(x2, y2, others);
              cv.drawTurnLeft(x2 - this.kMage * (((this.kAdjustTateStep + 4) - param_tate) / (this.kAdjustTateStep + 4)), y2,
                param_hane, this.kMinWidthT - param_tate / 2, this.kWidth, this.kMinWidthT);
              poly_end = this.getEndOfLine(x1, y1, tx1, ty1, kMinWidthT_m);
              break;
            }
            case ENDTYPE.LOWER_LEFT_CORNER: {
              const param_kakato = this.adjustKakatoParam(s, others);
              const right2 = this.kAdjustKakatoL[param_kakato] + kMinWidthT_m;
              const left2 = this.kAdjustKakatoL[param_kakato];
              poly_end = this.getEndOfOffsetLine(x1, y1, x2, y2, kMinWidthT_m, right2, left2);
              break;
            }
            case ENDTYPE.LOWER_RIGHT_CORNER: {
              const param_kakato = this.adjustKakatoParam(s, others);
              const right2 = this.kAdjustKakatoR[param_kakato] + kMinWidthT_m;
              const left2 = this.kAdjustKakatoR[param_kakato];
              poly_end = this.getEndOfOffsetLine(x1, y1, x2, y2, kMinWidthT_m, right2, left2);
              break;
            }
            case ENDTYPE.LOWER_LEFT_ZH_NEW: {
              if (x1 == x2) {//vertical
                cv.drawNewGTHbox_v(x2, y2, kMinWidthT_m, this.kMinWidthY);
              } else {
                var m = 0;
                if (x1 > x2 && y1 != y2) {
                  m = Math.floor((x1 - x2) / (y2 - y1) * 3);
                }
                cv.drawNewGTHbox(x2 + m, y2, kMinWidthT_m, this.kMinWidthY);
              }
              const right2 = kMinWidthT_m;
              const left2 = 0;
              poly_end = this.getEndOfOffsetLine(x1, y1, x2, y2, kMinWidthT_m, right2, left2);
              break;
            }
            case ENDTYPE.LOWER_LEFT_ZH_OLD: {
              const right2 = this.kAdjustKakatoL[3] + kMinWidthT_m;
              const left2 = this.kAdjustKakatoL[3];
              poly_end = this.getEndOfOffsetLine(x1, y1, x2, y2, kMinWidthT_m, right2, left2);
              break;
            }
            case ENDTYPE.CONNECTING_V: {
              //cv.minchoDrawLine(this, x1, y1, x2, y2, a2, a3, param_tate, 0);
              if (y1 == y2) {//horizontal (error)
                cv.drawLine(x1, y1, x2, y2, kMinWidthT_m);
              } else if (x1 == x2) {//vertical
                poly_end.set(0, x2 + kMinWidthT_m, y2 + this.kMinWidthY);
                poly_end.set(1, x2 - kMinWidthT_m, y2 + this.kMinWidthY);
              } else {
                const rad = Math.atan((y2 - y1) / (x2 - x1));
                const v = (x1 > x2) ? -1 : 1;
                poly_end.set(0, x2 + (kMinWidthT_m * v) / Math.sin(rad), y2);
                poly_end.set(1, x2 - (kMinWidthT_m * v) / Math.sin(rad), y2);
              }
              break;
            }
            case ENDTYPE.LOWER_RIGHT_HT: {
              if (x1 == x2) {//vertical
                cv.drawLowerRightHT_v(x2, y2, kMinWidthT_m, this.kMinWidthY);
              } else {
                cv.drawLowerRightHT(x2, y2, kMinWidthT_m, this.kMinWidthY);
              }
              if (y1 == y2) {//horizontal (error)
                cv.drawLine(x1, y1, x2, y2, kMinWidthT_m);
              } else if (x1 == x2) {//vertical
                poly_end.set(0, x2 + kMinWidthT_m, y2 + this.kMinWidthY);
                poly_end.set(1, x2 - kMinWidthT_m, y2 + this.kMinWidthY);
              } else {
                const rad = Math.atan((y2 - y1) / (x2 - x1));
                const v = (x1 > x2) ? -1 : 1;
                poly_end.set(0, x2 + (kMinWidthT_m * v) / Math.sin(rad), y2);
                poly_end.set(1, x2 - (kMinWidthT_m * v) / Math.sin(rad), y2);
              }
              break;
            }
            default:
              throw ("unknown end type at the straight line");
              break;
          }
          //body
          poly_start.concat(poly_end);
          cv.addPolygon(poly_start);
        }
        break;
      }



      case STROKETYPE.CURVE: {
        //head
        if (a2 == STARTTYPE.OPEN) {
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, -1 * this.kMinWidthY * 0.5);
          if (y1ext <= y3) { //from up to bottom
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
        //body
        const a2temp = (a2 == STARTTYPE.CONNECTING_V && this.adjustKirikuchiParam(s, others)) ? 100 + a2 : a2;
        let [tan1, tan2] = this.minchoDrawCurve(x1, y1, x2, y2, x3, y3, a2temp, a3, cv);
        //tail
        switch (a3) {
          case ENDTYPE.TURN_LEFT: {
            let [tx1, ty1] = get_extended_dest(x3, y3, x2, y2, -this.kMage);
            const param_hane = this.adjustHaneParam(x3, y3, others);
            //cv.drawTailCircle(tx1, ty1, x2, y2, this.kMinWidthT);
            const width_func = (t) => { return this.kMinWidthT; }
            cv.drawQBezier(tx1, ty1, x3, y3, x3 - this.kMage, y3, width_func, t => 0);
            cv.drawTurnLeft(x3 - this.kMage, y3, param_hane, this.kMinWidthT, this.kWidth, this.kMinWidthT);
            break;
          }
          case ENDTYPE.TURN_UPWARDS: {
            cv.drawTailCircle(x3, y3, x2, y2, this.kMinWidthT);
            cv.drawTurnUpwards_CurveBezier(y1, x3, y3, this.kMinWidthT, this.kWidth);
            break;
          }
          case ENDTYPE.STOP: {
            let [x3ex, y3ex] = get_extended_dest(x3, y3, x2, y2, -1 * this.kMinWidthT * 0.52);
            /*
            if (a2 == STARTTYPE.THIN){
              let [x1ex, y1ex] = get_extended_dest(x1, y1, x2, y2, -1 * this.kMinWidthY * 0.5);
              //cv.drawTailCircle_slant(x3ex, y3ex, x2, y2, x1ex, y1ex, this.kMinWidthT, tan1, tan2);
              cv.drawTailCircle(x3ex, y3ex, x1ex, y1ex, this.kMinWidthT);
            }else{
              */
              cv.drawTailCircle_tan(x3ex, y3ex, x2, y2, this.kMinWidthT, tan1, tan2);
            //}
            break;
          }
          default: {
            if (a2 == STARTTYPE.THIN && a3 == ENDTYPE.OPEN) {
              cv.drawL2RSweepEnd(x3, y3, x2, y2, this.kMinWidthT, this.kL2RDfatten);
            }
            break;
          }
        }
        break;
      }



      case STROKETYPE.BENDING: {
        //first line
        const param_tate = this.adjustTateParam(s, others);
        const param_mage = this.adjustMageParam(s, others);
        const kMinWidthT_m = this.kMinWidthT - param_tate / 2;
        const kMinWidthT_mage = this.kMinWidthT - param_mage / 2;
        let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
        let [tx2, ty2] = get_extended_dest(x2, y2, x3, y3, -this.kMage);
        {
          let poly_start = this.getStartOfVLine(x1, y1, x2, y2, a2, kMinWidthT_m, cv);
          let poly_end = this.getEndOfLine(x1, y1, tx1, ty1, kMinWidthT_m);
          poly_start.concat(poly_end);
          cv.addPolygon(poly_start);
        }
        //curve
        const width_func = function (t) {
          return kMinWidthT_mage * t + kMinWidthT_m * (1 - t);
        }
        cv.drawQBezier(tx1, ty1, x2, y2, tx2, ty2, width_func, t => 0);
        //last line
        cv.drawLine(tx2, ty2, x3, y3, kMinWidthT_mage);
        //tail
        if (x2 == x3) {
          cv.drawTailCircle2_v(x3, y3, kMinWidthT_mage);
        }
        else if (y2 == y3) {
          if (tx2 < x3) {
            cv.drawTailCircle2_h(x3, y3, kMinWidthT_mage);
          } else {
            cv.drawTailCircle2_h_neg(x3, y3, kMinWidthT_mage);
          }
          if (a3 == ENDTYPE.TURN_UPWARDS) {
            if (tx2 < x3) {
              cv.drawTurnUpwards_Bending_pos_h(x3, y3, kMinWidthT_mage, this.kWidth, param_mage, this.kAdjustMageStep);
            } else {
              cv.drawTurnUpwards_Bending_neg_h(x3, y3, kMinWidthT_mage, this.kWidth, param_mage, this.kAdjustMageStep);
            }
          }
        } else {
          const rad = Math.atan((y3 - y2) / (x3 - x2));
          if (tx2 > x3) { v = -1; } else { v = 1; }
          cv.drawKAGICircle_rad(x3, y3, rad, v, kMinWidthT_mage);
          if (a3 == ENDTYPE.TURN_UPWARDS) {
            if (tx2 < x3) {
              cv.drawTurnUpwards_Bending_pos(x3, y3, kMinWidthT_mage, this.kWidth, rad, v);
            } else {
              cv.drawTurnUpwards_Bending_neg(x3, y3, kMinWidthT_mage, this.kWidth, rad, v);
            }
          }
        }
        break;
      }
      case 12: {
        throw "unknown stroketype 12";
        //cv.minchoDrawCurve(this, x1, y1, x2, y2, x3, y3, a2, 1);
        //cv.minchoDrawLine(this, x3, y3, x4, y4, 6, a3);
        break;
      }
      case STROKETYPE.BENDING_ROUND: {
        var rate = 6;
        if ((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2) < 14400) { // smaller than 120 x 120
          rate = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)) / 120 * 6;
        }
        let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage * rate);
        let [tx2, ty2] = get_extended_dest(x2, y2, x3, y3, -this.kMage * rate);
        //first line
        let poly_start = this.getStartOfVLine(x1, y1, x2, y2, a2, this.kMinWidthT, cv);
        let poly_end = this.getEndOfLine(x1, y1, tx1, ty1, this.kMinWidthT);
        poly_start.concat(poly_end);
        cv.addPolygon(poly_start);
        //curve
        const width_func = (t) => { return this.kMinWidthT; }
        cv.drawQBezier(tx1, ty1, x2, y2, tx2, ty2, width_func, t => 0);
        //last line
        cv.drawLine(tx2, ty2, x3, y3, this.kMinWidthT);
        if (x2 == x3) {
          cv.drawTailCircle2_v(x3, y3, this.kMinWidthT);
        }
        else if (y2 == y3) {
          if (tx2 < x3) {
            cv.drawTailCircle2_h(x3, y3, this.kMinWidthT);
          } else {
            cv.drawTailCircle2_h_neg(x3, y3, this.kMinWidthT);
          }
          if (a3 == ENDTYPE.TURN_UPWARDS) {
            if (tx2 < x3) {
              cv.drawTurnUpwards_Bending_pos_h(x3, y3, this.kMinWidthT, this.kWidth, 0, this.kAdjustMageStep);
            } else {
              cv.drawTurnUpwards_Bending_neg_h(x3, y3, this.kMinWidthT, this.kWidth, 0, this.kAdjustMageStep);
            }
          }
        } else {
          const rad = Math.atan((y3 - y2) / (x3 - x2));
          if (tx2 > x3) { v = -1; } else { v = 1; }
          cv.drawKAGICircle_rad(x3, y3, rad, v, this.kMinWidthT);
          if (a3 == ENDTYPE.TURN_UPWARDS) {
            if (tx2 < x3) {
              cv.drawTurnUpwards_Bending_pos(x3, y3, this.kMinWidthT, this.kWidth, rad, v);
            } else {
              cv.drawTurnUpwards_Bending_neg(x3, y3, this.kMinWidthT, this.kWidth, rad, v);
            }
          }
        }
        break;
      }



      case STROKETYPE.BEZIER: {
        //head
        if (a2 == STARTTYPE.OPEN) {
          let [x1ext, y1ext] = get_extended_dest(x1, y1, x2, y2, -1 * this.kMinWidthY * 0.5);

          if (y1ext <= y4) { //from up to bottom
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
        //body
        let [tan1, tan2] = this.minchoDrawBezier(x1, y1, x2, y2, x3, y3, x4, y4, a2, a3, cv);
        //tail
        switch (a3) {
          case ENDTYPE.TURN_LEFT:
            let [tx1, ty1] = get_extended_dest(x4, y4, x3, y3, -this.kMage);
            //cv.drawTailCircle(tx1, ty1, x3, y3, this.kMinWidthT);
            const width_func = (t) => { return this.kMinWidthT; }
            cv.drawQBezier(tx1, ty1, x4, y4, x4 - this.kMage, y4, width_func, t => 0);
            //cv.drawTailCircle(x4 - this.kMage, y4, x4, y4, this.kMinWidthT);
            const param_hane = this.adjustHaneParam(x4, y4, others);
            cv.drawTurnLeft(x4 - this.kMage, y4, param_hane, this.kMinWidthT, this.kWidth, this.kMinWidthT);
            break;
          case ENDTYPE.TURN_UPWARDS:
            cv.drawTailCircle(x4, y4, x3, y3, this.kMinWidthT);
            cv.drawTurnUpwards_CurveBezier(y1, x4, y4, this.kMinWidthT, this.kWidth);
            break;
          case ENDTYPE.STOP:
            let [x4ex, y4ex] = get_extended_dest(x4, y4, x3, y3, -1 * this.kMinWidthT * 0.52);
            cv.drawTailCircle_tan(x4ex, y4ex, x3, y3, this.kMinWidthT, tan1, tan2);
            break;
          default:
            if (a2 == STARTTYPE.THIN && a3 == ENDTYPE.OPEN) {
              cv.drawL2RSweepEnd(x4, y4, x3, y3, this.kMinWidthT, this.kL2RDfatten);
            }
            break;
        }
        break;
      }



      case STROKETYPE.VCURVE: {
        const param_tate = this.adjustTateParam(s, others);
        const kMinWidthT_m = this.kMinWidthT - param_tate / 2;
        //straight
        let poly_start = this.getStartOfVLine(x1, y1, x2, y2, a2, kMinWidthT_m, cv);
        let poly_end = this.getEndOfLine(x1, y1, x2, y2, kMinWidthT_m);
        poly_start.concat(poly_end);
        cv.addPolygon(poly_start);
        //curve
        const width_func = function (t) {
          //var deltad = Math.pow(1.0-t,0.7)*0.8+0.2;
          var deltad = (1 - Math.pow(t, 1.8)) * 0.85 + 0.15;
          return deltad * kMinWidthT_m;
        }
        cv.drawQBezier(x2, y2, x3, y3, x4, y4, width_func, t => -1.8 * Math.pow(t, 0.8) * 0.85 * kMinWidthT_m);
        break;
      }
      case 9: // may not be exist ... no need
        //kageCanvas[y1][x1] = 0;
        //kageCanvas[y2][x2] = 0;
        break;
      default:
        throw "unknown stroke";
        break;
    }
  }

  minchoDrawCurve(x1pre, y1pre, sx, sy, x2pre, y2pre, a1, a2, cv) {
    var delta;
    switch (a1 % 100) {
      case STARTTYPE.OPEN:
      case STARTTYPE.THIN:
        delta = -1 * this.kMinWidthY * 0.5;
        break;
      case STARTTYPE.UPPER_LEFT_CORNER:
        //case 32:
        delta = this.kMinWidthY;
        break;
      default:
        delta = 0;
        break;
    }
    let [x1, y1] = get_extended_dest(x1pre, y1pre, sx, sy, delta);

    switch (a2 % 100) {
      case ENDTYPE.STOP: // get shorten for tail's circle
        delta = -1 * this.kMinWidthT * 0.52;
        break;
      case ENDTYPE.TURN_LEFT:
        delta = -this.kMage;
        break;
      default:
        delta = 0;
        break;
    }
    let [x2, y2] = get_extended_dest(x2pre, y2pre, sx, sy, delta);

    var width_func;
    var width_func_d;
    let bez1, bez2;
    
    if (a1 == STARTTYPE.THIN && a2 == ENDTYPE.STOP) { //stop
      //const slant_cos = 
      width_func = t => widfun(t, x1, y1, x2, y2, this.kMinWidthT);
      width_func_d = t => widfun_d(t, x1, y1, x2, y2, this.kMinWidthT);

      [bez1, bez2] = Bezier.qBezier2(x1, y1, sx, sy, x2, y2, width_func, width_func_d);
    }
    else {
      if (a1 == STARTTYPE.THIN && a2 == ENDTYPE.OPEN) { // L2RD: fatten
        width_func = t => widfun(t, x1, y1, x2, y2, this.kMinWidthT) * this.kL2RDfatten;
        width_func_d = t => widfun_d(t, x1, y1, x2, y2, this.kMinWidthT) * this.kL2RDfatten;
      }
      else if (a1 == STARTTYPE.THIN) {
        width_func = t => widfun(t, x1, y1, x2, y2, this.kMinWidthT);
        width_func_d = t => widfun_d(t, x1, y1, x2, y2, this.kMinWidthT);
      }
      else if (a2 == ENDTYPE.LEFT_SWEEP) {
        width_func = t => widfun(1 - t, x1, y1, x2, y2, this.kMinWidthT);
        width_func_d = t => -widfun_d(1 - t, x1, y1, x2, y2, this.kMinWidthT);
      }
      else {
        width_func = t => this.kMinWidthT;
        width_func_d = t => 0;
      }
      [bez1, bez2] = Bezier.qBezier(x1, y1, sx, sy, x2, y2, width_func, width_func_d);
    }
    if (a1 == 132 && x1 != sx) {
      if (Math.atan((sy - y1) / (sx - x1)) > 0) {
        let b1 = extend_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = shorten_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); }
      } else {
        let b1 = shorten_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = extend_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); }
      }
    } else if (a1 == 22 && x1 != sx && y1 > y2) {
      if (Math.atan((sy - y1) / (sx - x1)) > 0) {
        let b1 = extend_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = shorten_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); }
      } else {
        let b1 = shorten_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = extend_bezier_to_y(temp.reverse(), y1 + 1);
        if (b2) { bez1[0] = b2.reverse(); }
      }
    }
    var poly = Bezier.bez_to_poly(bez1);
    poly.concat(Bezier.bez_to_poly(bez2));
    cv.addPolygon(poly);

    const bez1e = bez1[bez1.length - 1][3];
    const bez1c2 = bez1[bez1.length - 1][2];

    const bez2s = bez2[0][0];
    const bez2c1 = bez2[0][1];
    const tan1 = [bez1e[0] - bez1c2[0], bez1e[1] - bez1c2[1]];
    const tan2 = [bez2s[0] - bez2c1[0], bez2s[1] - bez2c1[1]];
    return [tan1, tan2];
  }

  minchoDrawBezier(x1pre, y1pre, sx1, sy1, sx2, sy2, x2pre, y2pre, a1, a2, cv) {
    var delta;
    switch (a1 % 100) {
      case STARTTYPE.OPEN:
      case STARTTYPE.THIN:
        delta = -1 * this.kMinWidthY * 0.5;
        break;
      case STARTTYPE.UPPER_LEFT_CORNER:
        //case 32:
        delta = this.kMinWidthY;
        break;
      default:
        delta = 0;
        break;
    }
    let [x1, y1] = get_extended_dest(x1pre, y1pre, sx1, sy1, delta);

    switch (a2 % 100) {
      case ENDTYPE.STOP: // get shorten for tail's circle
        delta = -1 * this.kMinWidthT * 0.52;
        break;
      case ENDTYPE.TURN_LEFT:
        delta = -this.kMage;
        break;
      default:
        delta = 0;
        break;
    }
    let [x2, y2] = get_extended_dest(x2pre, y2pre, sx2, sy2, delta);

    var width_func;
    var width_func_d;
    let bez1, bez2;
    /*
    if (a1 == STARTTYPE.THIN && a2 == ENDTYPE.STOP) { //stop
      width_func = t => widfun_fat(t, x1, y1, x2, y2, this.kMinWidthT);
        width_func_d = t => widfun_fat_d(t, x1, y1, x2, y2, this.kMinWidthT);
      [bez1, bez2] = Bezier.cBezier_slant(x1, y1, sx1, sy1, sx2, sy2, x2, y2, width_func, width_func_d);
    }
    else {*/
      if (a1 == STARTTYPE.THIN && a2 == ENDTYPE.OPEN) { // L2RD: fatten
        width_func = t => widfun(t, x1, y1, x2, y2, this.kMinWidthT) * this.kL2RDfatten;
        width_func_d = t => widfun_d(t, x1, y1, x2, y2, this.kMinWidthT) * this.kL2RDfatten;
      }
      else if (a1 == STARTTYPE.THIN) {
        width_func = t => widfun_fat(t, x1, y1, x2, y2, this.kMinWidthT);
        width_func_d = t => widfun_fat_d(t, x1, y1, x2, y2, this.kMinWidthT);
      }
      else if (a2 == ENDTYPE.LEFT_SWEEP) {
        width_func = t => widfun(1 - t, x1, y1, x2, y2, this.kMinWidthT);
        width_func_d = t => -widfun_d(1 - t, x1, y1, x2, y2, this.kMinWidthT);
      }
      else {
        width_func = t => this.kMinWidthT;
        width_func_d = t => 0;
      }
      [bez1, bez2] = Bezier.cBezier(x1, y1, sx1, sy1, sx2, sy2, x2, y2, width_func, width_func_d);
    //}
    if (a1 == 132 && x1 != sx1) {
      if (Math.atan((sy1 - y1) / (sx1 - x1)) > 0) {
        let b1 = extend_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = shorten_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); }
      } else {
        let b1 = shorten_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; } else { console.log("dde") }
        var temp = bez1[0];
        let b2 = extend_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); } else { console.log("dd") }
      }
    } else if (a1 == 22 && x1 > sx1) {
      if (Math.atan((sy1 - y1) / (sx1 - x1)) > 0) {
        let b1 = extend_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = shorten_bezier_to_y(temp.reverse(), y1);
        if (b2) { bez1[0] = b2.reverse(); }
      } else {
        let b1 = shorten_bezier_to_y(bez2[bez2.length - 1], y1);
        if (b1) { bez2[bez2.length - 1] = b1; }
        var temp = bez1[0];
        let b2 = extend_bezier_to_y(temp.reverse(), y1 + 1);
        if (b2) { bez1[0] = b2.reverse(); }
      }
    }
    var poly = Bezier.bez_to_poly(bez1);
    poly.concat(Bezier.bez_to_poly(bez2));
    cv.addPolygon(poly);

    const bez1e = bez1[bez1.length - 1][3];
    const bez1c2 = bez1[bez1.length - 1][2];

    const bez2s = bez2[0][0];
    const bez2c1 = bez2[0][1];
    const tan1 = [bez1e[0] - bez1c2[0], bez1e[1] - bez1c2[1]];
    const tan2 = [bez2s[0] - bez2c1[0], bez2s[1] - bez2c1[1]];
    return [tan1, tan2];
  }

  getStartOfVLine(x1, y1, x2, y2, a1, kMinWidthT, cv) {
    var poly_start = new Polygon(2);
    if (x1 == x2) {//vertical
      var left1, right1;
      switch (a1) {
        case 0:
          right1 = this.kMinWidthY / 2;
          left1 = -this.kMinWidthY / 2;
          break;
        case 12:
          right1 = this.kMinWidthY + kMinWidthT;
          left1 = this.kMinWidthY;
          break;
        case 32:
          right1 = this.kMinWidthY;
          left1 = this.kMinWidthY;
          break;
        case 1:
        case 6: //... no need
        case 22:
        default:
          right1 = 0;
          left1 = 0;
          break;
      }
      poly_start = this.getStartOfOffsetLine(x1, y1, x2, y2, kMinWidthT, right1, left1);
      if (a1 == 22) { //box's right top corner
        cv.drawUpperRightCorner_straight_v(x1, y1, kMinWidthT, this.kMinWidthY, this.kWidth);
      }
      if (a1 == 0) { //beginning of the stroke
        cv.drawOpenBegin_straight_v(x1, y1, kMinWidthT, this.kMinWidthY);
      }
    } else {
      const rad = Math.atan((y2 - y1) / (x2 - x1));
      const v = (x1 > x2) ? -1 : 1;
      if (a1 == 22) {
        if (y1 == y2) {//error
          poly_start = this.getStartOfLine(x1, y1, x2, y2, kMinWidthT);
        } else {
          poly_start.set(1, x1 + (kMinWidthT * v + 1) / Math.sin(rad), y1 + 1);
          poly_start.set(0, x1 - (kMinWidthT * v) / Math.sin(rad), y1);
        }

      } else if (a1 == 32) {
        if (y1 == y2) {//error
          poly_start = this.getStartOfLine(x1, y1, x2, y2, kMinWidthT);
        } else {

          poly_start.set(1, x1 + (kMinWidthT * v) / Math.sin(rad), y1);
          poly_start.set(0, x1 - (kMinWidthT * v) / Math.sin(rad), y1);
        }
      } else {
        var left1, right1;
        switch (a1) {
          case 0:
            right1 = this.kMinWidthY * 0.5;
            left1 = this.kMinWidthY * -0.5;
            break;
          case 12:
            right1 = this.kMinWidthY + kMinWidthT;
            left1 = this.kMinWidthY;
            break;
          case 1:
          case 6:
          default:
            right1 = 0;
            left1 = 0;
            break;
        }
        poly_start = this.getStartOfOffsetLine(x1, y1, x2, y2, kMinWidthT, right1, left1);
      }
      if (a1 == 22) { //SHIKAKU MIGIUE UROKO NANAME DEMO MASSUGU MUKI
        cv.drawUpperRightCorner(x1, y1, kMinWidthT, this.kMinWidthY, this.kWidth);
      }
      if (a1 == 0) { //beginning of the stroke
        cv.drawOpenBegin_straight(x1, y1, kMinWidthT, this.kMinWidthY, rad, v);
      }
    }
    return poly_start;
  }

  getStartOfLine(x1, y1, x2, y2, halfWidth) {
    //get polygon data for the start of line
    var poly = new Polygon(2);
    if (x1 == x2) { //vertical
      if (y1 < y2) {
        poly.set(0, x1 - halfWidth, y1);
        poly.set(1, x1 + halfWidth, y1);
      } else {
        poly.set(0, x1 + halfWidth, y1);
        poly.set(1, x1 - halfWidth, y1);
      }
    } else if (y1 == y2) {//horizontal
      if (x1 < x2) {
        poly.set(1, x1, y1 - halfWidth);
        poly.set(0, x1, y1 + halfWidth);
      } else {
        poly.set(1, x1, y1 + halfWidth);
        poly.set(0, x1, y1 - halfWidth);
      }
    } else {
      const rad = Math.atan((y2 - y1) / (x2 - x1));
      const v = (x1 > x2) ? -1 : 1;
      poly.set(1, x1 + Math.sin(rad) * halfWidth * v,
        y1 - Math.cos(rad) * halfWidth * v);
      poly.set(0, x1 - Math.sin(rad) * halfWidth * v,
        y1 + Math.cos(rad) * halfWidth * v);
    }
    return poly;
  }

  getStartOfOffsetLine(x1, y1, x2, y2, halfWidth, off_right1, off_left1) {
    //get polygon data for the start of line (with offset)
    var poly = new Polygon(2);
    if (x1 == x2) { //vertical
      if (y1 < y2) {
        poly.set(0, x1 - halfWidth, y1 - off_right1);
        poly.set(1, x1 + halfWidth, y1 - off_left1);
      } else {
        poly.set(0, x1 + halfWidth, y1 + off_right1);
        poly.set(1, x1 - halfWidth, y1 + off_left1);
      }
    } else if (y1 == y2) {//horizontal
      if (x1 < x2) {
        poly.set(1, x1 - off_left1, y1 - halfWidth);
        poly.set(0, x1 - off_right1, y1 + halfWidth);
      } else {
        poly.set(1, x1 + off_left1, y1 + halfWidth);
        poly.set(0, x1 + off_right1, y1 - halfWidth);
      }
    } else {
      const rad = Math.atan((y2 - y1) / (x2 - x1));
      const v = (x1 > x2) ? -1 : 1;
      poly.set(1, x1 + Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_left1 * v,
        y1 - Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_left1 * v);
      poly.set(0, x1 - Math.sin(rad) * halfWidth * v - Math.cos(rad) * off_right1 * v,
        y1 + Math.cos(rad) * halfWidth * v - Math.sin(rad) * off_right1 * v);
    }
    return poly;
  }

  getEndOfLine(x1, y1, x2, y2, halfWidth) {
    //get polygon data for the end of line
    var poly = new Polygon(2);
    if (x1 == x2) { //vertical
      if (y1 < y2) {
        poly.set(1, x2 - halfWidth, y2);
        poly.set(0, x2 + halfWidth, y2);
      } else {
        poly.set(1, x2 + halfWidth, y2);
        poly.set(0, x2 - halfWidth, y2);
      }
    } else if (y1 == y2) {//horizontal
      if (x1 < x2) {
        poly.set(0, x2, y2 - halfWidth);
        poly.set(1, x2, y2 + halfWidth);
      } else {
        poly.set(0, x2, y2 + halfWidth);
        poly.set(1, x2, y2 - halfWidth);
      }
    } else {
      const rad = Math.atan((y2 - y1) / (x2 - x1));
      const v = (x1 > x2) ? -1 : 1;
      poly.set(0, x2 + Math.sin(rad) * halfWidth * v,
        y2 - Math.cos(rad) * halfWidth * v);
      poly.set(1, x2 - Math.sin(rad) * halfWidth * v,
        y2 + Math.cos(rad) * halfWidth * v);
    }
    return poly;
  }

  getEndOfOffsetLine(x1, y1, x2, y2, halfWidth, off_right2, off_left2) {
    //get polygon data for the end of line (with offset)
    var poly = new Polygon(2);
    if (x1 == x2) { //vertical
      if (y1 < y2) {
        poly.set(1, x2 - halfWidth, y2 + off_right2);
        poly.set(0, x2 + halfWidth, y2 + off_left2);
      } else {
        poly.set(1, x2 + halfWidth, y2 - off_right2);
        poly.set(0, x2 - halfWidth, y2 - off_left2);
      }
    } else if (y1 == y2) {//horizontal
      if (x1 < x2) {
        poly.set(0, x2 + off_left2, y2 - halfWidth);
        poly.set(1, x2 + off_right2, y2 + halfWidth);
      } else {
        poly.set(0, x2 - off_left2, y2 + halfWidth);
        poly.set(1, x2 - off_right2, y2 - halfWidth);
      }
    } else {
      const rad = Math.atan((y2 - y1) / (x2 - x1));
      const v = (x1 > x2) ? -1 : 1;
      poly.set(0, x2 + Math.sin(rad) * halfWidth * v + off_left2 * Math.cos(rad) * v,
        y2 - Math.cos(rad) * halfWidth * v + off_left2 * Math.sin(rad) * v);
      poly.set(1, x2 - Math.sin(rad) * halfWidth * v + off_right2 * Math.cos(rad) * v,
        y2 + Math.cos(rad) * halfWidth * v + off_right2 * Math.sin(rad) * v);
    }
    return poly;
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
        return (this.kAdjustUrokoLengthStep - k);
      }
    }
    return 0;//a3 += res * 100;
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
      res = 7 - Math.floor(nearest / 15);
    }
    return res;//a3 += res * 100;
  }
  adjustMageParam(stroke, others) {
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
  adjustKakatoParam(stroke, others) {
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
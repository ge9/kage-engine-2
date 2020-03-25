class Gothic{
  constructor(size) {
    this.kRate = 100;
    if (size == 1) {
      this.kWidth = 3;
      this.kKakato = 1.8;
      this.kMage = 6;
    } else {
      this.kWidth = 5;
      this.kKakato = 3;
      this.kMage = 10;
    }
  }
  getPolygons(glyphData) {
    var cv = new FontCanvas();
    for (let glyph of glyphData) {
      this.drawStroke(cv, glyph);
    }
    return cv.getPolygons();
  }
  drawStroke(cv, s){ // gothic
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
    
    switch(a1 % 100){
    case 0:
      break;
    case 1:
      if(a3 == 4){
        let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
        cv.gothicDrawLine(this, x1, y1, tx1, ty1, a2, 1);
        cv.gothicDrawCurve(this, tx1, ty1, x2, y2, x2 - this.kMage * 2, y2 - this.kMage * 0.5);
      }
      else{
        cv.gothicDrawLine(this, x1, y1, x2, y2, a2, a3);
      }
      break;
    case 2:
    case 12:{
        
      if(a3 == 4){
        let [tx1, ty1] = get_extended_dest_wrong(x3, y3, x2, y2, -this.kMage);
        cv.gothicDrawCurve(this, x1, y1, x2, y2, tx1, ty1);
        cv.gothicDrawCurve(this, tx1, ty1, x3, y3, x3 - this.kMage * 2, y3 - this.kMage * 0.5);
      }
      else if(a3 == 5){
        const tx1 = x3 + this.kMage;
        const ty1 = y3;
        const tx2 = tx1 + this.kMage * 0.5;
        const ty2 = y3 - this.kMage * 2;
        cv.gothicDrawCurve(this, x1, y1, x2, y2, x3, y3);
        cv.gothicDrawCurve(this, x3, y3, tx1, ty1, tx2, ty2);
      }
      else{
        cv.gothicDrawCurve(this, x1, y1, x2, y2, x3, y3);
      }
      break;
    }
    case 3:{
      let [tx1, ty1] = get_extended_dest(x2, y2, x1, y1, -this.kMage);
        let [tx2, ty2] = get_extended_dest(x2, y2, x3, y3, -this.kMage);
        
      if(a3 == 5){
        const tx3 = x3 - this.kMage;
        const ty3 = y3;
        const tx4 = x3 + this.kMage * 0.5;
        const ty4 = y3 - this.kMage * 2;
        cv.gothicDrawLine(this, x1, y1, tx1, ty1, a2, 1);
        cv.gothicDrawCurve(this, tx1, ty1, x2, y2, tx2, ty2);
        cv.gothicDrawLine(this, tx2, ty2, tx3, ty3, 1, 1);
        cv.gothicDrawCurve(this, tx3, ty3, x3, y3, tx4, ty4);
      }
      else{
        cv.gothicDrawLine(this, x1, y1, tx1, ty1, a2, 1);
        cv.gothicDrawCurve(this, tx1, ty1, x2, y2, tx2, ty2);
        cv.gothicDrawLine(this, tx2, ty2, x3, y3, 1, a3);
      }
      break;
    }
    case 6:
      if(a3 == 5){
        const tx1 = x4 - this.kMage;
        const ty1 = y4;
        const tx2 = x4 + this.kMage * 0.5;
        const ty2 = y4 - this.kMage * 2;
        /*
				cv.gothicDrawCurve(x1, y1, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, a2, 1);
				cv.gothicDrawCurve((x2 + x3) / 2, (y2 + y3) / 2, x3, y3, tx1, ty1, 1, 1);
         */
        cv.gothicDrawBezier(this, x1, y1, x2, y2, x3, y3, tx1, ty1);
        cv.gothicDrawCurve(this, tx1, ty1, x4, y4, tx2, ty2);
      }
      else{
        /*
				cv.gothicDrawCurve(x1, y1, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, a2, 1);
				cv.gothicDrawCurve((x2 + x3) / 2, (y2 + y3) / 2, x3, y3, x4, y4, 1, a3);
         */
        cv.gothicDrawBezier(this, x1, y1, x2, y2, x3, y3, x4, y4);
      }
      break;
    case 7:
      cv.gothicDrawLine(this, x1, y1, x2, y2, a2, 1);
      cv.gothicDrawCurve(this, x2, y2, x3, y3, x4, y4);
      break;
    case 9: // may not be exist
      //kageCanvas[y1][x1] = 0;
      //kageCanvas[y2][x2] = 0;
      break;
    default:
      break;
    }
  }
}
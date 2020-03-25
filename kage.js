var FONTTYPE = {
  MINCHO: 0,
  GOTHIC: 1,
}

class Kage {
  constructor(type, size){
    this.kBuhin = new Buhin();
    switch(type){
      case FONTTYPE.MINCHO:{
        this.kFont = new Mincho(size);
        break;
      }
      case FONTTYPE.GOTHIC:{
        this.kFont = new Gothic(size);
        break;
      }
    }
    this.kRate = 100;
  }
  // methods
  makeGlyph(polygons, buhin) { // The word "buhin" means "component".  This method converts buhin (KAGE data format) to polygons (path data).  The variable buhin may represent a component of kanji or a kanji itself.
    var glyphData = this.kBuhin.search(buhin);
    this.makeGlyph2(polygons, glyphData);
  }
  makeGlyph2(polygons, data) {
      var kageStrokes = this.getStrokes(data);
      polygons.concat(this.kFont.getPolygons(kageStrokes));
  }
  makeGlyph3(data) { // void
    var kageStrokes = this.getStrokes(data);
    return this.kFont.getPolygons(kageStrokes);
  }
  getStrokes(glyphData) { // strokes array
    var strokes = new Array();
    var textData = glyphData.split("$");
    for (var i = 0; i < textData.length; i++) {
      var columns = textData[i].split(":");
      if (Math.floor(columns[0]) != STROKETYPE.REFERENCE) {
        strokes.push([
          Math.floor(columns[0]),
          Math.floor(columns[1]),
          Math.floor(columns[2]),
          Math.floor(columns[3]),
          Math.floor(columns[4]),
          Math.floor(columns[5]),
          Math.floor(columns[6]),
          Math.floor(columns[7]),
          Math.floor(columns[8]),
          Math.floor(columns[9]),
          Math.floor(columns[10])
        ]);

      } else {
        var buhin = this.kBuhin.search(columns[7]);
        if (buhin != "") {
          strokes = strokes.concat(this.getStrokesOfBuhin(buhin,
            Math.floor(columns[3]),
            Math.floor(columns[4]),
            Math.floor(columns[5]),
            Math.floor(columns[6]),
            Math.floor(columns[1]),
            Math.floor(columns[2]),
            Math.floor(columns[9]),
            Math.floor(columns[10]))
          );
        }
      }
    }
    return strokes;
  }

  getStrokesOfBuhin(buhin, x1, y1, x2, y2, sx, sy, sx2, sy2) {
    var temp = this.getStrokes(buhin);
    var result = new Array();
    var box = this.getBoundingBox(buhin);
    if (sx != 0 || sy != 0) {
      if (sx > 100) {
        sx -= 200;
      } else {
        sx2 = 0;
        sy2 = 0;
      }
    }
    for (var i = 0; i < temp.length; i++) {
      if (sx != 0 || sy != 0) {
        temp[i][3] = stretch(sx, sx2, temp[i][3], box.minX, box.maxX);
        temp[i][4] = stretch(sy, sy2, temp[i][4], box.minY, box.maxY);
        temp[i][5] = stretch(sx, sx2, temp[i][5], box.minX, box.maxX);
        temp[i][6] = stretch(sy, sy2, temp[i][6], box.minY, box.maxY);
        if (temp[i][0] != STROKETYPE.REFERENCE) {
          temp[i][7] = stretch(sx, sx2, temp[i][7], box.minX, box.maxX);
          temp[i][8] = stretch(sy, sy2, temp[i][8], box.minY, box.maxY);
          temp[i][9] = stretch(sx, sx2, temp[i][9], box.minX, box.maxX);
          temp[i][10] = stretch(sy, sy2, temp[i][10], box.minY, box.maxY);
        }
      }
      result.push([temp[i][0],
      temp[i][1],
      temp[i][2],
      x1 + temp[i][3] * (x2 - x1) / 200,
      y1 + temp[i][4] * (y2 - y1) / 200,
      x1 + temp[i][5] * (x2 - x1) / 200,
      y1 + temp[i][6] * (y2 - y1) / 200,
      x1 + temp[i][7] * (x2 - x1) / 200,
      y1 + temp[i][8] * (y2 - y1) / 200,
      x1 + temp[i][9] * (x2 - x1) / 200,
      y1 + temp[i][10] * (y2 - y1) / 200]);
      
    }
    return result;
  }
 
  
  getBoundingBox(glyph) { // minX, minY, maxX, maxY
    var a = new Object();
    a.minX = 200;
    a.minY = 200;
    a.maxX = 0;
    a.maxY = 0;

    var strokes = this.getStrokes(glyph);
    for (var i = 0; i < strokes.length; i++) {
      if (strokes[i][0] == 0) { continue; }
      a.minX = Math.min(a.minX, strokes[i][3]);
      a.maxX = Math.max(a.maxX, strokes[i][3]);
      a.minY = Math.min(a.minY, strokes[i][4]);
      a.maxY = Math.max(a.maxY, strokes[i][4]);
      a.minX = Math.min(a.minX, strokes[i][5]);
      a.maxX = Math.max(a.maxX, strokes[i][5]);
      a.minY = Math.min(a.minY, strokes[i][6]);
      a.maxY = Math.max(a.maxY, strokes[i][6]);
      if (strokes[i][0] == 1) { continue; }
      if (strokes[i][0] == 99) { continue; }
      a.minX = Math.min(a.minX, strokes[i][7]);
      a.maxX = Math.max(a.maxX, strokes[i][7]);
      a.minY = Math.min(a.minY, strokes[i][8]);
      a.maxY = Math.max(a.maxY, strokes[i][8]);
      if (strokes[i][0] == 2) { continue; }
      if (strokes[i][0] == 3) { continue; }
      if (strokes[i][0] == 4) { continue; }
      a.minX = Math.min(a.minX, strokes[i][9]);
      a.maxX = Math.max(a.maxX, strokes[i][9]);
      a.minY = Math.min(a.minY, strokes[i][10]);
      a.maxY = Math.max(a.maxY, strokes[i][10]);
    }
    return a;
  }
  stretch(dp, sp, p, min, max) { // integer
    var p1, p2, p3, p4;
    if (p < sp + 100) {
      p1 = min;
      p3 = min;
      p2 = sp + 100;
      p4 = dp + 100;
    } else {
      p1 = sp + 100;
      p3 = dp + 100;
      p2 = max;
      p4 = max;
    }
    return Math.floor(((p - p1) / (p2 - p1)) * (p4 - p3) + p3);
  }
}

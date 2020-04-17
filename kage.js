var FONTTYPE = {
  MINCHO: 0,
  GOTHIC: 1,
}

class Kage {
  constructor(type, size){
    this.kBuhin = new Buhin();
    this.setFont(type,size);
    this.kRate = 100;
  }
  setFont(type, size){
    switch(type){
     case FONTTYPE.GOTHIC:{
        this.kFont = new Gothic(size);
        break;
      }
      case FONTTYPE.MINCHO:{
        this.kFont = new Mincho(size);
        break;
      }
      default:{
        this.kFont = new Mincho(size);
        break;
      }
    }
  }
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
    var box = getBoundingBox(temp);
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
 
}

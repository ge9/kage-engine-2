class Polygon{
  // resolution : 0.0001
  constructor(number){
    this.array = new Array();
    // initialize
    if(number){
      for(var i = 0; i < number; i++){
        this.push(0, 0, 0);
      }
    }
  }
  push(x, y, off){ // void
    var temp = new Object();
    temp.x = Math.round(x*10000)/10000;
    temp.y = Math.round(y*10000)/10000;
    if(off != 1 && off != 2){
      off = 0;
    }
    temp.off = off;
    this.array.push(temp);
  }
  push2(p, off){
    let [x, y] = p;
    this.push(x, y, off);
  }
  set(index, x, y, off){ // void
    this.array[index].x = Math.round(x*10000)/10000;
    this.array[index].y = Math.round(y*10000)/10000;
    if(off != 1 && off != 2){
      off = 0;
    }
    this.array[index].off = off;
  }
  to_font1000(){
    for(var j = 0; j < this.array.length; j++){
      this.array[i].x = this.array[i].x*5;
      this.array[i].y = this.array[i].y*-5 - 200;
    }
  }
  reverse(){ // void
    this.array.reverse();
  }
  concat(poly){ // void
    this.array = this.array.concat(poly.array);
  }
  shift(){ // void
    this.array.shift();
  }
  unshift(x, y, off){ // void
    var temp = new Object();
    temp.x = Math.round(x*10000)/10000;
    temp.y = Math.round(y*10000)/10000;
    if(off != 1 && off != 2){
      off = 0;
    }
    temp.off = off;
    this.array.unshift(temp);
  }
  get_sub_path_svg(){
    let buffer = "";
    buffer += "M";
    buffer += this.array[0].x + "," + this.array[0].y + " ";
    let mode = "";
    for(var j = 1; j < this.array.length; j++){
      if(this.array[j].off == 1 && mode != "Q"){
        buffer += "Q"; mode = "Q";
      } else if(this.array[j-1].off == 0 && this.array[j].off == 2 && mode != "C"){
        buffer += "C"; mode = "C";
      } else if(this.array[j-1].off == 0 && this.array[j].off == 0 && mode != "L"){
        buffer += "L"; mode = "L";
      }
      buffer += this.array[j].x + "," + this.array[j].y + " ";
    }
    buffer += "Z";
    return buffer;
  }
  get_sub_path_svg_font(){
    let buffer = "";
    buffer += "M";
    buffer += (this.array[0].x*5) + "," + (800-this.array[0].y*5) + " ";
    let mode = "";
    for(var j = 1; j < this.array.length; j++){
      if(this.array[j].off == 1 && mode != "Q"){
        buffer += "Q"; mode = "Q";
      } else if(this.array[j-1].off == 0 && this.array[j].off == 2 && mode != "C"){
        buffer += "C"; mode = "C";
      } else if(this.array[j-1].off == 0 && this.array[j].off == 0 && mode != "L"){
        buffer += "L"; mode = "L";
      }
      buffer += (this.array[j].x*5) + "," + (800-this.array[j].y*5) + " ";
    }
    buffer += "Z";
    return buffer;
  }
}

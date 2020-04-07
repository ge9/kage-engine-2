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
  set(index, x, y, off){ // void
    this.array[index].x = Math.round(x*10000)/10000;
    this.array[index].y = Math.round(y*10000)/10000;
    if(off != 1 && off != 2){
      off = 0;
    }
    this.array[index].off = off;
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
}

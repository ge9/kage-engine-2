class Polygon{
  // resolution : 0.1
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
    temp.x = Math.floor(x*10)/10;
    temp.y = Math.floor(y*10)/10;
    if(off != 1){
      off = 0;
    }
    temp.off = off;
    this.array.push(temp);
  }
  set(index, x, y, off){ // void
    this.array[index].x = Math.floor(x*10)/10;
    this.array[index].y = Math.floor(y*10)/10;
    if(off != 1){
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
    temp.x = Math.floor(x*10)/10;
    temp.y = Math.floor(y*10)/10;
    if(off != 1){
      off = 0;
    }
    temp.off = off;
    this.array.unshift(temp);
  }
}

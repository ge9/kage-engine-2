function get_extended_dest(destX,destY,srcX,srcY,delta){
  //Assume that there's a line from (srcX, srcY) to (destX, destY).
  //This function stretches the line to the "dest" side by the length of the variable delta, 
  //and returns the new destination coordinates (in array).
  //if delta is negative, the line will be shortened, and the destination will be nearer to the source.
  var destX_new = destX;
  var destY_new = destY;
  if (srcX == destX) {
    if (srcY < destY) { destY_new = destY + delta; }
    else { destY_new = destY - delta; }
  }
  else if (srcY == destY) {
    if (srcX < destX) { destX_new = destX + delta; }
    else { destX_new = destX - delta; }
  }
  else {
    var v;
    rad = Math.atan((destY - srcY) / (destX - srcX));
    if (srcX < destX) { v = 1; } else { v = -1; }
    destX_new = destX + delta * Math.cos(rad) * v;
    destY_new = destY + delta * Math.sin(rad) * v;
  }
  return [destX_new,destY_new]
}
function get_extended_dest_wrong(destX,destY,srcX,srcY,delta){
  //The process for lines directed exactly in the negative x-direction or y-direction is not correct, so it's named as "wrong".
  var destX_new = destX;
  var destY_new = destY;
  if (srcX == destX) {
    destY_new = destY + delta; 
  }
  else if (srcY == destY) {
    destX_new = destX + delta;
  }
  else {
    var v;
    rad = Math.atan((destY - srcY) / (destX - srcX));
    if (srcX < destX) { v = 1; } else { v = -1; }
    destX_new = destX + delta * Math.cos(rad) * v;
    destY_new = destY + delta * Math.sin(rad) * v;
  }
  return [destX_new,destY_new]
}
function get_unit_normal_vector(ix, iy){
  var ia, ib;
  // line SUICHOKU by vector
  if (ix != 0 && iy != 0) {
    const ir = Math.atan(iy / ix * -1.0);
    ia = Math.sin(ir);
    ib = Math.cos(ir);
  }
  else if (ix == 0) {
    if (iy < 0) {
      ia = -1;
    } else {
      ia = 1;
    }
    ib = 0;
  }
  else {
    ia = 0;
    ib = 1;
  }
  //reverse if vector is going 2nd/3rd quadrants
  if (ix <= 0) {
    ia = ia * -1;
    ib = ib * -1;
  }
  return [ia, ib];
}
function calc_hosomi(x1, y1, x2, y2){
  var hosomi = 0.5;
  if (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) < 50) {
        hosomi += 0.4 * (1 - Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 50);
  }
  return hosomi;
}
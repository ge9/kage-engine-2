const bez_cir = 4*(Math.sqrt(2)-1)/3;
//a constant for drawing circles with Bezier curves

//width functions (using circle)
function widfun(t, x1, y1, x2, y2, wid){
  const len = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const p = 1+ (100/len);
  return (  (Math.sqrt(p*p+(p-1)*(p-1)-(p-t)*(p-t))-(p-1))*0.815+0.185  )*wid;
}

function widfun_d(t, x1, y1, x2, y2, wid){
  const len = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const p = 1+ (100/len);
  return wid*0.815*0.5*2*(p-t) / Math.sqrt(p*p+(p-1)*(p-1)-(p-t)*(p-t));
}

//fat version (used in cubic bezier)
function widfun_fat(t, x1, y1, x2, y2, wid){
  const len = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const p = 1+ (40/len);
  return (  (Math.sqrt(p*p+(p-1)*(p-1)-(p-t)*(p-t))-(p-1))*0.815+0.185  )*wid;
}

function widfun_fat_d(t, x1, y1, x2, y2, wid){
  const len = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const p = 1+ (40/len);
  return wid*0.815*0.5*2*(p-t) / Math.sqrt(p*p+(p-1)*(p-1)-(p-t)*(p-t));
}

function get_extended_dest(destX, destY, srcX, srcY, delta) {
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
  return [destX_new, destY_new]
}

function get_extended_dest_wrong(destX, destY, srcX, srcY, delta) {
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
  return [destX_new, destY_new]
}

function unit_normal_vector(ix, iy) {//to the right(clockwise (in the display coordinate))
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

function normal_vector_of_len(v, l){//to the right(clockwise (in the display coordinate))
  const len=Math.sqrt(v[0]*v[0]+v[1]*v[1]);
  return [-v[1]*l/len,v[0]*l/len];
}

function vector_to_len(v, l){
  const len=Math.sqrt(v[0]*v[0]+v[1]*v[1]);
  return [v[0]*l/len,v[1]*l/len];
}

function calc_hosomi(x1, y1, x2, y2) {
  var hosomi = 0.5;
  if (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) < 50) {
    hosomi += 0.4 * (1 - Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 50);
  }
  return hosomi;
}

function get_rad(x, y) {
  var rad;
  if (x == 0) {
    if (y > 0) {
      rad = Math.PI / 2;
    } else {
      rad = -Math.PI / 2;
    }
    v = 1;
  } else {
    rad = Math.atan(y / x);
    if (x < 0) { rad += Math.PI }
  }
  return rad;
}

function rad_to_vector(rad) {
  return [Math.cos(rad), Math.sin(rad)];
}

function stretch_bezier_end(bez, t){
  const start = [bez[0][0],
                 bez[0][1]];
  const c1 = [(1-t) * bez[0][0]+t * bez[1][0],
              (1-t) * bez[0][1]+t * bez[1][1]];
  const c2 = [(1-t) * (1-t) * bez[0][0] + 2.0 * t * (1-t) * bez[1][0] + t * t * bez[2][0],
              (1-t) * (1-t) * bez[0][1] + 2.0 * t * (1-t) * bez[1][1] + t * t * bez[2][1]]
  const end = [(1-t) * (1-t) * (1-t) * bez[0][0] + 3 * t * (1-t) * (1-t) * bez[1][0] + 3 * t * t * (1-t) * bez[2][0] + t * t * t * bez[3][0],
               (1-t) * (1-t) * (1-t) * bez[0][1] + 3 * t * (1-t) * (1-t) * bez[1][1] + 3 * t * t * (1-t) * bez[2][1] + t * t * t * bez[3][1],]
  return [start, c1, c2, end];
}

function extend_bezier_to_y(bez, y) {
  const a =     bez[3][1] - 3 * bez[2][1] + 3 * bez[1][1] - bez[0][1];
  const b = 3 * bez[2][1] - 6 * bez[1][1] + 3 * bez[0][1];
  const c = 3 * bez[1][1] - 3 * bez[0][1];
  const d =     bez[0][1];
  const yy = solveCubic(a, b, c, d - y);
  yy.sort(function (a, b) {//ascending order
    return a - b;
  });
  for (let i of yy) {
    if (i > 1) {
      return stretch_bezier_end(bez, i);
    }
  }
  return false;
}

function shorten_bezier_to_y(bez, y) {
  const a =     bez[3][1] - 3 * bez[2][1] + 3 * bez[1][1] - bez[0][1];
  const b = 3 * bez[2][1] - 6 * bez[1][1] + 3 * bez[0][1];
  const c = 3 * bez[1][1] - 3 * bez[0][1];
  const d =     bez[0][1];
  const yy = solveCubic(a, b, c, d - y);
  yy.sort(function (a, b) {//descending order
    return b - a;
  });
  for (let i of yy) {
    if (0 < i && i < 1) {
      return stretch_bezier_end(bez, i);
    }
  }
  return false;
}

function solveCubic(a, b, c, d) {
  if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
      a = b; b = c; c = d;
      if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
          a = b; b = c;
          if (Math.abs(a) < 1e-8) // Degenerate case
              return [];
          return [-b/a];
      }

      var D = b*b - 4*a*c;
      if (Math.abs(D) < 1e-8)
          return [-b/(2*a)];
      else if (D > 0)
          return [(-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a)];
      return [];
  }

  // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
  var p = (3*a*c - b*b)/(3*a*a);
  var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);
  var roots;

  if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
      roots = [cuberoot(-q)];
  } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
      roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
  } else {
      var D = q*q/4 + p*p*p/27;
      if (Math.abs(D) < 1e-8) {       // D = 0 -> two roots
          roots = [-1.5*q/p, 3*q/p];
      } else if (D > 0) {             // Only one real root
          var u = cuberoot(-q/2 - Math.sqrt(D));
          roots = [u - p/(3*u)];
      } else {                        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
          var u = 2*Math.sqrt(-p/3);
          var t = Math.acos(3*q/p/u)/3;  // D < 0 implies p < 0 and acos argument in [-1..1]
          var k = 2*Math.PI/3;
          roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
      }
  }

  // Convert back from depressed cubic
  for (var i = 0; i < roots.length; i++)
      roots[i] -= b/(3*a);

  return roots;
}
function cuberoot(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
}
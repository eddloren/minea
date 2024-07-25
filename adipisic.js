function CatmullRom(context, alpha) {
  this.context = context;
  this.alpha = alpha;
}

CatmullRom.prototype.evaluate = function(t) {
  var p0 = this.context.p0;
  var p1 = this.context.p1;
  var p2 = this.context.p2;
  var p3 = this.context.p3;

  var x0 = p0.x;
  var y0 = p0.y;
  var x1 = p1.x;
  var y1 = p1.y;
  var x2 = p2.x;
  var y2 = p2.y;
  var x3 = p3.x;
  var y3 = p3.y;

  var x = 0.5 * ((2 * x1) + (-x0 + x2));
  var y = 0.5 * ((2 * y1) + (-y0 + y2));

  if (this.alpha > 0) {
    var ax = 0.5 * ((2 * x1) + (-x0 + x2));
    var ay = 0.5 * ((2 * y1) + (-y0 + y2));
    x += this.alpha * ax;
    y += this.alpha * ay;
  }

  return {x: x, y: y};
};

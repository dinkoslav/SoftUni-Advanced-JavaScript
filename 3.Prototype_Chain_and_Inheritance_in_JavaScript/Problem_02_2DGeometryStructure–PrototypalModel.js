Object.prototype.extends = function (properties) {
    function f() {};
    var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    };
    f.prototype._super = this;
    return new f();
};

var Shapes = (function(){
    var shape = {
        init: function init(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
            return this;
        },
        toString: function toString() {
            return 'X: ' + this._x + ", Y: " + this._y + ", Color: " + this._color;
        }
    };

    var circle = shape.extends({
        init: function init(x, y, color, r) {
            this._super.init.call(this, x, y,color);
            this._r = r;
            return this;
        },
        toString: function toString() {
            return "Shape: Circle, " + this._super.toString.call(this) +
                ", Radius: " + this._r;
        }
    });

    var rectangle = shape.extends({
        init: function init(x, y, color, width, height) {
            this._super.init.call(this, x, y,color);
            this._width = width;
            this._height = height;
            return this;
        },
        toString: function toString() {
            return "Shape: Rectangle, " + this._super.toString.call(this) +
                ", Width: " + this._width + ", Height: " + this._height;
        }
    });

    var triangle = shape.extends({
        init: function init(x, y, color, x2, y2, x3, y3) {
            this._super.init.call(this, x, y,color);
            this._x2 = x2;
            this._x3 = x3;
            this._y2 = y2;
            this._y3 = y3;
            return this;
        },
        toString: function toString() {
            return "Shape: Triangle, " + this._super.toString.call(this) +
                ", BX: " + this._x2 + ", BY: " + this._y2 +
                ", CX: " + this._x3 + ", CY: " + this._y3;
        }
    });

    var line = shape.extends({
        init: function init(x, y, color, x2, y2) {
            this._super.init.call(this, x, y,color);
            this._x2 = x2;
            this._y2 = y2;
            return this;
        },
        toString: function toString() {
            return "Shape: Line, " + this._super.toString.call(this) +
                ", BX: " + this._x2 + ", BY: " + this._y2;
        }
    });

    var segment = shape.extends({
        init: function init(x, y, color, x2, y2) {
            this._super.init.call(this, x, y,color);
            this._x2 = x2;
            this._y2 = y2;
            return this;
        },
        toString: function toString() {
            return "Shape: Segment, " + this._super.toString.call(this) +
                ", BX: " + this._x2 + ", BY: " + this._y2;
        }
    });

    return {
        circle: circle,
        rectangle: rectangle,
        line: line,
        triangle: triangle,
        segment: segment
    }
})();

var c = Object.create(Shapes.circle).init(1,1,"red",1);
console.log(c.toString());
var r = Object.create(Shapes.rectangle).init(1,1,"red",1,1);
console.log(r.toString());
var t = Object.create(Shapes.triangle).init(1,1,"red",2,2,3,3);
console.log(t.toString());
var l = Object.create(Shapes.line).init(1,1,"red",2,2);
console.log(l.toString());
var s = Object.create(Shapes.segment).init(1,1,"red",2,2);
console.log(s.toString());
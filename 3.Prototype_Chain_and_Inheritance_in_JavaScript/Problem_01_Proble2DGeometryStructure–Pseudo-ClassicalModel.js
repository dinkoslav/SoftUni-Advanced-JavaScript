Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Shapes = (function(){
    function Shape(x, y, color){
        this._x = x;
        this._y = y;
        this._color = color;
    }

    function Circle(x, y, color, r){
        Shape.call(this, x, y, color);
        this._r = r;
    }

    Circle.extends(Shape);
    Circle.prototype.toString = function toString(){
        return "Shape: Circle, X: " + this._x + ", Y: " + this._y +
                ", Radius: " + this._r + ", Color: " + this._color;
    };

    function Rectangle(x, y, color, width, height){
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    }

    Rectangle.extends(Shape);
    Rectangle.prototype.toString = function toString(){
        return "Shape: Rectangle, X: " + this._x + ", Y: " + this._y +
            ", Width: " + this._width + ", Height: " + this._height + ", Color: " + this._color;
    };

    function Triangle(x, y, color, x2, y2, x3, y3){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._x3 = x3;
        this._y2 = y2;
        this._y3 = y3;
    }

    Triangle.extends(Shape);
    Triangle.prototype.toString = function toString(){
        return "Shape: Triangle, AX: " + this._x + ", AY: " + this._y +
            ", BX: " + this._x2 + ", BY: " + this._y2 +
            ", CX: " + this._x3 + ", CY: " + this._y3 +
            ", Color: " + this._color;
    };

    function Line(x, y, color, x2, y2){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._y2 = y2;
    }

    Line.extends(Shape);
    Line.prototype.toString = function toString(){
        return "Shape: Line, AX: " + this._x + ", AY: " + this._y +
            ", BX: " + this._x2 + ", BY: " + this._y2 + ", Color: " + this._color;
    };

    function Segment(x, y, color, x2, y2){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._y2 = y2;
    }

    Segment.extends(Shape);
    Segment.prototype.toString = function toString(){
        return "Shape: Segment, AX: " + this._x + ", AY: " + this._y +
            ", BX: " + this._x2 + ", BY: " + this._y2 + ", Color: " + this._color;
    };

    return {
        triangle: Triangle,
        circle: Circle,
        rectangle: Rectangle,
        line: Line,
        segment: Segment
    }
})();

var c = new Shapes.circle(1,1,"red",1);
console.log(c.toString());
var r = new Shapes.rectangle(1,1,"red",1,1);
console.log(r.toString());
var t = new Shapes.triangle(1,1,"red",2,2,3,3);
console.log(t.toString());
var l = new Shapes.line(1,1,"red",2,2);
console.log(l.toString());
var s = new Shapes.segment(1,1,"red",2,2);
console.log(s.toString());
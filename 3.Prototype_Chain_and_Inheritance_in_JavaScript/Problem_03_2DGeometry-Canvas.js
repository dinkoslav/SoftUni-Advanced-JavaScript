Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Shapes = (function(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    function Shape(x, y, color){
        this._x = x;
        this._y = y;
        this._color = color;
    }
    Shape.prototype.draw = function() {
        context.beginPath();
        context.fillStyle = this._color;
    };

    function Circle(x, y, color, r){
        Shape.call(this, x, y, color);
        this._r = r;
    }

    Circle.extends(Shape);
    Circle.prototype.draw = function draw(){
        Shape.prototype.draw.call(this);
        context.arc(this._x, this._y, this._r, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
    };

    function Rectangle(x, y, color, width, height){
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    }

    Rectangle.extends(Shape);
    Rectangle.prototype.draw = function draw(){
        Shape.prototype.draw.call(this);
        context.rect(this._x, this._y, this._width, this._height);
        context.fill();
        context.stroke();
    };

    function Triangle(x, y, color, x2, y2, x3, y3){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._x3 = x3;
        this._y2 = y2;
        this._y3 = y3;
    }

    Triangle.extends(Shape);
    Triangle.prototype.draw = function draw(){
        Shape.prototype.draw.call(this);
        context.moveTo(this._x, this._y);
        context.lineTo(this._x2, this._y2);
        context.lineTo(this._x3, this._y3);
        context.fill();
        context.stroke();
    };

    function Line(x, y, color, x2, y2){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._y2 = y2;
    }

    Line.extends(Shape);
    Line.prototype.draw = function draw(){
        Shape.prototype.draw.call(this);
        context.moveTo(this._x, this._y);
        context.lineTo(this._x2, this._y2);
        context.stroke();
    };

    function Segment(x, y, color, x2, y2){
        Shape.call(this, x, y, color);
        this._x2 = x2;
        this._y2 = y2;
    }

    Segment.extends(Shape);
    Segment.prototype.draw = function draw(){
        Shape.prototype.draw.call(this);
        context.moveTo(this._x, this._y);
        context.lineTo(this._x2, this._y2);
        context.stroke();
    };

    return {
        triangle: Triangle,
        circle: Circle,
        rectangle: Rectangle,
        line: Line,
        segment: Segment
    }
})();

var circle = new Shapes.circle(20, 20, 'red', 15);
circle.draw();
var rectangle = new Shapes.rectangle(100, 100, 'green', 20, 40);
rectangle.draw();
var triangle = new Shapes.triangle(50, 50, 'blue', 100, 100, 50, 100);
triangle.draw();
var line = new Shapes.line(80, 150, 'blue', 100, 170);
line.draw();
var segment = new Shapes.segment(100, 190, 'blue', 120, 220);
segment.draw();
Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var listOfShapes = {};
var counter = 0;

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
    Shape.prototype.toString = function toString(){
        return "X: " + this._x + ", Y: " + this._y +
            ", Color: " + this._color;
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

    Circle.prototype.toString = function toString(){
        return "Circle: " + Shape.prototype.toString.call(this) +
            ", Radius: " + this._r;
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

    Rectangle.prototype.toString = function toString(){
        return "Rectangle: " + Shape.prototype.toString.call(this) +
            ", Width: " + this._width + ", Height: " + this._height;
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

    Triangle.prototype.toString = function toString(){
        return "Triangle: " + Shape.prototype.toString.call(this) +
            ", X2: " + this._x2 + ", Y2: " + this._y2 +
            ", X3: " + this._x3 + ", Y3: " + this._y3;
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

    Line.prototype.toString = function toString(){
        return "Line: " + Shape.prototype.toString.call(this) +
            ", X2: " + this._x2 + ", Y2: " + this._y2;
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

    Segment.prototype.toString = function toString(){
        return "Segment: " + Shape.prototype.toString.call(this) +
            ", X2: " + this._x2 + ", Y2: " + this._y2;
    };

    return {
        triangle: Triangle,
        circle: Circle,
        rectangle: Rectangle,
        line: Line,
        segment: Segment
    }
})();

function addShape(){
    var shape = document.getElementById('shape').value;
    var x = parseInt(document.getElementsByName('X')[0].value);
    var y = parseInt(document.getElementsByName('Y')[0].value);
    var color = document.getElementsByName('color')[0].value;
    switch(shape){
        case 'Circle':
            var r = parseInt(document.getElementsByName('radius')[0].value);
            var circle = new Shapes.circle(x,y,color, r);
            listOfShapes[counter] = (circle);
            var element = document.createElement('option');
            element.setAttribute("value", counter);
            counter++;
            var text = document.createTextNode(circle.toString());
            element.appendChild(text);
            var shapes = document.getElementById('shapes').appendChild(element);
            break;
        case 'Rectangle':
            var width = parseInt(document.getElementsByName('width')[0].value);
            var height = parseInt(document.getElementsByName('height')[0].value);
            var rectangle = new Shapes.rectangle(x,y,color, width, height);
            listOfShapes[counter] = (rectangle);
            var element = document.createElement('option');
            element.setAttribute("value", counter);
            counter++;
            var text = document.createTextNode(rectangle.toString());
            element.appendChild(text);
            var shapes = document.getElementById('shapes').appendChild(element);
            break;
        case 'Triangle':
            var x2 = parseInt(document.getElementsByName('X2')[0].value);
            var y2 = parseInt(document.getElementsByName('Y2')[0].value);
            var x3 = parseInt(document.getElementsByName('X3')[0].value);
            var y3 = parseInt(document.getElementsByName('Y3')[0].value);
            var triangle = new Shapes.triangle(x,y,color, x2, y2, x3, y3);
            listOfShapes[counter] = (triangle);
            var element = document.createElement('option');
            element.setAttribute("value", counter);
            counter++;
            var text = document.createTextNode(triangle.toString());
            element.appendChild(text);
            var shapes = document.getElementById('shapes').appendChild(element);
            break;
        case 'Line':
            var x2 = parseInt(document.getElementsByName('X2')[0].value);
            var y2 = parseInt(document.getElementsByName('Y2')[0].value);
            var line = new Shapes.line(x,y,color, x2, y2);
            listOfShapes[counter] = (line);
            var element = document.createElement('option');
            element.setAttribute("value", counter);
            counter++;
            var text = document.createTextNode(line.toString());
            element.appendChild(text);
            var shapes = document.getElementById('shapes').appendChild(element);
            break;
        case 'Segment':
            var x2 = parseInt(document.getElementsByName('X2')[0].value);
            var y2 = parseInt(document.getElementsByName('Y2')[0].value);
            var segment = new Shapes.segment(x,y,color, x2, y2);
            listOfShapes[counter] = (segment);
            var element = document.createElement('option');
            element.setAttribute("value", counter);
            counter++;
            var text = document.createTextNode(segment.toString());
            element.appendChild(text);
            var shapes = document.getElementById('shapes').appendChild(element);
            break;
        default:
            break;
    }
    draw();
}

function draw(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var shape in listOfShapes) {
        listOfShapes[shape].draw();
    }
}

function removeShape(){
    var element = document.getElementById('shapes');
    var selected = element.options[element.selectedIndex].value;
    delete listOfShapes[selected];
    element.removeChild(element.options[element.selectedIndex]);
    draw();
}
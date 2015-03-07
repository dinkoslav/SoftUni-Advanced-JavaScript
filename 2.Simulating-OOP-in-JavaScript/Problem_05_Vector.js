function Vector(array){
    if(array == undefined || array.length == 0){
        throw "Array is empty.";
    }else{
        this.dimensions = array;
    }

    Vector.prototype.add = function add(other){
        if(this.dimensions.length !== other.dimensions.length){
            throw "Arrays dimensions count is different.";
        }
        else{
            var newArray = [];
            for (var i = 0; i < this.dimensions.length; i++) {
                newArray.push(this.dimensions[i] + other.dimensions[i]);
            }
            return new Vector(newArray);
        }
    }

    Vector.prototype.subtract = function subtract(other){
        if(this.dimensions.length !== other.dimensions.length){
            throw "Arrays dimensions count is different.";
        }
        else{
            var newArray = [];
            for (var i = 0; i < this.dimensions.length; i++) {
                newArray.push(this.dimensions[i] - other.dimensions[i]);
            }
            return new Vector(newArray);
        }
    }

    Vector.prototype.dot = function dot(other){
        if(this.dimensions.length !== other.dimensions.length){
            throw "Arrays dimensions count is different.";
        }
        else{
            var dotSum = 0;
            for (var i = 0; i < this.dimensions.length; i++) {
                dotSum += (this.dimensions[i] * other.dimensions[i]);
            }
            return dotSum;
        }
    }

    Vector.prototype.norm = function norm(){
        var normSum = 0;
        for (var i = 0; i < this.dimensions.length; i++) {
            normSum += (this.dimensions[i] * this.dimensions[i]);
        }
        return Math.sqrt(normSum);
    }

    Vector.prototype.toString = function toString(){
        return "(" + this.dimensions.join(", ") + ")";
    }
}

//var a = new Vector([1, 2, 3]);
//var b = new Vector([4, 5, 6]);
//var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//console.log(a.toString());
//console.log(c.toString());

// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

//var a = new Vector([1, 2, 3]);
//var b = new Vector([4, 5, 6]);
//var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//var result = a.add(b);
//console.log(result.toString());

//a.add(c); // Error

//var a = new Vector([1, 2, 3]);
//var b = new Vector([4, 5, 6]);
//var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//var result = a.subtract(b);
//console.log(result.toString());

//a.subtract(c); // Error

//var a = new Vector([1, 2, 3]);
//var b = new Vector([4, 5, 6]);
//var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//var result = a.dot(b);
//console.log(result.toString());
//
//a.dot(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
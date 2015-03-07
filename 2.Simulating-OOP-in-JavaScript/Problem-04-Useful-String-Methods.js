String.prototype.startsWith = function startsWith(substring){
    var stringStart = this.substr(0, substring.length);
    return stringStart === substring;
}

String.prototype.endsWith = function endsWith(substring){
    var stringEnds = this.substr(this.length - substring.length, this.length - 1);
    return stringEnds === substring;
}

String.prototype.left = function left(count){
    if(count > this.length){
        return this.toString();
    }else{
        return this.substr(0,count);
    }
}

String.prototype.right = function right(count){
    if(count > this.length){
        return this.toString();
    }else{
        return this.substr(this.length - count, this.length - 1);
    }
}

String.prototype.padLeft = function padLeft(count, character){
    if(count <= this.length){
        return this.toString();
    }else{
        var newString = "";
        if(character == undefined){
            for (var i = 0; i < count - this.length; i++) {
                newString += " ";
            }
            newString += this.toString();
            return newString;
        }else{
            for (var i = 0; i < count - this.length; i++) {
                newString += character;
            }
            newString += this.toString();
            return newString;
        }
    }
}

String.prototype.padRight = function padRight(count, character){
    if(count <= this.length){
        return this.toString();
    }else{
        var newString = this.toString();
        if(character == undefined){
            for (var i = 0; i < count - this.length; i++) {
                newString += " ";
            }
            return newString;
        }else{
            for (var i = 0; i < count - this.length; i++) {
                newString += character;
            }
            return newString;
        }
    }
}

String.prototype.repeat = function repeat(count){
    var newString = "";
    for (var i = 0; i < count; i++) {
        newString += this.toString();
    }

    return newString;
}

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.startsWith("This"));
//console.log(example.startsWith("this"));
//console.log(example.startsWith("other"));
//
//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.endsWith("poses."));
//console.log(example.endsWith ("example"));
//console.log(example.startsWith("something else"));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.left(9));
//console.log(example.left(90));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.right(9));
//console.log(example.right(90));

//Combinations must also work
//var example = "abcdefgh";
//console.log(example.left(5).right(2));

//var hello = "hello";
//console.log(hello.padLeft(5));
//console.log(hello.padLeft(10));
//console.log(hello.padLeft(5, "."));
//console.log(hello.padLeft(10, "."));
//console.log(hello.padLeft(2, "."));

//var hello = "hello";
//console.log(hello.padRight(5));
//console.log(hello.padRight(10));
//console.log(hello.padRight(5, "."));
//console.log(hello.padRight(10, "."));
//console.log(hello.padRight(2, "."));

//var character = "*";
//console.log(character.repeat(5));
//// Alternative syntax
//console.log("~".repeat(3));

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
Array.prototype.flatten = function flatten(){
    var newArray = [];
    var array = this;
    innerflatten(array);

    function innerflatten(array){
        for (var i = 0; i < array.length; i++) {
            if(array[i] instanceof Array){
                innerflatten(array[i]);
            }
            else{
                newArray.push(array[i]);
            }
        }
    }

    return newArray;
}


var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array); // Not changed
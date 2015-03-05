function printArgsInfo(){
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " (" + (arguments[i] instanceof Array ? "array" : typeof arguments[i]) + ")");
    }
}

//printArgsInfo.call();
//printArgsInfo.call(2, 3, 2.5, -110.5564, false);
//printArgsInfo.apply();
printArgsInfo.apply(null, [2, 3, 2.5, -110.5564, false]);

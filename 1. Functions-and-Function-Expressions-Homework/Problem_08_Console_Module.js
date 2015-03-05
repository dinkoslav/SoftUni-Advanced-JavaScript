var specialConsole = (function() {
    function writeLine(){
        if(arguments.length > 1){
            var output = arguments[0];
            var placeholderMatches = arguments[0].match(/\{\d+\}/g);

            var numbers = [];
            for (var i = 0; i < placeholderMatches.length; i++) {
                var number = placeholderMatches[i].substr(1, placeholderMatches[i].length-2);
                if(numbers.indexOf(number) < 0){
                    numbers.push(number);
                }
            }

            numbers.sort();
            for (var i = 0; i < numbers.length; i++) {
                if(numbers[i] != i){
                    throw "Invalid placeholder!";
                }
            }

            if(numbers.length != arguments.length - 1){
                throw "Invalid placeholders!";
            }

            for (var i = 1; i < arguments.length; i++) {
                var placeholder = "{" + (i-1) + "}";
                while(output.indexOf(placeholder) > -1){
                    output = output.replace(placeholder, arguments[i].toString());
                }
            }
            console.log(output);
        }
        else if(arguments.length == 1)
        {
            console.log(arguments[0]);
        }
        else{
            console.log();
        }
    }

    function writeError() {
        if(arguments.length > 1){
            var output = arguments[0];
            var placeholderMatches = arguments[0].match(/\{\d+\}/g);

            var numbers = [];
            for (var i = 0; i < placeholderMatches.length; i++) {
                var number = placeholderMatches[i].substr(1, placeholderMatches[i].length-2);
                if(numbers.indexOf(number) < 0){
                    numbers.push(number);
                }
            }

            numbers.sort();
            for (var i = 0; i < numbers.length; i++) {
                if(numbers[i] != i){
                    throw "Invalid placeholder!";
                }
            }

            if(numbers.length != arguments.length - 1){
                throw "Invalid placeholders!";
            }

            for (var i = 1; i < arguments.length; i++) {
                var placeholder = "{" + (i-1) + "}";
                while(output.indexOf(placeholder) > -1){
                    output = output.replace(placeholder, arguments[i].toString());
                }
            }
            console.error(output);
        }
        else if(arguments.length == 1)
        {
            console.error(arguments[0]);
        }
        else{
            console.error();
        }
    }

    function writeInfo() {
        if(arguments.length > 1){
            var output = arguments[0];
            var placeholderMatches = arguments[0].match(/\{\d+\}/g);

            var numbers = [];
            for (var i = 0; i < placeholderMatches.length; i++) {
                var number = placeholderMatches[i].substr(1, placeholderMatches[i].length-2);
                if(numbers.indexOf(number) < 0){
                    numbers.push(number);
                }
            }

            numbers.sort();
            for (var i = 0; i < numbers.length; i++) {
                if(numbers[i] != i){
                    throw "Invalid placeholder!";
                }
            }

            if(numbers.length != arguments.length - 1){
                throw "Invalid placeholders!";
            }

            for (var i = 1; i < arguments.length; i++) {
                var placeholder = "{" + (i-1) + "}";
                while(output.indexOf(placeholder) > -1){
                    output = output.replace(placeholder, arguments[i].toString());
                }
            }
            console.info(output);
        }
        else if(arguments.length == 1)
        {
            console.info(arguments[0]);
        }
        else{
            console.info();
        }
    }

    function writeWarning() {
        if(arguments.length > 1){
            var output = arguments[0];
            var placeholderMatches = arguments[0].match(/\{\d+\}/g);

            var numbers = [];
            for (var i = 0; i < placeholderMatches.length; i++) {
                var number = placeholderMatches[i].substr(1, placeholderMatches[i].length-2);
                if(numbers.indexOf(number) < 0){
                    numbers.push(number);
                }
            }

            numbers.sort();
            for (var i = 0; i < numbers.length; i++) {
                if(numbers[i] != i){
                    throw "Invalid placeholder!";
                }
            }

            if(numbers.length != arguments.length - 1){
                throw "Invalid placeholders!";
            }

            for (var i = 1; i < arguments.length; i++) {
                var placeholder = "{" + (i-1) + "}";
                while(output.indexOf(placeholder) > -1){
                    output = output.replace(placeholder, arguments[i].toString());
                }
            }
            console.warn(output);
        }
        else if(arguments.length == 1)
        {
            console.warn(arguments[0]);
        }
        else{
            console.warn();
        }
    }

    return{
        writeLine: writeLine,
        writeError: writeError,
        writeInfo: writeInfo,
        writeWarning: writeWarning
    }
})();

//specialConsole.writeLine("Message: hello");
//specialConsole.writeLine("Message: {0} {1} {1}", "hello", "d");
//specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
//specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});
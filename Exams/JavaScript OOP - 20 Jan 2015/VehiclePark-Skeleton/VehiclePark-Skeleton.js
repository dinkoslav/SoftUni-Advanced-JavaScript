function processVehicleParkCommands(commands) {
    'use strict';

    Function.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    var Models = (function() {
        var Employee = (function() {
            function Employee(name, position, grade) {
                this.setName(name);
                this.setPosition(position);
                this.setGrade(grade);
            }

            Employee.prototype.getName = function() {
                return this._name;
            };

            Employee.prototype.setName = function(name) {
                if (name === undefined || name === "") {
                    throw new Error("Name cannot be empty or undefined.");
                }
                this._name = name;
            };

            Employee.prototype.getPosition = function() {
                return this._position;
            };

            Employee.prototype.setPosition = function(position) {
                if (position === undefined || position === "") {
                    throw new Error("Position cannot be empty or undefined.");
                }
                this._position = position;
            };

            Employee.prototype.getGrade = function() {
                return this._grade;
            };

            Employee.prototype.setGrade = function(grade) {
                if (grade === undefined || isNaN(grade) || grade < 0) {
                    throw new Error("Grade cannot be negative.");
                }
                this._grade = grade;
            };

            Employee.prototype.toString = function() {
                return " ---> " + this.getName() +
                    ",position=" + this.getPosition();
            };

            return Employee;
        }());

        var Vehicle = (function() {
            function Vehicle(brand, age, terrainCoverage, numberOfWheels) {
                if(this.constructor == Vehicle){
                    throw new Error("Vehicle is abstract");
                }
                this.setBrand(brand);
                this.setAge(age);
                this.setTerrainCoverage(terrainCoverage);
                this.setNumberOfWheels(numberOfWheels);
            }

            Vehicle.prototype.getBrand = function() {
                return this._brand;
            };

            Vehicle.prototype.setBrand = function(brand) {
                if (brand === undefined || brand === "") {
                    throw new Error("Brand cannot be empty or undefined.");
                }
                this._brand = brand;
            };

            Vehicle.prototype.getAge = function() {
                return this._age;
            };

            Vehicle.prototype.setAge = function(age) {
                if (age === undefined || isNaN(age) || age < 0) {
                    throw new Error("Age cannot be negative.");
                }
                this._age = age;
            };

            Vehicle.prototype.getTerrainCoverage = function() {
                return this._terrainCoverage;
            };

            Vehicle.prototype.setTerrainCoverage = function(terrainCoverage) {
                if (terrainCoverage == "road" || terrainCoverage == "all") {
                    this._terrainCoverage = terrainCoverage;
                }else{
                    throw new Error("Terrain coverage can be road or all.");
                }
            };

            Vehicle.prototype.getNumberOfWheels = function() {
                return this._numberOfWheels;
            };

            Vehicle.prototype.setNumberOfWheels = function(numberOfWheels) {
                if (numberOfWheels === undefined || isNaN(numberOfWheels) || numberOfWheels < 0) {
                    throw new Error("Number of wheels cannot be negative.");
                }
                this._numberOfWheels = numberOfWheels;
            };

            Vehicle.prototype.toString = function(){
                return " -> " + this.constructor.name + ": " +
                    "brand=" + this.getBrand() +
                    ",age=" + this.getAge().toFixed(1) +
                    ",terrainCoverage=" + this.getTerrainCoverage() +
                    ",numberOfWheels=" + this.getNumberOfWheels();
            };

            return Vehicle;
        }());

        var Bike = (function() {
            function Bike(brand, age, terrainCoverage, frameSize, numberOfShifts) {
                Vehicle.call(this, brand, age, terrainCoverage, 2);
                this.setFrameSize(frameSize);
                this.setNumberOfShifts(numberOfShifts);
            }

            Bike.extends(Vehicle);

            Bike.prototype.getFrameSize = function() {
                return this._frameSize;
            };

            Bike.prototype.setFrameSize = function(frameSize) {
                if (frameSize === undefined || isNaN(frameSize) || frameSize < 0) {
                    throw new Error("Frame size cannot be negative.");
                }
                this._frameSize = frameSize;
            };

            Bike.prototype.getNumberOfShifts = function() {
                return this._numberOfShifts;
            };

            Bike.prototype.setNumberOfShifts = function(numberOfShifts) {
                if (numberOfShifts != undefined ) {
                    if(numberOfShifts == ""){
                        throw new Error("Number of shifts cannot be empty.");
                    }else{
                        this._numberOfShifts = numberOfShifts;
                    }
                }else{
                    delete Bike._numberOfShifts;
                }
            };

            Bike.prototype.toString = function(){
                var numberOfShiftsText = this.getNumberOfShifts()? ",numberOfShifts=" + this.getNumberOfShifts(): "";
                return Vehicle.prototype.toString.call(this) +
                    ",frameSize=" + this.getFrameSize() +
                    numberOfShiftsText;
            };

            return Bike;
        }());

        var Automobile = (function() {
            function Automobile(brand, age, terrainCoverage, numberOfWheels, consumption, typeOfFuel) {
                if(this.constructor == Automobile){
                    throw new Error("Automobile is abstract");
                }
                Vehicle.call(this, brand, age, terrainCoverage, numberOfWheels);
                this.setConsumption(consumption);
                this.setTypeOfFuel(typeOfFuel);
            }

            Automobile.extends(Vehicle);

            Automobile.prototype.getConsumption = function() {
                return this._consumption;
            };

            Automobile.prototype.setConsumption = function(consumption) {
                if (consumption === undefined || isNaN(consumption) || consumption < 0) {
                    throw new Error("Consumption cannot be negative.");
                }
                this._consumption = consumption;
            };

            Automobile.prototype.getTypeOfFuel = function() {
                return this._typeOfFuel;
            };

            Automobile.prototype.setTypeOfFuel = function(typeOfFuel) {
                if (typeOfFuel === undefined || typeOfFuel === "") {
                    throw new Error("Type of fuel cannot be empty or undefined.");
                }
                this._typeOfFuel = typeOfFuel;
            };

            Automobile.prototype.toString = function(){
                return Vehicle.prototype.toString.call(this) +
                    ",consumption=[" + this.getConsumption() +
                    "l/100km " + this.getTypeOfFuel() + "]";
            };

            return Automobile;
        }());

        var Truck = (function() {
            function Truck(brand, age, terrainCoverage, consumption, typeOfFuel, numberOfDoors) {
                if(terrainCoverage == undefined){
                    terrainCoverage = "all";
                }
                Automobile.call(this, brand, age, terrainCoverage, 4, consumption, typeOfFuel);
                this.setNumberOfDoors(numberOfDoors);
            }

            Truck.extends(Automobile);

            Truck.prototype.getNumberOfDoors = function() {
                return this._numberOfDoors;
            };

            Truck.prototype.setNumberOfDoors = function(numberOfDoors) {
                if (numberOfDoors === undefined || isNaN(numberOfDoors) || numberOfDoors < 0) {
                    throw new Error("Number of doors cannot be negative.");
                }
                this._numberOfDoors = numberOfDoors;
            };

            Truck.prototype.toString = function(){
                return Automobile.prototype.toString.call(this) +
                    ",numberOfDoors=" + this.getNumberOfDoors();
            };

            return Truck;
        }());

        var Limo = (function() {
            function Limo(brand, age, numberOfWheels, consumption, typeOfFuel) {
                Automobile.call(this, brand, age, "road", numberOfWheels, consumption, typeOfFuel);
                this._employees = [];
            }

            Limo.extends(Automobile);

            Limo.prototype.appendEmployee = function(employee){
                if(!(employee instanceof Models.Employee)){
                    throw new Error("Invalid employee object.");
                }
                this._employees.push(employee);
            };

            Limo.prototype.detachEmployee = function (employee){
                if(!(employee instanceof Models.Employee)){
                    throw new Error("Invalid employee object.");
                }

                this._employees = this._employees.filter(function(e){
                    return e!= employee;
                })
            };

            Limo.prototype.toString = function(){
                if(this._employees.length == 0){
                    var employeesText = " ---"
                }else{
                    employeesText = "\n";
                    employeesText += this._employees.join("\n");
                }
                return Automobile.prototype.toString.call(this) +
                    "\n --> Employees, allowed to drive:" + employeesText;
            };

            return Limo;
        }());

        return {
            Employee: Employee,
            Bike: Bike,
            Truck: Truck,
            Limo: Limo
        }
    }());

    var ParkManager = (function(){
        var _vehicles;
        var _employees;

        function init() {
            _vehicles = [];
            _employees = [];
        }

        var CommandProcessor = (function() {

            function processInsertCommand(command) {
                var object;

                switch (command["type"]) {
                    case "bike":
                        object = new Models.Bike(
                            command["brand"],
                            parseFloat(command["age"]),
                            command["terrain-coverage"],
                            parseFloat(command["frame-size"]),
                            command["number-of-shifts"]);
                        _vehicles.push(object);
                        break;
                    case "truck":
                        object = new Models.Truck(
                            command["brand"],
                            parseFloat(command["age"]),
                            command["terrain-coverage"],
                            parseFloat(command["consumption"]),
                            command["type-of-fuel"],
                            parseFloat(command["number-of-doors"]));
                        _vehicles.push(object);
                        break;
                    case "limo":
                        object = new Models.Limo(
                            command["brand"],
                            parseFloat(command["age"]),
                            parseFloat(command["number-of-wheels"]),
                            parseFloat(command["consumption"]),
                            command["type-of-fuel"]);
                        _vehicles.push(object);
                        break;
                    case "employee":
                        object = new Models.Employee(command["name"], command["position"], parseFloat(command["grade"]));
                        _employees.push(object);
                        break;
                    default:
                        throw new Error("Invalid type.");
                }

                return object.constructor.name + " created.";
            }

            function processDeleteCommand(command) {
                var object,
                    index;

                switch (command["type"]) {
                    case "employee":
                        object = getEmployeeByName(command["name"]);
                        _vehicles.forEach(function(t) {
                            if (t instanceof Models.Limo && t.getEmployees().indexOf(object) !== -1) {
                                t.detachEmployee(object);
                            }
                        });
                        index = _employees.indexOf(object);
                        _employees.splice(index, 1);
                        break;
                    case "bike":
                    case "truck":
                    case "limo":
                        object = getVehicleByBrandAndType(command["brand"],command["type"]);
                        index = _vehicles.indexOf(object);
                        _vehicles.splice(index, 1);
                        break;
                    default:
                        throw new Error("Unknown type.");
                }

                return object.constructor.name + " deleted.";
            }

            function processListCommand(command) {
                return formatOutputList(_vehicles);
            }

            function processListEmployees(command){
                var employees = _employees.filter(function(e1, e2){
                    return e1.getName() !== e2.getName();
                });
                var grade = command["grade"];
                if(grade != "all"){
                    employees = _employees.filter(function(e){
                        return e.getGrade() >= grade;
                    });
                }

                employees = employees.sort(function(e1, e2) {
                    return e1.getName() > e2.getName();
                });

                return formatOutputList(employees);
            }

            function processAppendEmployeeCommand(command) {
                var employee = getEmployeeByName(command["name"]);
                var limos = getLimosByBrand(command["brand"]);

                for (var i=0; i < limos.length; i++) {
                    limos[i].appendEmployee(employee);
                }
                return "Added employee to possible Limos.";
            }

            function processDetachEmployeeCommand(command) {
                var employee = getEmployeeByName(command["name"]);
                var limos = getLimosByBrand(command["brand"]);

                for (var i=0; i < limos.length; i++) {
                    limos[i].detachEmployee(employee);
                }

                return "Removed employee from possible Limos.";
            }

            // Functions below are not revealed

            function getVehicleByBrandAndType(brand, type) {
                for (var i=0; i < _vehicles.length; i++) {
                    if (_vehicles[i].constructor.name.toString().toLowerCase() === type &&
                        _vehicles[i].getBrand() === brand) {
                        return _vehicles[i];
                    }
                }
                throw new Error("No Limo with such brand exists.");
            }

            function getLimosByBrand(brand) {
                var currentVehicles = [];
                for (var i=0; i < _vehicles.length; i++) {
                    if (_vehicles[i] instanceof Models.Limo &&
                        _vehicles[i].getBrand() === brand) {
                        currentVehicles.push(_vehicles[i]);
                    }
                }
                if (currentVehicles.length > 0) {
                    return currentVehicles;
                }
                throw new Error("No Limo with such brand exists.");
            }

            function getEmployeeByName(name) {

                for (var i = 0; i < _employees.length; i++) {
                    if (_employees[i].getName() === name) {
                        return _employees[i];
                    }
                }
                throw new Error("No Employee with such name exists.");
            }

            function formatOutputList(output) {
                var queryString = "List Output:\n";

                if (output.length > 0) {
                    queryString += output.join("\n");
                } else {
                    queryString = "No results.";
                }

                return queryString;
            }

            return {
                processInsertCommand: processInsertCommand,
                processDeleteCommand: processDeleteCommand,
                processListCommand: processListCommand,
                processListEmployees: processListEmployees,
                processAppendEmployeeCommand: processAppendEmployeeCommand,
                processDetachEmployeeCommand: processDetachEmployeeCommand
            }
        }());

        var Command = (function() {
            function Command(cmdLine) {
                this._cmdArgs = processCommand(cmdLine);
            }

            function processCommand(cmdLine) {
                var parameters = [],
                    matches = [],
                    pattern = /(.+?)=(.+?)[;)]/g,
                    key,
                    value,
                    split;

                split = cmdLine.split("(");
                parameters["command"] = split[0];
                while ((matches = pattern.exec(split[1])) !== null) {
                    key = matches[1];
                    value = matches[2];
                    parameters[key] = value;
                }

                return parameters;
            }

            return Command;
        }());

        function executeCommands(cmds) {
            var commandArgs = new Command(cmds)._cmdArgs,
                action = commandArgs["command"],
                output;

            switch (action) {
                case "insert":
                    output = CommandProcessor.processInsertCommand(commandArgs);
                    break;
                case "delete":
                    output = CommandProcessor.processDeleteCommand(commandArgs);
                    break;
                case "append-employee":
                    output = CommandProcessor.processAppendEmployeeCommand(commandArgs);
                    break;
                case "detach-employee":
                    output = CommandProcessor.processDetachEmployeeCommand(commandArgs);
                    break;
                case "list":
                    output = CommandProcessor.processListCommand(commandArgs);
                    break;
                case "list-employees":
                    output = CommandProcessor.processListEmployees(commandArgs);
                    break;
                default:
                    throw new Error("Unsupported command.");
            }

            return output;
        }

        return {
            init: init,
            executeCommands: executeCommands
        }
    }());

    var output = "";
    ParkManager.init();

    commands.forEach(function(cmd) {
        var result;
        if (cmd != "") {
            try {
                result = ParkManager.executeCommands(cmd) + "\n";
            } catch (e) {
                result = "Invalid command." + "\n";
                //result = e.message + "\n";
            }
            output += result;
        }
    });

    return output;
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

//(function() {
//    var arr = [];
//    if (typeof (require) == 'function') {
//        // We are in node.js --> read the console input and process it
//        require('readline').createInterface({
//            input: process.stdin,
//            output: process.stdout
//        }).on('line', function(line) {
//            arr.push(line);
//        }).on('close', function() {
//            console.log(processVehicleParkCommands(arr));
//        });
//    }
//})();
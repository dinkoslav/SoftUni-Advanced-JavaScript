function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
    this.fuName = this.fName + " " + this.lName;

    Object.defineProperty(this, 'firstName', {
        get: function() {
            return this.fName;
        },
        set: function(name) {
            this.fName = name;
            this.fuName = this.fName + " " + this.lName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function() {
            return this.lName;
        },
        set: function(name) {
            this.lName = name;
            this.fuName = this.fName + " " + this.lName;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return this.fName + " " + this.lName;;
        },
        set: function(name) {
            var names = name.split(" ");
            this.fName = names[0];
            this.lName = names[1];
            this.fuName = this.fName + " " + this.lName;
        }
    });
}

var person = new Person("Peter", "Jackson");
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
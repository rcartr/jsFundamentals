/*
    CLASSES

    Classes can be defined by expression or declaration.
    Classes are functions.

    Classes act as blueprints for creating objects that share methods and properties. Using this blueprint creates different "instances" of that class, and each object will have different values for the same properties they hold.

    Body of the class is written between { } curly brackets.

    Constructor method is a special method for creating and initializing an object that was created with a class.

    Can use the "super" keyword. Super keyword is used to access and call functions from a parent class.

    Introduced in ES5
    New way to write previous existing prototype-based inheritance.
    Closest thing in vanilla JavaScript to object oriented programming (OOP).
    Common naming convention is capitalizing class names.
*/

/*
    CLASS DECLARATION
*/
    // 1      2        
    class Automobile {
            // 3         4
        constructor(make, model) {
            // set the current instancea of Automobile's make/model property to the parameter value
            this.make = make
            this.model = model
        }
    }

// Hoisting: unlike function declarations, class declarations are not hoisted. A class declaration must be declared before accessing it.

/*
    CLASS EXPRESSION

    Can be named or unnamed.
    The name given to an unnamed class expression is local to the class body.
    The name of the class can be retrieved through the class name property.
*/

//unnamed
class Automobile {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
}

//named
let Auto = class Mobile {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
}

/*
    METHODS


*/



/*
    NEW INSTANCES

    Using the new keyword, we can create a new object/instance of a class.
*/

let hondaCivic = new Automobile('Honda', 'Civic')
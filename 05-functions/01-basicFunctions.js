/*
    FUNCTIONS

    Functions are processes that we call upon to run an action. They can do the following:
        - Take in an input to process, modify, or respond to (no required)
        - Return a value (not required)
        - Can be invoked (or called) as often as needed
*/

// (1)   (2)
function hi() {
/*  (3) 
    
    1: function keyword - we use this to define a function
    2: name of the functions, followed by parentheses - this is how we will call the function
    3: code goes here - the brains of the function          */
console.log('Hi!');
}

/*  CALLING THE FUNCTION
    aka putting the fun in function

    In order to invoke/call the function, we will simply write its name and put parentheses after it. 
    NOTE: function names are case-sensitive!        */
hi() // good
//Hi() // undefined

console.log(hi())
/*  When we console.log a function, JS will first evaluate the function, meaning it will run all the code and look for a value from it. If we do not have a return statement within the function, we will get back undefined.   */

let myName = 'Richard'

function myNameCap() {
    myName = myName.toUpperCase();
    /* Avoid this if you can (until much later)
        this is called RECURSION
        (calling a function within itself)  */
    hi()
}

myNameCap();

console.log(myName);

/*  FUNCTION DECLARATION

    a chunk of code that runs a set chunk of code when it is invoked/called */

    function funcOne() {
        console.log('This is the code that we run in function one!')
    }

    funcOne() // we invoke/call a function by writing its declared name with parentheses

/*  FUNCTION EXPRESSIONS

    assigning a function to a variable is what we call an expression    */

let first = function funcTwo() {
    console.log('Code being run in the function expression')
}

first();

let example = function() {
    console.log('What is my name?');
}

console.log(typeof example); // function
console.log(typeof example()); // undefined

/*  ANONYMOUS FUNCTIONS

    Anonymous functions are stored in memory but the runtime does not automatically create a reference to it.

    the main use would be to pass these functions through another function. Maybe have a ternary where if something is true we run one function, else we run a different function.      */

// Common use would be to assign these to a variable
let anon = function() {
    console.log('Anonymous Function');
}
  
anon();
  
// EXAMPLE OF WRITING ANONYMOUS FUNCTIONS
// fetch('something')
//    .then(function(response) { response.json() })

/*  PARAMETERS

    We will be using functions to pass information and return a result.

    Parameters will allow our functions to take in outside information      */

function parameterFunc(num) {
    console.log(num + 1);
    return num + 5; // sends back a value for the function when it is run
}

// parameterFunc(7);
// parameterFunc('bruce');
// parameterFunc('another test');
// parameterFunc([1,2,3,4,5]);

let returnTest = 15;
let myReturn = parameterFunc(returnTest)
console.log('RETURN:' + myReturn)
parameterFunc(returnTest);
console.log(parameterFunc(returnTest));

/* if(7 < 8) {
    let exampleNum = 7;
    parameterFunc(exampleNum);
} */

let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last) {
    console.log(`Hi, ${first}! Welcome back!`)
    console.log(`This is the first parameter: ${first}`)
    console.log(`This is the second parameter: ${last}`)
}

greeting('Richard', 'Carter');

// after

function foo() {
    return bar();
    function bar() {
        return "Poppin bottles!";
    }
}
console.log(foo());
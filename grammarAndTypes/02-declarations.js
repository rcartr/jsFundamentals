/*
    What is a variable?

    Variables are named containers for sorting data.
    We can think of these containers as resources we call upon later. 
    Each variable allows us to store data, which could be a value or a function, 
    that we will want to reference back to.
*/

let a = 2;

/*
    - "let" is our keyword
    - "a" is our variable NAME
    - "=" is our ASSIGNMENT OPERATOR
    - "2" is our variable's VALUE
*/

let b = 1;

console.log(a + b) // What should we get? 3

/*

    Restrictions with variables

    - a var must begin with a letter, underscore, or dollar sign
    - number may follow the first character, but cannot be the first character
    - javascript is case sensitive - "hello" and "Hello" are different variables
    - no spaces are allowed in variable names
    - camelCase is best practice for naming variables in js, helps keep names readable.
        ex: 
            let myName = 'Richard';
            is easier to read than
            let myname = 'Richard';

*/

let startingWithLetter = 'test1';
let _startingWithUnderscore = 'test2';
let $startingWithLetterDollarSign = 'test3';
// let 5startingWithNumber = 'breaks'; <-- invalid, variable starts with number
// let -startingWithDash = 'breaks'; <-- also invalid, cannot start with dash

console.log (startingWithLetter, _startingWithUnderscore, $startingWithLetterDollarSign)

// ctrl + alt + n will run code runner (windows)
// ctrl + option + n will run code runner (mac)

/*
    KEYWORDS
    var, let, const

        - var: the 'old' keyword for variables. We will not use this much but it is still used depending on the project and when it was made. We will focuse on let and const.

        - let: the 'new' keyword for variables, which was introduced in ES6 *newest version of ECMAScript, which is a standardization of JS.

        - const: also 'new' and declares an unchangeable, or constant, variable. The only limit to const variables is that once they are declared/assigned, their value will NEVER change.
*/

var variable = 'var variable';
let letVariable = 'let variable';
let constVariable = 'const variable'
console.log(variable, letVariable, constVariable)

/* 
    Declarations are the LEFT side of the assignment operator (=) within a variable: 
        let x = 10

    10 would be the initialization

    */

    let x;
    console.log('Declaration', x);

    x = 10;
    console.log('Initialization1', x);

    x = 33;
    console.log('Initialization2', x);

    let y = 'Hello';
    console.log('Both', x, y) // Both 33 Hello


    let today = 'Great!';
    const efa = 'Wonderful!';
    console.log(today, efa); // Great! Wonderful!

    today = 'Awesome!';
    console.log(today, efa); // Awesome! Wonderful!

    efa = 'Super!';
    // console.log(today, efa); // error, efa is a const

    /* const example; //error
    example = 'Testing';
    console.log(example);
    */
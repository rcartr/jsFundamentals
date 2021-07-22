/*
    DATA and STRUCTURE types

    - Primitive data types:
        • boolean
        • undefined
        • string
        • number
        • bigInt *
        • symbol *
    - null
    - object
    - function
*/

/*
    BOOLEAN

    A boolean has two possible value: true or false

*/
let on = true;
let off = false;

console.log(on);
console.log(off);

/*
    NULL

    A null value is an empty value. Think of it as an empty container that has space to fill.
    Note: null and undefined are 2 different things.
*/
let variable = null;
console.log(variable);

/*
    UNDEFINED

    No value has been assigned to a container and doesn't even act as an empty container.
*/

let unknown;
let undef = undefined;

/* What's the difference between null and undefined?
    - Null is like a container with nothing in it.
    - Undefined is a variable that has never been set, or hasn't been created yet.
*/

/*
    NUMBERS

    Literally just numbers.
*/
let degrees = 82;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatIf = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatIf);

/*
    STRINGS

    Strings represent text and are wrapped in either single or double quotes.
*/

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I then said, 'It is pretty cool, right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

const contractions1 = "now you can't run into any issues";
const contractions2 = 'now you can\'t run into any issues'; // backslash before ' continues the string
console.log(contractions1);
console.log(contractions2);

// Numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = "1050" + "100";
console.log(addTheseAlso);

//We can use an operator called 'typeof' to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 1050 + '100';
console.log(addTest);

/*
    OBJECTS

    Objects are used to store many values instead of just one. Consider them as a collection of different variables in one container.
    denoted by curly brackets {}
*/

let frodo = {
    //an object has many values inside of it
    race: 'Hobbit',
    //name : value
    //we must separate properties in an object with a comma
    rings: 1, //number
    sting: true //boolean
}
console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); // dot notation example -  a period allows call for specific property in object

/*
    ARRAYS

    Containers that hold a list of items denoted by square brackets: []
    all items are within the square brackets
    regardless of the data type, all items are separated by commas
*/

let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', true, 17, 9007199254740992, false, null, undefined];
console.log(anotherExample);
console.log(anotherExample[0]); // square bracket notation - calls specific properties in the array

console.log(typeof anotherExample); // JS sees an array as an object

/*
    ADDITION vs CONCATENATION

    JS sees the + symbol in two different ways
        - when we use it with numbers, it will use the built-in math function
        - when we use it with strings, the math function is ignored and the two strings are put together
*/
let strings = 'one' + ' ' + 'is a number';
console.log(strings)

let concatDiff = 1050 + '100'
console.log(concatDiff);
console.log(typeof concatDiff)

// CHALLENGE

let challenge = {
    firstName: "Richard", 
    lastName: "Carter", 
    streetNum: 2021, 
    aptNum: "#2026", 
    street: "Monopoly Man Dr.", 
    city: "Singapore", 
    state: "FL", 
    zipCode: 32034
}
console.log(challenge.firstName, challenge.lastName + ",", challenge.streetNum, challenge.street, challenge.aptNum + ",", challenge.city + ",", challenge.state + ",", challenge.zipCode)

/*

*/
let myName = "Richard";
console.log(myName.length);

/*
    STRING: METHOD

    methods are tools that can help us manipulate data
    .property .method()
    noparens parens
*/
let myNameIs = "Richard";
console.log(myNameIs);
console.log(myNameIs.toUpperCase());

let home = 'My home is in Noblesville';
console.log('Include Method:', home.includes('Noblesville')) //.include('string') returns true or false for home string containing string specified in parentheses

/* CHALLENGE

    Use google, find MDN documentation for strings, research and use the split method to get an array back from this string.
*/

let sent = 'This sentence will be split into separate parts.';
const strCopy = sent.split(" "); // splits the sentence into an array at each space
console.log(strCopy);

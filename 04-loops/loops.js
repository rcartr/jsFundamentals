/*
    LOOPS
    Loops allow us to go over a block of information or code in a determined amount of cycles.
    It's important to note that it is possible for us to write code without declaring an end point.

    Loops help us repeat a process without writing a lot of code.

    STRUCTURE
    We have to set up our loops in a way that we can: 
        1. see where we are in a loop 
        2. consider what sort of condition we want to run it against
        3. note when we are done with that condition and move on to the next iteration

    We need to:
        1. create an index
        2. run a condition
        3. change the indexing variable when we execute the condition
*/

// Lets count to 10
for (let i = 0; i <= 10; i++){
    console.log(i);
}

/*
    We state our loop with FOR. Within this function, we are injecting some parameters that JS will run against. 
    
    index, condition, change index -> result.

    Within parameters, we are stating our index declaration to 0. This is our baseline. We move one to asking if that variable is less than or equal to 10, take that set number and add 1 to it. Once that is processed, return that value (in this case, console.log the number). Once our condition is met, we return a FALSE which ends our loop.

    This is important to note:
    for(<create an index variable>; <run condition>; <change index>) {
        <return results>
        <continue until condition is met>
    }
*/

// If we don't indicate what our condition is, our loop will not have a finish line. Thus, it will run until we force close the infinite loop. No condition means that JS doesn't know the end point, and it will never assume that information.

// NOTE: we use "ctrl + C" to stop loops manually.

/*
    INFINITE LOOP (commented out)

    for(let i = 0; i++){
        console.log(i)
    }
*/

/*
    CHALLENGE!!

    Using a FOR loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.
*/

for (let x = 2; x > -10; x -= 4) {
    console.log(x);
}

// We aren't limited by positive or negative numbers. We can cycle through variables assigned with strings.

let word = "supercalifragilisticexpialidocious"

for (let b = 0; b < word.length; b++){
    // .length is a method we can use in JS that helps us determine a value we may not know.
    console.log(b, word[b])

/*  We set each index and are displaying that
    We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it. */
console.log(`The letter ${word[b]} is in position ${b}`);
}

/*
    FOR IN LOOPS

    With FOR loops we are seeking an index value and running it against a condition. FOR IN loops do not require an index number.
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}

for (info in city){
    console.log(info);
    // console.log(city.name) 
    // console.log(city["name"]) // city.info looks for city = {info: 'value'}
    console.log(city[info]);
}

/* for(variable in object){
    run code
    }                           */

let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/* 
    let list = {
        0: milk
        1: eggs
        2: lunch meat
        3: bread
        4: bananas
    }
*/
for (items in list){
    console.log(items, list[items]);
}

/*
    CHALLENGE!!
    Write a FOR loop that loops over a name, will capitalize the first letter and make all other letters lowercase.
*/

let myName = 'dwiGht';
let propCase;

// for (let index = 0; index < myName.length; index++){}
for (let index = 0; index <= myName.length - 1; index++){
    // code here
    // console.log(myName.split(''))
   // console.log(myName[index])
   // console.log(myName[index].toUpperCase())
    if(index === 0){
        propCase = myName[index].toUpperCase(); // propCase = "D"
    } else {
        propCase += myName[index].toLowerCase(); // propCase ("D") + rest of letters lower cased
    }
}
console.log(propCase)

// FOR IN version
let myName = 'dwIgHt';
let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}

console.log(propCase);

/*
    FOR OF LOOP

    In order to run a FOR OF loop, the 'thing' must be numbered like an array.
*/

/*  ERROR in this code: objects are not iterable for a loop
let myObject = {
    string: 'Peter';
    boolean: true;
    number: 1
}

for (item of myObject){
    console.log(item);
}                               */

let indexArray = ['spot 1', 2, true, 'not fifth'];

for (let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
}

/*
    for(variables of iterables) {
        code goes here
    }

    an iterable is something that has numbers assigned to it like an array, where the first is assigned a 0, the second a 1, etc. (eg, arrays and strings)
*/

let officeCharacters = ['Dwight','Michael','Jim','Stanley','Pam']

for (worker of officeCharacters) {
    if (worker === 'Dwight') {
        console.log(worker, 'works too much in the office.')
    }
    if (worker === 'Jim' && worker !== 'Dwight'){
        console.log('Bears. Beets. Battlestar Gallactica.')
    }
}


/*
    CONDITIONALS

    FALSY VALUES:
    A falsy value is a value that is considered false when encountered in a boolean context. There are 6 falsy values in JS:
        1. false
        2. 0 (zero)
        3. '', "", `` (any empty string)
        4. null
        5. undefined
        6. NaN (not a number)
    
    What does this mean? Whenever JS is expecting a boolean value and is given one of these 6 values, it is evaluated as FALSE.

    side note: There are also truthy values in JS, which tend to be much less limited. 
    Examples: true, {}, [], 42 (any number), "false" (any non empty string)
*/ 

// test if fractions are truthy

/*
    IF STATEMENTS
    When we use comparison operators, we typically are asking if we can move on to the next section of code. "If" something is true, do "this thing"
*/
let light = "on";
//keyword   expression
    if      (true) {
    // code to run if the expression evaluates to true
    console.log('Truthy Test')
}

if (false) {
    console.log('Falsy Test')
}

if (light == 'on'){
    console.log('The light is on!')
}

let weather = 85;
let rain = true;
if (weather < 70) {
    console.log('Maybe wear a jacket')
}

/*  
    CHALLENGE

    Create 2 variables:
    1. let batman = 'is the night';
    2. let bruce = true

    Create an if statement that returns true and console log 'Batman'
*/

let batman = 'is the night';
let bruce = true;

if(batman == 'is the night', bruce = true) {
    console.log('Batman')
}

/*
    IF ELSE

    We can think of this as not only providing an answer if our condition evaluates to be true, but also one if it ends up being false.
*/

let today = 75;
if(today < 70) {
    //  string interpolation
    console.log(`It's ${today}, wear a jacket`);
} else {
    console.log(`It's ${today}. No jacket needed!`)
}

/*
    ELSE IF

    This is a condition that will be checked if the above condition was not met.
*/

let cooktime = 60;

if (cooktime === 45) {
    console.log('Let us feast!');
} else if (cooktime > 45) {
    console.log(`It has been ${cooktime} minutes. Don't burn it!`);
} else if (cooktime >= 30) {
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if (cooktime >= 20) {
    console.log(`It has only been ${cooktime} minutes! Wait another 10-25 minutes.`)
} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
}

/*
    CHALLENGE!

    Set a variable of age and give it a number of your choice.
    Create an else if statement that checks the following:

    If the age is 17 or younger, console.log "Sorry, you're too young to do anything."
    If age is at least 18, console.log "You can vote!"
    If age is at least 21, console.log "You can drink!"
    If age is at least 25, console.log "You can rent a car!"
*/

let age = 21
if (age >= 25) {
    console.log(`You are ${age}. You can vote, drink, and rent a car!`);
} else if (age >= 21) {
    console.log(`You are ${age}. You can vote and drink!`);
} else if (age >=18) {
    console.log(`You are ${age}. You can vote!`)
} else {
    console.log("Sorry, you're too young to do anything.");
}

/*
    TERNARIES

    They are if/else statements but they look weird!
*/

let myName = "Richard";
if (myName === "Richard") {
    console.log(`Hi, ${myName}!`);
} else {
    console.log(`Not sure I know ${myName}.`)
}

/* condition ? if true: else result
condition               if true, run this               else run this */
myName === "Richard" ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}.`);

let hero = 'Batman'
let villain = 'Mr. Freeze'

hero == 'Batman' && villain == 'Riddler' ? console.log('What has a head and tail but no body?') : hero == 'Batman' && villain == 'Joker' ? console.log('Why so serious?') : hero == 'Batman' && villain == 'Mr. Freeze' ? console.log('Ice to meet you!') : console.log(`${hero} is the night!`)

/*
    CHALLENGE!

    Translate the following to a ternery
*/

let lampOn = true;
let daytime = true;

if (lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if (lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if (lampOn == true && daytime == true) {
    console.log('The lamp is on during the day')
} else if (lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

lampOn == true && daytime != true ? 
console.log('The lamp is on during the night') : 
lampOn != true && daytime != true ? 
console.log('The lamp is off during the night') : 
lampOn == true && daytime == true ? 
console.log('The lamp is on during the day') : 
lampOn != true && daytime == true ? 
console.log('The lamp is off during the day') : 
console.log('What lamp?')

/*
    SWITCH STATEMENTS

    The switch statement executes a block of code depending on different cases
*/

let instructor = 'Barry';

switch(instructor) {
    // if instructor === 'Jerome'
    case 'Jerome':
        console.log(`${instructor} is a part of the Web Development Team.`);
// }
    break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team.`);
    break
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team.`);
    break
// else {
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
}

let staff = 'Jerome';

switch(staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case "Hustin":
        console.log(`${staff} is a part of the Wed Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches.`) 
}

/* 
    When we use || (or) only one side of the || needs to be true for the expression to be true.

    When we use && (and) BOTH sides of the && need to be true for the expression to be true.
*/

let switchConditional = true;

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
    break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean!`)
}

/*
    TAKE HOME CHALLENGE

    Create a switch statement that takes in a value (number) that represents a grade. If it is true, console log that they are passing with the correct letter grade.

    *   A: 89-100
    *   B: 79-88
    *   C: 66-78
    *   D: 59-65
    *   F: 0-58
*/

let grade = 65;

switch(true){
    case (grade > 88):
        console.log(`You have a grade of ${grade}. That's an A!`);
        break;
    case (grade > 78):
        console.log(`You have a grade of ${grade}. That's a B!`);
        break;
    case (grade > 65):
        console.log(`You have a grade of ${grade}. That's a C!`);
        break;
    case (grade > 58):
        console.log(`You have a grade of ${grade}. That's a D!`)
        break;
    default:
        console.log(`You have a grade of ${grade}. F! :(`)
}

/*
    CHALLENGE!!

    Take this if else statement and translate it to both a ternary and a switch statement.
*/

let character = "";
if(character === "Michael"){
    console.log('That\'s what she said!');
} else if(character === "Dwight"){
    console.log('It\'s not weed! It\'s hemp!');
} else if(character === "Jim"){
    console.log('Bears. Beets. Battlestar Galactica.');
} else {
    console.log('*slow camera zoom*')
}
//  ternary
let character = ""
character == "Michael" ? console.log('That\'s what she said!') : character == "Dwight" ? console.log('It\'s not weed! It\'s hemp!') : character == "Jim" ? console.log('Bears. Beets. Battlestar Galactica.') : console.log('*slow camera zoom*')

// switch statement
let character = "Jim"
switch (character) {
    case "Michael":
        console.log('That\'s what she said!');
        break;
    case "Dwight":
        console.log('It\'s not weed! It\'s hemp!');
        break;
    case "Jim":
        console.log('Bears. Beets. Battlestar Galactica.');
        break;
    default:
        console.log('*slow camera zoom*');
        break;
}
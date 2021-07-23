/*  ARROW FUNCTIONS

    Arrow functions are expressional functions that can be simplified into one of two forms: concise body or block body. The main goal is to generate shorter syntax for writing a function.    */

// Regular function
function regFunc() {
    console.log('just a regular function.');
}
regFunc();

// Arrow function
//      (1)    (2) (3)     (4)
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/*
    1. A variable created to hold the value of our anoynumous arrow function
        (arrow functions are always anonymous)
    2. Parameters are still capable of being added
        -Parameters go in the () as in a normal function, BUT if we only have one parameter () is not required. If we have no parameters we are still required to put an empty ().
    3. "How we see an arrow". This is JS syntax that says we are about to process a function.
    4. The code the arrow function will run. Here it's a simple console.log
*/

let arrow = (x) => console.log(x);
arrow(42);

/*  CONCISE vs BLOCK BODY

    When we have a simple return (or response) from our arrow function, it makes sense to write it in a concise, simplified way. When we use a concise body arrow function, the "return" statement is implied (meaning we do not have to write it).         */

let conciseBody = (x,y) => console.log(x + y);
conciseBody(1,2);

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them.`);
slightlyComplexConcise(4,-11);
slightlyComplexConcise(2,1);

/*  BLOCK BODY

    The return keyword is required. We will include curly braces.
    Sometimes it will makes sense to do block body if we need to do multiple lines of code. */

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function!`
    // ANY code below the return statement in a function will be ignored. If we write code below it, it will not run.
}
console.log(blockArrow(17,25))

/*
    CHALLENGE!

    Convert the following into an arrow function
*/

let hero = 'Robin Hood';
let nock = 1;

function shot (x,y) {
    y < 2 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
}

shot(hero,nock);

//Concise arrow conversion
let conciseShot = (x,y) => y < 2 ? (`${x} only shot ${y} arrow...`) : (`${x} shot ${y} arrows at the target!`);
console.log(conciseShot('Peter Pan', 2));

// Block body conversion
let blockShot = (x,y) => {
    return y < 3 ? (`${x} only shot ${y} arrow...`) : (`${x} shot ${y} arrows at the target!`);
}
console.log(blockShot('Little John',5));

// Looped until else statement occurs
let loopShot = (x,y) => {
    for (y ; y < 4; y++) {
        if (y < 3){
            console.log(`${x} only shot ${y} arrow...`); 
        } else {
            console.log(`${x} shot ${y} arrows at the target!`);
        }
    }
    //return y < 3 ? (`${x} only shot ${y} arrow...`) : (`${x} shot ${y} arrows at the target!`);
}
loopShot('Ric Flair', 1)
//console.log(loopShot('Ric Flair',1));
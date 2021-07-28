/*
    CLASSROOM CHALLENGES

    This is a file for writing and running the challenges we do in class.
*/


/*
    Challenge #3
    Write a function called findPerimeter() that accepts 2 parameters called: "length" and "width".
    The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
    The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20. 
    This function should be active.
*/

function findPerimeter(length,width) {
    let x = length * 2 + width * 2;
    if(x > 20) {
        console.log(`True! The perimeter is ${x}`);
    } else {
        console.log(`False! The perimeter is ${x}`);
    }
}
findPerimeter(7,5)

// Replit challenge 1: even or odd, conditionals and loops
let callback = (num) => {
    return isNaN(num) ? console.log('what is this?') : num % 2 == 0 || num == 0 ? console.log(`${num} the number is even`) : console.log(`${num} the number is odd`);
}
callback('17')


// loop method for Repl 1
// for (var num=0; num<=10; num++) {
//     if (num == 0) {
//         console.log(num, "the number is even");
//     } else if (num % 2 == 0) {
//         console.log(num, "the number is even");   
//     } else if (num % 2 != 0) {
//         console.log(num, "the number is odd");
//     } else {
//         console.log('what is this?');
//     }
// }
for (var num=0; num<=10; num++) {
    callback(num);
}

// Replit challenge 2: object literal
const movieChallenge = {
    name: 'The Departed',
    runTime: 151,
    genre: 'crime thriller',
    characters: {
        name1: 'Billy Costigan, Jr.',
        age1: 30,
        items1: ['shirt', 'badge', 'gun'],
        name2: 'Frank Costello',
        age2: 60,
        items2: ['sunglasses','cap','gun']
    }
}

console.log(movieChallenge.name + ', ' + movieChallenge.genre + ', ' + movieChallenge.runTime)
console.log(movieChallenge.characters.name1 + ", " + movieChallenge.characters.name2 + ", " + movieChallenge.characters.items2[2])


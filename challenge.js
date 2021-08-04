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

/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

// 1st
var toPigLatin = function(str){
    return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};
console.log(toPigLatin('the frosty marshmallow'))

// 2nd
function translate(str) {
    str=str.toLowerCase();
    var n =str.search(/[aeiuo]/);
    switch (n){
      case 0: str = str+"way"; break;
      case -1: str = str+"ay"; break;
      default :
        //str= str.substr(n)+str.substr(0,n)+"ay";
        str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
   }
   return str;

}

translate("paragraphs")
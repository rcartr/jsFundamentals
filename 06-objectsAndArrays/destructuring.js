/*
    ARRAY DESTRUCTURING

    -allows us to unpack values from arrays or properties from objects.
    -similar syntax to array literals BUT is on the left side of the assignment operator.
    -this will define what values to unpack.
    -great for pulling info out of an array/object and assigning that data to its own variable.
*/

const boardGames = ['Catan', 'Monopoly', 'Clue']

const [gameOne, gameTwo, gameThree] = boardGames

console.log(gameOne)
console.log(gameTwo)
console.log(gameThree)

/*
    REST OPERATOR

    using the rest operator will look almost exactly like using the spread operator
    spread expands array into its elements 
    rest collects multiple elements and condenses them into one element
    rest MUST be the last element defined using array destructuring
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}]

let [charOne, charTwo, ...otherInfo] = hitchhikersGuide
console.log(charOne)
console.log(charTwo)
console.log(otherInfo)

/*
    OBJECT DESTRUCTURING
*/
const game = {
    title: 'Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}
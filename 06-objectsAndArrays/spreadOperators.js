/*
  SPREAD OPERATOR
*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
// console.log(copiedNames[2]);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo];
nameOne.unshift('Justin');
console.log('Altered:', nameOne, 'Spread:', copiedNamesSpread);

// cannot use spread operator on it's own
// ...nameTwo

// console.log(['Adam', 'Hustin'])
console.log(nameTwo);
// console.log('Adam', 'Hustin')
console.log(...nameTwo);


/*
  ... numbers
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(prices));

console.log(Math.min(...prices));


/*
  ... objects
*/

const persons = [
  {
    name: 'John Wick',
    enemies: true
  },
  {
    name: 'Neo (from the matrix)',
    enemies: true
  }
];

const copiedPersons = persons;

persons.push({ name: 'Bill and or Ted', enemies: false });
console.log('original:',persons,'copy:',copiedPersons);


const comics = [
    {
        title: 'Spider-Man',
        year: 1962
    },
    {
        title: 'Detective Comics',
        year: 1939
    }
];

// let copiedComics = comics.map(comic => )
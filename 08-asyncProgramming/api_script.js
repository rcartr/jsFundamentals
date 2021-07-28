const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); // gets the first ul tag

console.log(spaceShips)

searchForm.addEventListener('submit',fetchSpace);

/* HOISTING MINI LESSON
    JS will compile code from top to bottom, BUT it actually reads code twice. The first time it reads code, it will story anything in memory such as: variable names, functions (when using the keyword) */
console.log(fetchSpace(1));
console.log(myVar1);
console.log(myVar2);

let myVar1 = 'Awesome';
let myVar2 = 'Not Awesome?';

function fetchSpace(e) {
    return e
}
// zs

function displayRockets(data) {
    console.log('Inside displayRockets:',data);
}

data.forEach(rocket => {
    console.log(rocket)
    let listItem = document.createElement('li'); // creates an empty <li></li> tag
    listItem.innerText = rocket.name // change the text of the item. The tag now looks like this: <li>rocket name</li>
    spaceShips.appendChild(listItem) // will add one of our items into another tag. In this case we are adding listItem into the ul (spaceShips)
    // container.appendChild(itemInContainer)
});

// optional challenge
// Add a table to the html page, comment out the ul
// comment out the forEach loop and make a new one
// make a new row in the table for each rocket
// inside of each new row, add the name and cost of the rocket
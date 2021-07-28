console.log('Hello from the JS script file!');

// ! 1
console.log(document);
console.log(document.body);
// using console.dir() to see the properties of the object instead of the html tag
console.dir(document.getElementById('testParagraph'));
console.log(document.getElementById('testParagraph'));

//document.getElementById('testParagraph').style.color = '#434c8c';

let testPara = document.getElementById('testParagraph');
testPara.style.color = "#434c8c";
testPara.style.backgroundColor = "lightgray";

// This method will reach out to the html page and grab the first HTML element with the specific id passed into the mething (in this case, testParagraph). This is important to know because if you have two elements with the same id, you will ONLY get the first, though you usually will not have two elements with the same id.

// ! 2 querySelectorAll & innerText/innerHTML
console.log(document.querySelectorAll('.sampleClass'));
console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!'
// We use square bracket notation to select an index from the array, even if there's only one element. innerText just references or changes the text inside of that element.

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has been changed using a forEach() method!';
    // pTag.textContent = 'My text has been changed using a forEach() method!';
    pTag.innerHTML = 'My text has been changed using a forEach() method!';
})

/*
    INNERTEXT vs TEXTCONTENT vs INNERHTML

    - innerText will simply reference or allow us to change the text of a specified element. Will return visible text in a "node".

    - textContent does the same thing that innerText does, but will return the full text of a node.
    
    - innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we are referencing.
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHTML);

// ! addEventListener() - click

/* 
    CHALLENGE

    Move the button into a variable, and when you click that button it will turn blue, or if it is already blue it will turn red.
*/
let clickButton = document.getElementById('clickThis');

clickButton.addEventListener('click', ev => {
    console.log(clickButton.style.backgroundColor);
    if(clickButton.style.backgroundColor !== "blue"){
        clickButton.style.backgroundColor = "blue";
    } else {
        clickButton.style.backgroundColor = "red"
    }
})

// clickButton.addEventListener('click', function(event) {
//     console.log(event.target)
//     event.target.style.backgroundColor = "blue"
// })

// ! addEventListener() - keyup
let input = document.getElementById('nameInput')

input.addEventListener('keyup', e => {
    console.log(e.target.value)
    document.getElementsByTagName('p')[0].innerText = 'Something has changed!'

    if(e.target.value == "") {
        document.getElementsByTagName('p')[1].innerText = "Nothing has been typed...";
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${e.target.value}`
    }
})



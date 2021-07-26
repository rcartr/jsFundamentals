/*
    ARRAYS

    -populating and referring
    -methods
    -length
    -iterating
*/
        //     0        1       2
let list = ['orange','banana','oreo'];
    //  (array name [array item])
console.log(list[1])

/*
    When we call an array, we can append, or add, square brackets onto the end of an array name with the index number of the value we want to reference. This is known as square bracket notation.

    JS starts counting at 0, so when we console.log 'list[1]' we should see 'banana'
*/

let students = ['Evan','Ricky','Kali','Richard','Matthew','Cameron','Phoenix',25,true,['Matthew','Shake n Bake','Sophie'],15 % 4];
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array);
//console.log(students instanceof array); -- using lowercase a in array here is processed as calling a variable which has not been defined.

// The instanceof operator is used to check the type of an object at run time. Remember arrays are technical objects.

/*
    CHALLENGE!

    console.log from the students array
    - first Matthew
    - number 25
    - the phrase "shake n bake"
    - print out "Hello Sophie"
*/

console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello ${students[9][2]}`);

/*
    ARRAY METHODS

    We can call on multiple different array methods that will allows us to manipulate arrays as we need to.
*/

let food = ['Pecan Pie','Shrimp!','Quesadilla','Cheesecake','Hotdog']

// add or remove items in our array
food.push('Pizza'); //push adds the item at the end of the array
console.log(food.push('Spring Onion')); // returns the value of 'Spring Onion' in the array order
console.log('push:', food);

food.pop(); //pop will remove the last item from the array
console.log('pop:',food);

food.shift(); //shift will remove the first item from the array
console.log('shift:',food);

food.unshift('Chicken','Garlic'); //adds item to beginning of array
console.log('unshift:',food)

food.splice(2,1,'Bananas'); //remove and insert items in the array
// splice(position to remove, how many to remove, what to replace it with)

console.log('splice:',food);

// LENGTH
let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue','green','yellow','red','orange','purple'];

/*
    ITERATING

    forEach - 

    -the forEach() method executes a provided function once for each  element in an array
    -the forEach() method does the same thing as a FOR look or FORE OF loop --> both iterate over the properties in an array

    -provide a callback function that has up to 3 arguments
        1. the value
        2. the index
        3. the array object itself
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for (let i = 0; i < colorList.length; i++) {
    console.log([2])
}
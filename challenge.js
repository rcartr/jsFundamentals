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
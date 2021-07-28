/*
    ! ASYNC/AWAIT

    Allows us to program in a synchronous manner while still allowing the code to run in the background.
    Helps keep our sites responsive
*/

/*
    ASYNC FUNCTION

    Allows us to make a normal function asynchronous, which means we can use await
    Must use the async keyword at the beginning of the function declaration
*/

async function myFn() {
    await console.lot('testing');
}
myFn()

const myAsyncFn = async () => {
    await console.log('testing');
}
myAsyncFn();

// const newFn = () => {
//     await console.log('testing');
// }
// newFn(); // error: await is only valid in an async function

async function fn() {
    return 'hello'
}

fn().then(console.log) // Promise of 'hello' returned --> then console.log the value 

fn().then(dataFromAsyncFunc => console.log(dataFromAsyncFunc))

/*
    AWAIT
    Pauses an async function until a promise is settled (either resolved or rejected)
*/

fetch('https://random.dog/woof.json')
    .then(result => result.json()) // takes in the results and translates it into json
    .then(json => console.log(json)) // print that json in the console
    .catch(error => console.log(error)) // print any errors that may happen

// USING ASYNC
async function getWoof() {
    // first step is going to be waiting for the fetch to resolve
    const response = await fetch('https://random.dog/woof.json');
    // second step is waiting for the response to get translated
    const json = await response.json();
    return json
}
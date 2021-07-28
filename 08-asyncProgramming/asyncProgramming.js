/*
    ! ASYNCHRONOUS PROGRAMMING

    Generally, JS is read from top to bottom, performing each line of code one after another - this is known as synchronous programming.
        ex: line 1 is run and completed before line 2 begins, which is then run and completed before line 3, etc.
    
    This can become an issue when we gather, or fetch, information from an outside source - such as from an API. If JS did not have the ability to run code asynchronously, we would be forced to wait for our line of code to finish as it tried to gather mountains of data from a database. Asynchronous code will allow us to somewhat ignore the one line at a time rule.

    -Asynchronous programming allows a program to do more than one thing at a time.
    -Makes it possible to run long-running actions without stopping the program to wait for a response.
*/

// Synchronous code
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// Asynchronous code
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000)
}

console.log('Hello World');
networkRequest();
console.log('The End');

/*
    ! API
    Application Program Interface
    
    An API is something that will allow us to talk to other programs, such as databases or servers. However, the API itself is not a database, it is code with access points to the server.

    Access to a server will come in the form of ENDPOINTS. Endpoints direct us to sets of data.
*/
    
/*  
    REST API
    Representational State Transfer API

    Creates an object of requested data from the client, and sends values back as a response.

    Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
    *** MORE ON THIS DURING BLUE BADGE PHASE ***

        FETCH
            The fetch method is asynchronous and is part of the browser window, NOT JS. This method will start the process of fetching - or getting a resource from the network - and will return a promise which is fulfilled when the response is available.

            Promise is an unknown value that will eventually be filled with either a value or rejection (error).
                Pending: initial state, neither fulfilled nor rejected.
                Fulfilled: the operation completed successfully.
                Rejected: the operation failed.
*/

/*
    ! 


*/
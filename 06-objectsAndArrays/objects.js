/*

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

/*
    OBJECT BRACKET NOTATION

    -can allow for us to find a value in an object we wouldn't be able to access using dot notation.
    -can also be used to store a key in a variable and use that variable to access information in an object.
    -this works because all key names in an object are strings
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

// dot notation
console.log(garden.flower);

// square bracket notation
console.log(garden['fruit'])

const baking = {example: 'This is super cool.', brainHurt: true};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
console.log(baking[garden['vegetable']]);

// Using square brackets can also be a good idea if the object's key has a space in the name

let testObj = {
    "Spaces Here": true
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);
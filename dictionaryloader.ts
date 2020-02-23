

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
//         const keyholder = key;
//         newDictionary.push({
//             keyholder : element
//         });
//     }
// }


// Object.keys(WORDS).forEach(key => {
//     //This logs the information that goes with each word. 
//     //console.log(WORDS[key]);
//     //This logs the key or the word itself
//     //console.log(key);    
//     let colorArray = {
//         "COLORS": {
//         "U": 0,
//         "B": 0,
//         "W": 0,
//         "G": 0,
//         "R": 0
//         }
//     };
//     let newWordData = {
//         key : WORDS[key],
//         colors : []
//     };
//     newWordData.colors.push(colorArray);

//     let builtEntry = { key : newWordData }
//     newDictionary.push(builtEntry);

//     //I want to add a colorArray to this bad boy though, and rebuild the json anew with colors


// });

import * as object from './data/DA.json';

let newDictionary = [];
let colors = {U:0,B:0,W:0,R:0,G:0};


Object.keys(object).forEach(key => {
    let newEntry = {
        id : '',
        def : '',
        col : colors
    }
    
    newEntry.id = key;
    // object[key].push(colorArray);
    newEntry.def = (JSON.stringify(object[key]));
    newDictionary.push(newEntry); 
})



const fs = require('fs');
fs.writeFile("data/newDictionary.json", JSON.stringify(newDictionary), function(err) {
    if (err) {
        console.log(err);
    }
});

//Ok. You've got it sorted the way you like. New script! <3
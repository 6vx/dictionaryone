import * as WORDS from './data/DA.json';

let newDictionary = [];

Object.keys(WORDS).forEach(key => {
    //This logs the information that goes with each word. 
    //console.log(WORDS[key]);
    //This logs the key or the word itself
    //console.log(key);
    let newWordData = [];
    let colorArray = {
        "U": "",
        "B": "",
        "W": "",
        "G": "",
        "R": ""
    };
    newWordData.push(key);
    newWordData.push(WORDS[key]);
    newWordData.push(colorArray);
    newDictionary.push(newWordData);
    //I want to add a colorArray to this bad boy though, and rebuild the json anew with colors


});

const fs = require('fs');
fs.writeFile("data/newDictionary.json", JSON.stringify(newDictionary), function(err) {
    if (err) {
        console.log(err);
    }
});


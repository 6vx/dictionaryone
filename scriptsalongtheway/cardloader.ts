import * as M20 from './data/M20.json';

//I'm trying to export arrays of colored strings, which I can later match against the dictionary. 

let fullCards = M20[0].cards;
let strippedCards = [];


fullCards.forEach(card => {
    let preStrip = [];
    let str = '';
    let color = card.colorIdentity;
    str += card.name;
    if(card.flavorText != undefined){    
        str += (" " + card.flavorText);
    };
    str += (" " + card.name);
    preStrip.push({color, str});
    strippedCards.push(preStrip)

});

//console.log(strippedCards);

let colorArray = {
    "U": "",
    "B": "",
    "W": "",
    "G": "",
    "R": ""
};

strippedCards.forEach(krill => {
    // console.log(krill[0].color);
    let tempString = krill[0].str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toUpperCase();
    krill[0].color.forEach(element => {
        if(element == 'U'){
            colorArray.U += (" " + tempString + " ");
        }
        if(element == 'B'){
            colorArray.B += (" " + tempString + " ");
        }
        if(element == 'G'){
            colorArray.G += (" " + tempString + " ");
        }
        if(element == 'R'){
            colorArray.R += (" " + tempString + " ");
        }
        if(element == 'W'){
            colorArray.W += (" " + tempString + " ");
        }
    });
});

const fs = require('fs');
fs.writeFile("data/test3.json", JSON.stringify(colorArray), function(err) {
    if (err) {
        console.log(err);
    }
});



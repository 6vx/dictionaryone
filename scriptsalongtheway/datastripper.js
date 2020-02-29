"use strict";
//Okay like 20 tries later
//This script takes the JSON data of every magic card and spits out 
//five strings, one for each color, to be consumed by pointassigner
//Hallelujah
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
//importing the json data downloaded from https://mtgjson.com/
var AllPrintings = __importStar(require("./data/AllPrintings.json"));
//An array to hold some card data as I go
var fullCards = [];
//Looping through the data set to retrieve each... set... of data... ...???
//Pushes each card individually into the fullCards array
Object.keys(AllPrintings).forEach(function (set) {
    if (AllPrintings[set].cards != undefined) {
        var bilbo_1 = AllPrintings[set].cards;
        Object.keys(bilbo_1).forEach(function (card) {
            fullCards.push(bilbo_1[card]);
        });
    }
    ;
});
//This is where I'll hold the stripped down cards while looping through full cards
var strippedCards = [];
//this is my first copy-paste from an old script. If it ain't broke, don't fix it! 
//Except I realize how much better I could do all this... Probably in one fell swoop, really...
//But not tonight! 
Object.keys(fullCards).forEach(function (card) {
    var preStrip = [];
    var str = '';
    var color = fullCards[card].colorIdentity;
    str += fullCards[card].name;
    if (fullCards[card].flavorText != undefined) {
        str += (" " + fullCards[card].flavorText);
    }
    ;
    str += (" " + fullCards[card].name);
    preStrip.push({ color: color, str: str });
    strippedCards.push(preStrip);
});
//A place to hold the 5 strings until being written to JSON file
var colorArray = {
    "U": "",
    "B": "",
    "W": "",
    "G": "",
    "R": ""
};
//This checks the color of the card and then assigns it's accompanying string data
//to the appropriate slot in colorArray
//also takes out any punctuation, extra spaces, etc, and capitalizes for uniformity
//gotta get that data sparklin' clean
strippedCards.forEach(function (krill) {
    // console.log(krill[0].color);
    var tempString = krill[0].str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toUpperCase();
    krill[0].color.forEach(function (element) {
        if (element == 'U') {
            colorArray.U += (" " + tempString + " ");
        }
        if (element == 'B') {
            colorArray.B += (" " + tempString + " ");
        }
        if (element == 'G') {
            colorArray.G += (" " + tempString + " ");
        }
        if (element == 'R') {
            colorArray.R += (" " + tempString + " ");
        }
        if (element == 'W') {
            colorArray.W += (" " + tempString + " ");
        }
    });
});
//This writes all my bullshit down. Yay!
var fs = require('fs');
fs.writeFile("data/alltheflave.json", JSON.stringify(colorArray), function (err) {
    if (err) {
        console.log(err);
    }
});

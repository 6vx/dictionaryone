"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var M20 = __importStar(require("./data/M20.json"));
//I'm trying to export arrays of colored strings, which I can later match against the dictionary. 
var fullCards = M20[0].cards;
var strippedCards = [];
fullCards.forEach(function (card) {
    var preStrip = [];
    var str = '';
    var color = card.colorIdentity;
    str += card.name;
    if (card.flavorText != undefined) {
        str += (" " + card.flavorText);
    }
    ;
    str += (" " + card.name);
    preStrip.push({ color: color, str: str });
    strippedCards.push(preStrip);
});
//console.log(strippedCards);
var colorArray = {
    "U": "",
    "B": "",
    "W": "",
    "G": "",
    "R": ""
};
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
var fs = require('fs');
fs.writeFile("/data/test.json", JSON.stringify(colorArray), function (err) {
    if (err) {
        console.log(err);
    }
});

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
//I just got a taste for making objects out of functions out of a for loop and I'm MAD WITH POWER
//So I think I can do this all better than beforeglobal.fetch = require('node-fetch');
var olddictionary = __importStar(require("./data/DA.json"));
var colorpool = __importStar(require("./data/test.json"));
function occurrences(string, subString, allowOverlapping) {
    string += "";
    subString += "";
    if (subString.length <= 0)
        return (string.length + 1);
    var n = 0, pos = 0, step = allowOverlapping ? 1 : subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        }
        else
            break;
    }
    return n;
}
function synonymGrabber(synoWord) {
    var synonyms = [];
    Object.keys(olddictionary[synoWord].SYNONYMS).forEach(function (synonym) {
        synonyms.push(olddictionary[synoWord].SYNONYMS[synonym].toUpperCase());
    });
    return synonyms;
}
function colorChecker(samplematter) {
    var colors = { U: 0, B: 0, W: 0, R: 0, G: 0 };
    Object.keys(colors).forEach(function (color) {
        colors[color] += occurrences(colorpool[color], " " + samplematter + " ", 0);
    });
    return colors;
}
function returnPoints(word, color) {
    //this gets me the zeroes I expected
    return olddictionary[word].COLORS[color];
}
Object.keys(olddictionary).forEach(function (word) {
    olddictionary[word].COLORS = colorChecker(word);
});
var sampleEntry = olddictionary["AIR"];
// entry.COLOR = colors;
//console.log(olddictionary["AA"[0]].MEANINGS);
console.log(sampleEntry);
console.log(olddictionary["ACOLYTE"]);
//can i access based on specific criteria?
Object.keys(olddictionary).forEach(function (word) {
    Object.keys(olddictionary[word].COLORS).forEach(function (color) {
        if (returnPoints(word, color) >= 3) {
            console.log(word + " " + color + " " + returnPoints(word, color));
            console.log(synonymGrabber(word));
        }
    });
});
console.log(olddictionary["ACOLYTE"].SYNONYMS);

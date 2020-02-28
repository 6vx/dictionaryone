"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
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
//Everything I've done so far has convinced me towards this route.
//I want to shape everything precisely and save it as one object. 
//pseudocoding this thing once through top to bottom. glhfev.
//import both your data sets, COLORPOOL and OLDDICTIONARY
var olddictionary = __importStar(require("./data/DA.json"));
var colorpool = __importStar(require("./data/alltheflave.json"));
//shape the word exactly the way you want it abstractly
//for Each WORD in OLDDICTIONARY, create WORDOBJECT in NEWDICTIONARY
var newDictionary = [];
function colorchecker(checkingthisword) {
    var colors = { U: 0, B: 0, W: 0, R: 0, G: 0 };
    Object.keys(colorpool).forEach(function (color) {
        colors[color] += occurrences(colorpool[color], checkingthisword, 0);
    });
    return colors;
}
Object.keys(olddictionary).forEach(function (key) {
    var newEntry = {
        id: key,
        dat: olddictionary[key],
        col: colorchecker(" " + key + " ")
    };
    // Object.keys(colorpool).forEach(color => {
    //     newEntry.col[color] = occurrences(colorpool[color], key, 0);
    // })
    newDictionary.push(newEntry);
});
//for Each WORD in COLORPOOL.(COLOR) add 1 to NEWDICTIONARY[WORD].U
console.log(newDictionary[0].col.U);
//Save file and log completion of script. 
var fs = require('fs');
fs.writeFile("data/FLAVORDIC1.json", JSON.stringify(newDictionary), function (err) {
    if (err) {
        console.log(err);
    }
});

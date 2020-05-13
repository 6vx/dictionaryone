"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var alltheflave_json_1 = __importDefault(require("./data/alltheflave.json"));
//import scrabble dictionary
var file = fs_1["default"].readFileSync('./data/csw15.txt', 'utf8');
//const sqlite3 = require('sqlite3').verbose();
//function to check for word matches in test.json
function colorchecker(checkingthisword) {
    var colors = { U: 0, B: 0, W: 0, R: 0, G: 0 };
    Object.keys(alltheflave_json_1["default"]).forEach(function (color) {
        colors[color] += occurrences(alltheflave_json_1["default"][color], checkingthisword, 0);
    });
    return colors;
}
//function that counts matches of a string within a larger string
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
//this splits my dictionary into entries based on new line
var dicto = file.split(/\r\n|\r|\n/);
var newDicto = [];
Object.keys(dicto).forEach(function (word) {
    var entry = (_a = {}, _a[dicto[word]] = colorchecker(" " + dicto[word] + " "), _a);
    newDicto.push(entry);
    var _a;
});
//you're just trying to put it in ./data instead of data/ right now I guess? 
//probably should just remove the ./ do it again and leave it for as long as it needs this time
//go for your bike ride
fs_1["default"].writeFile("data/COLOREDCOLLINS.json", JSON.stringify(newDicto), function (err) {
    if (err) {
        console.log(err);
    }
});

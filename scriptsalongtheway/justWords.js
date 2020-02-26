"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var test_json_1 = __importDefault(require("./data/test.json"));
//import scrabble dictionary
var file = fs_1["default"].readFileSync('./data/collins.txt', 'utf8');
//const sqlite3 = require('sqlite3').verbose();
//function to check for word matches in test.json
function colorchecker(checkingthisword) {
    var colors = { U: 0, B: 0, W: 0, R: 0, G: 0 };
    Object.keys(test_json_1["default"]).forEach(function (color) {
        colors[color] += occurrences(test_json_1["default"][color], checkingthisword, 0);
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
var superDicto = [];
var Dictomain = /** @class */ (function () {
    function Dictomain() {
    }
    return Dictomain;
}());
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.getName = function () {
        return this.constructor.name;
    };
    return MyClass;
}());
Object.keys(dicto).forEach(function (word) {
    var entry = new Dictomain();
    entry.wordword = dicto[word];
    entry.colors = colorchecker(dicto[word]);
    superDicto.push(entry);
});
Object.keys(dicto).forEach(function (word) {
    var _a;
    var entry = (_a = {}, _a[dicto[word]] = colorchecker(dicto[word]), _a);
    newDicto.push(entry);
});
//A whole bunch of sanity checking below. 
Object.keys(newDicto).forEach(function (word) {
    if (dicto[word] == "AETHER") {
        console.log("Found.");
        console.log(dicto[word]);
    }
    if (Object.keys(newDicto[word]).toString() == "AETHER") {
        console.log("Double found?");
        console.log(newDicto[word]);
    }
});

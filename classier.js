"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var test_json_1 = __importDefault(require("./data/test.json"));
var DA_json_1 = __importDefault(require("./data/DA.json"));
var file = fs_1["default"].readFileSync('./data/collins.txt', 'utf8');
var dicto = file.split(/\r\n|\r|\n/);
var backupDicto = [];
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
function printWord(word) {
    console.log(word);
    console.log(DA_json_1["default"][word]);
    if (DA_json_1["default"][word] == undefined) {
        console.log("Not colouring this?");
    }
    else {
        DA_json_1["default"][word].COLORS = colorchecker(word);
        console.log(DA_json_1["default"][word].SYNONYMS);
    }
}
Object.keys(dicto).forEach(function (element) {
    printWord(dicto[element].toString());
});

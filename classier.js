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
function printWord(WORD) {
    var entry = {
        WORD: WORD,
        DATA: {
            SYNONYMS: [],
            ANTONYMS: [],
            MEANINGS: {},
            COLORS: { U: 0, B: 0, G: 0, W: 0, R: 0 }
        }
    };
    if (DA_json_1["default"][WORD] != undefined) {
        entry.DATA.SYNONYMS = DA_json_1["default"][WORD].SYNONYMS;
        entry.DATA.ANTONYMS = DA_json_1["default"][WORD].ANTONYMS;
        entry.DATA.MEANINGS = DA_json_1["default"][WORD].MEANINGS;
    }
    ;
    backupDicto.push(entry);
    //Query Any Specific Data Here
    // console.log(entry.DATA.COLORS.U);
}
Object.keys(dicto).forEach(function (element) {
    printWord(dicto[element]);
});
Object.keys(backupDicto).forEach(function (element) {
    //console.log(backupDicto[element]);
    if (backupDicto[element].word == "AETHER") {
        console.log("Found aether");
    }
});
fs_1["default"].writeFile("data/backupDicto.json", JSON.stringify(backupDicto), function (err) {
    if (err) {
        console.log(err);
    }
});
//K you know how to add to and remove from and move around things
//This is now a theoretical problem more than a technical one
//how do you want to organize your data and how do you want to add to samples

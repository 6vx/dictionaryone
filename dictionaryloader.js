"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var WORDS = __importStar(require("./data/DA.json"));
var newDictionary = [];
Object.keys(WORDS).forEach(function (key) {
    //This logs the information that goes with each word. 
    //console.log(WORDS[key]);
    //This logs the key or the word itself
    //console.log(key);
    var newWordData = [];
    var colorArray = {
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
var fs = require('fs');
fs.writeFile("data/newDictionary.json", JSON.stringify(newDictionary), function (err) {
    if (err) {
        console.log(err);
    }
});

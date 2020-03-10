"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var SAMPS = __importStar(require("./data/samplecollins.json"));
var WORDDATA = __importStar(require("./data/DA.json"));
var timsfunctions_1 = require("./timsfunctions");
var reformattedArray = [];
Object.keys(SAMPS).forEach(function (element) {
    Object.keys(SAMPS[element]).forEach(function (word) {
        // console.log(word);
        if (WORDDATA[word] != undefined) {
            console.log(word);
            // console.log(WORDDATA[word].SYNONYMS);
            WORDDATA[word].SYNONYMS.forEach(function (synonym) {
                console.log(synonym.toUpperCase());
                console.log(timsfunctions_1.occurrences(synonym.toUpperCase(), word, true));
            });
        }
    });
});
fs_1["default"].writeFile("data/synonympopper.json", JSON.stringify(reformattedArray), function (err) {
    if (err) {
        console.log(err);
    }
});

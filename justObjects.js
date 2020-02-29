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
var COLORED = __importStar(require("./data/COLOREDCOLLINS.json"));
var ultradicto = [];
var colorsortarray = [];
var saturationcount = 0;
Object.keys(COLORED).forEach(function (entry) {
    Object.keys(COLORED[entry]).forEach(function (word) {
        //console.log(word);//this is the actual word as a string
        ultradicto[word] = COLORED[entry][word];
        //This pulls out a specific type of entry
        //It looks for words that are colored, and that have a dominant color among those colors
        var tempsum = 0;
        Object.keys(COLORED[entry][word]).forEach(function (color) {
            tempsum += COLORED[entry][word][color];
        });
        Object.keys(COLORED[entry][word]).forEach(function (color) {
            //adjusting these numbers lets you search for more frequency or more colored wordage
            if ((word.length >= 7) && (COLORED[entry][word][color]) >= 10 && (COLORED[entry][word][color]) >= (tempsum / 1)) {
                colorsortarray.push({ word: word, color: color, amount: COLORED[entry][word][color] });
            }
        });
        if (tempsum > 0) {
            saturationcount += 1;
        }
        ;
    });
});
console.log(colorsortarray);
console.log("The Dictionary is " + ((saturationcount / ultradicto.length) * +"% saturated."));
fs_1["default"].writeFile("data/COLOREDCOLLINSv2.json", JSON.stringify(ultradicto), function (err) {
    if (err) {
        console.log(err);
    }
});

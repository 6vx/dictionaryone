"use strict";
//Experimenting with putting together the dictionary all in one go. 
//I'm stripping the flavortext and soon the titles here so I can 
//count each instance of each word and assign color points
//psyched.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
//loading my two basic samples, some dictionary words with 
//associated synonyms etc
//and some magic cards, with names and flavor text belonging to colors
var data = __importStar(require("./data/DA.json"));
var data2 = __importStar(require("./data/M20.json"));
var colorArray = {
    "U": "blue",
    "B": "black",
    "W": "white",
    "G": "green",
    "R": "red"
};
//console.log(colorArray);
//console.log((colorArray.U).toUpperCase());
var cards = data2[0].cards;
var bigColorfulString = '';
var myDictionary = [];
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
cards.forEach(function (element) {
    var homeColor = element.colorIdentity;
    var homeFlavor = element.flavorText;
    var homeTitle = element.name;
    var tempString = '';
    //var str = homeFlavor;
    //console.log(typeof(homeFlavor));
    //console.log(homeTitle);
    //console.log(homeColor);
    tempString += homeTitle.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ").toUpperCase();
    if (typeof homeFlavor === 'string') {
        tempString += homeFlavor.replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ").toUpperCase();
        //bigColorfulString = bigColorfulString + ' ' + homeFlavor;
    }
    homeColor.forEach(function (element) {
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
//console.log(colorArray);
Object.keys(data).forEach(function (element) {
    // if(element.length == 5){  
    //         console.log(element);
    //         //console.log(data[element]);  
    //         if(colorArray.U.search(element) == -1){
    //             console.log(element + " is not in there.")
    //         } else {
    //             console.log(" apply a point.");
    //         }
    // }
    var temp = colorArray.U;
    var count = (temp.match(" " + element + " ") || []).length;
    if (count >= 1) {
        console.log(element);
        console.log(count);
    }
    if (occurrences(colorArray.U, element, false) >= 1) {
        console.log("Point Assigned.");
    }
    ;
});
console.log(myDictionary);
//console.log(Object.keys(data3));
//console.log(bigColorfulString);
//console.log(JSON.stringify(data.AA));

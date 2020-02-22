"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var data = __importStar(require("./DA.json"));
var data2 = __importStar(require("./M20.json"));
//console.log(Object.keys(data));
//this gets the keys! THE KEYS! FOR THEM DICTIONARY ENTRIES!
Object.keys(data).forEach(function (element) {
    if (element.length == 2) {
        console.log(element);
        console.log(data[element]);
    }
});
Object.keys(data2[0].cards).forEach(function (element) {
    //This line delivers the card number itself
    //console.log(element);
    //This line delivers the contents of any one card
    //console.log(data2[0].cards[element]);
    //this delivers the keys from within the object that is any one card
    //console.log(Object.keys(data2[0].cards[element]));
    //These lines deliver each card's color profile and flavortext
    console.log((data2[0].cards[element]).colorIdentity);
    if ((data2[0].cards[element]).colorIdentity == 'W') {
        console.log((data2[0].cards[element]).flavorText);
    }
});

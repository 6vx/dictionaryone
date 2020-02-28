"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
//import * as M20 from './data/M20.json';
//import * as colorpool from './data/test.json';
var AllPrintings = __importStar(require("./data/AllPrintings.json"));
// console.log(backupDicto);
// const cards = M20.map(SET => SET.cards);
Object.keys(AllPrintings).forEach(function (set) {
    // console.log(set);
    Object.keys(AllPrintings[set]).forEach(function (element) {
        // console.log(element);
        var Cards = AllPrintings[set].cards;
        Cards.forEach(function (card) {
            if (Cards.flavorText != undefined) {
                console.log(card.flavorText);
            }
        });
    });
});
// let Cards = M20[0].cards;
// Cards.forEach(card => {
//     console.log(card.name);
//     if(card.flavorText != undefined){
//         console.log(card.flavorText);
//     }
// });
// function assignPoints(string, colors){
//     Object.keys(backupDicto).forEach(entry => {
//         if(backupDicto[entry].WORD == string){
//             console.log("You're not crazy... yet.");
//         }
//     });
// }

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
var COLORED = __importStar(require("./data/COLOREDCOLLINSv2.json"));
//import * as WORDDATA from './data/DA.json';
//let coloredsample = [];
// console.log(WORDDATA["AA"].SYNONYMS);
// Object.keys(WORDDATA).forEach(word => {
//     if(WORDDATA[word].SYNONYMS != undefined){
//         console.log(word + " " + WORDDATA[word].SYNONYMS);
//     }
// });
// Object.keys(COLORED).forEach(entry => {
//     let tempsum = 0;
//     Object.keys(COLORED[entry]).forEach(word => {
//         //console.log(word);//this is the actual word as a string
//         Object.keys(COLORED[entry][word]).forEach(color => {
//             tempsum += COLORED[entry][word][color];
//         });
//         // console.log(tempsum);
//         if (tempsum >= 1){
//             saturated.push(word);
//         };
//     });
// });
var array = [];
array.push(COLORED);
var reformattedArray = array.map(function (obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(reformattedArray);
fs_1["default"].writeFile("data/reformattedcollins.json", JSON.stringify(reformattedArray), function (err) {
    if (err) {
        console.log(err);
    }
});

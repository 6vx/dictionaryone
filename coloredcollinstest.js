"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var dicto = __importStar(require("./data/COLOREDCOLLINS.json"));
console.log("This should just be the whole entry: " + dicto[3088]);
console.log("This is probably the word and color array as an object: " + Object.keys(dicto[3088]));
console.log("This is a longshot, but maybe is the value for U: " + dicto[3088].U);

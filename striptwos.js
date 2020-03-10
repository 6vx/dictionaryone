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
var twoletterwords = [];
Object.keys(SAMPS).forEach(function (entry) {
    console.log(SAMPS[entry]);
});
fs_1["default"].writeFile("data/twoletterwords.json", JSON.stringify(twoletterwords), function (err) {
    if (err) {
        console.log(err);
    }
});

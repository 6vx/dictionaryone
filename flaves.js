"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var file = fs_1["default"].readFileSync('./data/csw15.txt', 'utf8');
var dicto = file.split(/\r\n|\r|\n/);
console.log(dicto);

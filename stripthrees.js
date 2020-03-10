"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var threeletterwords = [];
fs_1["default"].writeFile("data/threeletterwords.json", JSON.stringify(threeletterwords), function (err) {
    if (err) {
        console.log(err);
    }
});

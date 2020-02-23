"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var object = __importStar(require("./data/newDictionary.json"));
var colorpool = __importStar(require("./data/test.json"));
function poolChecker(string, searchTerm) {
    //if the searchterm is in the string, add a point to the applicable color. 
}
function stringImporter(array) {
    //keep the color associated with the string while importing
    Object.keys(array).forEach(function (element) {
        console.log(element);
    });
}
function searchTermHolder(id, string) {
    //keep the color associated with the word from string while importing???
    if (string == "AARDVARK") {
        console.log(string);
        var flutter_1 = object[id].col;
        Object.keys(flutter_1).forEach(function (color) {
            console.log(flutter_1[color]);
            console.log(color);
        });
    }
}
////This big ole blob is accessing all the green color counts in each word array
Object.keys(object).forEach(function (element) {
    //console.log(element);
    var colormakerholder = (object[element]);
    //console.log(colormakerholder["col"].G);
    searchTermHolder(element, colormakerholder.id);
    stringImporter(colorpool);
});
console.log(Object.keys(object).length);
console.log("something happened");

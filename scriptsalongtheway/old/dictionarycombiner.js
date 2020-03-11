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
//The name of the file is exactly what's wrong with your brain. 
//It should be dictionaryupdater
//Make a function that loops the dictionary and UPDATES based on
//the colorpool data. 
// function dictionaryUpdater(str, string){
//     var temp = string;
//     var count = (temp.match(/is/g) || []).length;
//     console.log(count);
// }
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
function stringImporter(array) {
    //keep the color associated with the string while importing
    Object.keys(array).forEach(function (element) {
        //This prints out U B W G R
        //console.log(element);
        //meaning you should be able to iterate through the five colors here
        //checking for matches in the color of the test.json dumped from the 
        //set data with cardloader script. Yeesh. 
        //You're taking a break here because you think that there may be some
        //way to separate this out in a class or something. Classes seem like
        //a thing I might use to build a thing. Hang on. 
    });
}
function searchTermHolder(id, string) {
    //keep the color associated with the word from string while importing???
    if (string == "AIR") {
        console.log(string);
        var flutter_1 = object[id].col;
        Object.keys(flutter_1).forEach(function (color) {
            console.log(flutter_1[color]);
            console.log(color);
            var babystring = color.toString();
            console.log(babystring);
            console.log(occurrences("AIR", colorpool.U, 0).toString());
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
console.log(occurrences("AIR", colorpool.U, 0));
console.log(colorpool.U);
console.log(Object.keys(object).length);
console.log("something happened");

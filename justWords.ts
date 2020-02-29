import fs from 'fs';
import colorpool from './data/alltheflave.json';
//import scrabble dictionary
const file = fs.readFileSync('./data/collins.txt','utf8');
//const sqlite3 = require('sqlite3').verbose();

//function to check for word matches in test.json
function colorchecker(checkingthisword){
    let colors = {U:0,B:0,W:0,R:0,G:0};
    Object.keys(colorpool).forEach(color => {
        colors[color] += occurrences(colorpool[color], checkingthisword, 0);
    });
    return colors;
}
//function that counts matches of a string within a larger string
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
//this splits my dictionary into entries based on new line
let dicto = file.split(/\r\n|\r|\n/);
let newDicto = [];
Object.keys(dicto).forEach(word => {
    let entry = {[dicto[word]]: colorchecker(" " + dicto[word] + " ")};
    newDicto.push(entry);

});
fs.writeFile("data/COLOREDCOLLINS.json", JSON.stringify(newDicto), function(err) {
    if (err) {
        console.log(err);
    }
});






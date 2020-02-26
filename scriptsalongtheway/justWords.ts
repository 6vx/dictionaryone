import fs from 'fs';
import colorpool from './data/test.json';
import { prototype } from 'module';
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
let superDicto = [];
class Dictomain {
    name: string;
    colors: object;
    definitions: object;
    synonyms: object;
}
class MyClass {
    getName() {
      return this.constructor.name;
    }
  }
Object.keys(dicto).forEach(word => {
    let entry = new Dictomain();
    entry.wordword = dicto[word];
    entry.colors = colorchecker(dicto[word]);
    superDicto.push(entry);
});

Object.keys(dicto).forEach(word => {
    let entry = {[dicto[word]]: colorchecker(dicto[word])};
    newDicto.push(entry);

});

//A whole bunch of sanity checking below. 
Object.keys(newDicto).forEach(word => {
    if(dicto[word] == "AETHER"){
        console.log("Found.");
        console.log(dicto[word]);
    }
    if(Object.keys(newDicto[word]).toString() == "AETHER"){
        console.log("Double found?");
        console.log(newDicto[word]);
    }
});







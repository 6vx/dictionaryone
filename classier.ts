import fs from 'fs';
import colorpool from './data/test.json';
import da from './data/DA.json';
const file = fs.readFileSync('./data/collins.txt','utf8');
let dicto = file.split(/\r\n|\r|\n/);
let backupDicto = []


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

function printWord(word){
    console.log(word);
    console.log(da[word]);
    if(da[word] == undefined){
        console.log("Not colouring this?");
    } else {
    da[word].COLORS = colorchecker(word);
    console.log(da[word].SYNONYMS);
    }
}

Object.keys(dicto).forEach(element => {
    printWord(dicto[element].toString());
});

//K you know how to add to and remove from and move around things
//This is now a theoretical problem more than a technical one
//how do you want to organize your data and how do you want to add to samples

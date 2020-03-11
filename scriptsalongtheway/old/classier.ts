import fs from 'fs';
import colorpool from './data/test.json';
import da from './data/DA.json';
const file = fs.readFileSync('./data/collins.txt','utf8');
let dicto = file.split(/\r\n|\r|\n/);
let backupDicto = [];


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


function printWord(WORD){
    let entry = {
        WORD,
        DATA : {
            SYNONYMS: [],
            ANTONYMS: [],
            MEANINGS: {},
            COLORS: {U:0,B:0,G:0,W:0,R:0},
        }        
    }
    if(da[WORD] != undefined){
    entry.DATA.SYNONYMS = da[WORD].SYNONYMS;
    entry.DATA.ANTONYMS = da[WORD].ANTONYMS;
    entry.DATA.MEANINGS = da[WORD].MEANINGS;
    };
    
    backupDicto.push(entry);
    //Query Any Specific Data Here
    // console.log(entry.DATA.COLORS.U);
}

Object.keys(dicto).forEach(element => {
    printWord(dicto[element]);
});


Object.keys(backupDicto).forEach(element => {
        //console.log(backupDicto[element]);
        if(backupDicto[element].word == "AETHER"){
            console.log("Found aether");
        }
    });

fs.writeFile("data/backupDicto.json", JSON.stringify(backupDicto), function(err) {
    if (err) {
        console.log(err);
    }
});


//K you know how to add to and remove from and move around things
//This is now a theoretical problem more than a technical one
//how do you want to organize your data and how do you want to add to samples

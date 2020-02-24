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

//Everything I've done so far has convinced me towards this route.
//I want to shape everything precisely and save it as one object. 

//pseudocoding this thing once through top to bottom. glhfev.

//import both your data sets, COLORPOOL and OLDDICTIONARY
import * as olddictionary from './data/DA.json';
import * as colorpool from './data/test.json';
//shape the word exactly the way you want it abstractly
//for Each WORD in OLDDICTIONARY, create WORDOBJECT in NEWDICTIONARY
let newDictionary = [];
function colorchecker(checkingthisword){
    let colors = {U:0,B:0,W:0,R:0,G:0};
    Object.keys(colorpool).forEach(color => {
        colors[color] += occurrences(colorpool[color], checkingthisword, 0);
    });
    return colors;
}

Object.keys(olddictionary).forEach(key => {
    let newEntry = { 
            id: key,
            dat: olddictionary[key],
            col: colorchecker(key)
        }
    // Object.keys(colorpool).forEach(color => {
    //     newEntry.col[color] = occurrences(colorpool[color], key, 0);
    // })
    
    newDictionary.push(newEntry); 
})
//for Each WORD in COLORPOOL.(COLOR) add 1 to NEWDICTIONARY[WORD].U
console.log(newDictionary[0].col.U);




//Save file and log completion of script. 
const fs = require('fs');
fs.writeFile("data/newDictionary.json", JSON.stringify(newDictionary), function(err) {
    if (err) {
        console.log(err);
    }
});
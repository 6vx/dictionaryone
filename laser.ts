//I just got a taste for making objects out of functions out of a for loop and I'm MAD WITH POWER
//So I think I can do this all better than beforeglobal.fetch = require('node-fetch');
import * as olddictionary from './data/DA.json';
import * as colorpool from './data/test.json';

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

function colorChecker(samplematter){
    let colors = {U:0,B:0,W:0,R:0,G:0};
    Object.keys(colors).forEach(color => {  
        colors[color] += occurrences(colorpool[color], samplematter, 0);
    });
    return colors;
}

function returnPoints(word, color){
    //this gets me the zeroes I expected
    return olddictionary[word].COLORS[color];

}

Object.keys(olddictionary).forEach(word => {
    olddictionary[word].COLORS = colorChecker(word);
    

});

let sampleEntry = olddictionary["AIR"];
// entry.COLOR = colors;
//console.log(olddictionary["AA"[0]].MEANINGS);
console.log(sampleEntry);
console.log(olddictionary["ARENA"]);

//can i access based on specific criteria?
Object.keys(olddictionary).forEach(word => {
    Object.keys(olddictionary[word].COLORS).forEach(color => {
        if(returnPoints(word, color) !== 0){
            console.log(word);
            console.log(returnPoints(word, color));
        }
})});
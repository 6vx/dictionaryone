import fs from 'fs';
import colorpool from './data/test.json';
//import scrabble dictionary
const file = fs.readFileSync('./data/collins.txt','utf8');
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

//this proves the dictionary has been updated and my sample data is loaded
//console.log(dicto[1453]);console.log(newDicto[1453]);console.log(colorpool.U);
//console.log(Object.keys(newDicto[1453]));
//console.log(Object.keys(Object.keys(newDicto[1453])));

//Well that took way longer to achieve than I really expected
//but I feel a lot more comfortable twisting all these things up now
//I can build an enormous array of color information, and then use this

//I assume it'll take longer to run on a more massive data set. Lookin' forward to finding out :D




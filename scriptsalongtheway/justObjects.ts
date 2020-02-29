import fs from 'fs';
import * as COLORED from './data/COLOREDCOLLINS.json'
let ultradicto = [];
let colorsortarray = [];
let saturationcount = 0;
let wordcheckarray = [];

Object.keys(COLORED).forEach(entry => {
    Object.keys(COLORED[entry]).forEach(word => {
        //console.log(word);//this is the actual word as a string
        ultradicto[word] = COLORED[entry][word];        
        if(word == "GEM"){
            wordcheckarray.push({word: word, color: COLORED[entry][word]});
        };
        //This pulls out a specific type of entry
        //It looks for words that are colored, and that have a dominant color among those colors
        let tempsum = 0;
        Object.keys(COLORED[entry][word]).forEach(color => {
            tempsum += COLORED[entry][word][color];
        });
        Object.keys(COLORED[entry][word]).forEach(color => {
            //adjusting these numbers lets you search for more frequency or more colored wordage
            if ((word.length >= 10) && (COLORED[entry][word][color]) >= 1 && (COLORED[entry][word][color]) >= (tempsum/1)) {
                colorsortarray.push({word: word, color: color, amount: COLORED[entry][word][color]});
            }
        });
        if (tempsum > 0){saturationcount+=1;};

    });
});

console.log(colorsortarray);
console.log("The Dictionary is " + ((saturationcount / ultradicto.length) + "% saturated."));
console.log(wordcheckarray);
fs.writeFile("data/COLOREDCOLLINSv2.json", JSON.stringify(ultradicto), function(err) {
    if (err) {
        console.log(err);
    }
});
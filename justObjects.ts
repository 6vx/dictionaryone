import fs from 'fs';

import * as COLORED from './data/COLOREDCOLLINS.json'
let ultradicto = [];
let colorsortarray = [];


Object.keys(COLORED).forEach(entry => {
    Object.keys(COLORED[entry]).forEach(word => {
        //console.log(word);//this is the actual word as a string
        ultradicto[word] = COLORED[entry][word];
        
        //This pulls out a specific type of entry
        //It looks for words that are colored, and that have a dominant color among those colors
        let tempsum = 0;
        Object.keys(COLORED[entry][word]).forEach(color => {
            tempsum += COLORED[entry][word][color];
        });
        Object.keys(COLORED[entry][word]).forEach(color => {
            //adjusting these numbers lets you search for more frequency or more colored wordage
            if ((COLORED[entry][word].length >= 6) && (COLORED[entry][word][color]) >= 10 && (COLORED[entry][word][color]) >= (tempsum/4)) {
                colorsortarray.push({word: word, color: color, amount: COLORED[entry][word][color]});
            }
        });
    });
});

console.log(colorsortarray);

fs.writeFile("data/COLOREDCOLLINSv2.json", JSON.stringify(ultradicto), function(err) {
    if (err) {
        console.log(err);
    }
});

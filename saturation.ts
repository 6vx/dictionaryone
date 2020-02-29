import fs from 'fs';
import * as COLORED from './data/COLOREDCOLLINSv2.json';
// import * as WORDDATA from './data/DA.json';
let saturated = [];

// console.log(WORDDATA["AA"].SYNONYMS);
// Object.keys(WORDDATA).forEach(word => {
//     if(WORDDATA[word].SYNONYMS != undefined){
//         console.log(word + " " + WORDDATA[word].SYNONYMS);
//     }
// });

Object.keys(COLORED).forEach(entry => {
    let tempsum = 0;
    Object.keys(COLORED[entry]).forEach(word => {
        //console.log(word);//this is the actual word as a string
        Object.keys(COLORED[entry][word]).forEach(color => {
            tempsum += COLORED[entry][word][color];
        });
        // console.log(tempsum);
        if (tempsum >= 1){
            saturated.push(word);
        };

    });
});


fs.writeFile("data/saturated.json", JSON.stringify(saturated), function(err) {
    if (err) {
        console.log(err);
    }
});
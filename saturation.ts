import fs from 'fs';
import * as COLORED from './data/COLOREDCOLLINSv2.json';
//import * as WORDDATA from './data/DA.json';
//let coloredsample = [];

// console.log(WORDDATA["AA"].SYNONYMS);
// Object.keys(WORDDATA).forEach(word => {
//     if(WORDDATA[word].SYNONYMS != undefined){
//         console.log(word + " " + WORDDATA[word].SYNONYMS);
//     }
// });

// Object.keys(COLORED).forEach(entry => {
//     let tempsum = 0;
//     Object.keys(COLORED[entry]).forEach(word => {
//         //console.log(word);//this is the actual word as a string
//         Object.keys(COLORED[entry][word]).forEach(color => {
//             tempsum += COLORED[entry][word][color];
//         });
//         // console.log(tempsum);
//         if (tempsum >= 1){
//             saturated.push(word);
//         };

//     });
// });
// let array = [];
// array.push(COLORED);

// let reformattedArray = array.map(obj => {
//     let rObj = {}
//     rObj[obj.key] = obj.value
//     return rObj
//  })
// console.log(reformattedArray);
let array = [];
array.push(COLORED);
let sample = array.slice(0, 100);

fs.writeFile("data/samplecollins.json", JSON.stringify(sample), function(err) {
    if (err) {
        console.log(err);
    }
});
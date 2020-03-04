import fs from 'fs';
import * as SAMPS from './data/samplecollins.json';
import * as WORDDATA from './data/DA.json';

let reformattedArray = [];

Object.keys(SAMPS).forEach(element => {
    Object.keys(SAMPS[element]).forEach(word => { 
        // console.log(word);
        if(WORDDATA[word] != undefined){
            console.log(word);
            // console.log(WORDDATA[word].SYNONYMS);
            WORDDATA[word].SYNONYMS.forEach(synonym => {
                console.log(synonym);
            });
        }
    });
    
});

// console.log(Object.keys(WORDDATA["AA"]));

fs.writeFile("data/synonympopper.json", JSON.stringify(reformattedArray), function(err) {
    if (err) {
        console.log(err);
    }
});
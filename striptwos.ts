import fs from 'fs';
import * as SAMPS from './data/COLOREDCOLLINSv2.json';

let twoletterwords = [];

Object.keys(SAMPS).forEach(entry => {
    console.log(SAMPS[entry]);
});

fs.writeFile("data/twoletterwords.json", JSON.stringify(twoletterwords), function(err) {
    if (err) {
        console.log(err);
    }
});
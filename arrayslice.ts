import fs from 'fs';
import * as COLORED from './data/COLOREDCOLLINSv2.json';

let array = [];
Object.keys(COLORED).forEach(entry => {
    array.push(COLORED[entry]);
});
let reformattedArray = array.slice(0,100);


fs.writeFile("data/samplecollins.json", JSON.stringify(reformattedArray), function(err) {
    if (err) {
        console.log(err);
    }
});
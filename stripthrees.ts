import fs from 'fs';
import * as SAMPS from './data/samplecollins.json';



let threeletterwords = [];



fs.writeFile("data/threeletterwords.json", JSON.stringify(threeletterwords), function(err) {
    if (err) {
        console.log(err);
    }
});
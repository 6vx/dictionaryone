import fs from 'fs';

import * as dicto from './data/COLOREDCOLLINS.json';

console.log("This should just be the whole entry: " + dicto[3088]);
console.log("This is probably the word and color array as an object: " + Object.keys(dicto[3088]));
console.log("This is a longshot, but maybe is the value for U: " + dicto[3088].U);
let colored = [];
for

fs.writeFile("data/COLORED.json", colored, function(err) {
    if (err) {
        console.log(err);
    }
});
import fs from 'fs';

const file = fs.readFileSync('./data/csw15.txt','utf8');

let dicto = file.split(/\r\n|\r|\n/);

console.log(dicto);
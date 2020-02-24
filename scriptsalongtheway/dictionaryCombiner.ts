import * as object from './data/newDictionary.json';
import * as colorpool from './data/test.json';

//The name of the file is exactly what's wrong with your brain. 
//It should be dictionaryupdater
//Make a function that loops the dictionary and UPDATES based on
//the colorpool data. 
// function dictionaryUpdater(str, string){
//     var temp = string;
//     var count = (temp.match(/is/g) || []).length;
//     console.log(count);
// }
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}



function stringImporter(array){
    //keep the color associated with the string while importing
    Object.keys(array).forEach(element => {
        //This prints out U B W G R
        //console.log(element);
        //meaning you should be able to iterate through the five colors here
        //checking for matches in the color of the test.json dumped from the 
        //set data with cardloader script. Yeesh. 
        //You're taking a break here because you think that there may be some
        //way to separate this out in a class or something. Classes seem like
        //a thing I might use to build a thing. Hang on. 
    })
}

function searchTermHolder(id, string){
    //keep the color associated with the word from string while importing???
    if(string == "AIR") {
        console.log(string);
        let flutter = object[id].col;
        Object.keys(flutter).forEach(color => {
            console.log(flutter[color]);
            console.log(color);
        });
    }

}

////This big ole blob is accessing all the green color counts in each word array
Object.keys(object).forEach(element => {
    //console.log(element);
    let colormakerholder = (object[element]);
    //console.log(colormakerholder["col"].G);
    searchTermHolder(element, colormakerholder.id);
    stringImporter(colorpool);

});  


console.log(Object.keys(object).length);
console.log("something happened");
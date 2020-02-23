import * as object from './data/newDictionary.json';
import * as colorpool from './data/test.json';


function poolChecker(string, searchTerm){
    //if the searchterm is in the string, add a point to the applicable color. 
} 

function stringImporter(array){
    //keep the color associated with the string while importing
    Object.keys(array).forEach(element => {
        console.log(element);

    })
}

function searchTermHolder(id, string){
    //keep the color associated with the word from string while importing???
    if(string == "AARDVARK") {
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

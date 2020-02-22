//Experimenting with putting together the dictionary all in one go. 
//I'm stripping the flavortext and soon the titles here so I can 
//count each instance of each word and assign color points
//psyched.


//loading my two basic samples, some dictionary words with 
//associated synonyms etc
//and some magic cards, with names and flavor text belonging to colors
import * as data from './data/DA.json';
import * as data2 from './data/M20.json';
//import * as data3 from './AllPrintings.json';

interface ColoredWord {
    word: String;
    color: {
        u: Number;
        w: Number;
        r: Number;
        b: Number;
        g: Number;
    };
    synonyms: Array<String>;
}

let colorArray = {
    "U": "blue",
    "B": "black",
    "W": "white",
    "G": "green",
    "R": "red"

};

//console.log(colorArray);
//console.log((colorArray.U).toUpperCase());

let cards = data2[0].cards;
let bigColorfulString = '';
let myDictionary = [];

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



cards.forEach(element => {
    let homeColor = element.colorIdentity;
    let homeFlavor = element.flavorText;
    let homeTitle = element.name;
    let tempString = '';
    //var str = homeFlavor;
    //console.log(typeof(homeFlavor));
    //console.log(homeTitle);
    //console.log(homeColor);
    tempString += homeTitle.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ").toUpperCase();

    if(typeof homeFlavor === 'string'){
        tempString += homeFlavor.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ").toUpperCase();
        //bigColorfulString = bigColorfulString + ' ' + homeFlavor;
    }  
    
    homeColor.forEach(element => {
        if(element == 'U'){
            colorArray.U += (" " + tempString + " ");
        }
        if(element == 'B'){
            colorArray.B += (" " + tempString + " ");
        }
        if(element == 'G'){
            colorArray.G += (" " + tempString + " ");
        }
        if(element == 'R'){
            colorArray.R += (" " + tempString + " ");
        }
        if(element == 'W'){
            colorArray.W += (" " + tempString + " ");
        } 
    });
    
          
});

//console.log(colorArray);

Object.keys(data).forEach(element => {
    // if(element.length == 5){  
    //         console.log(element);
    //         //console.log(data[element]);  
    //         if(colorArray.U.search(element) == -1){
    //             console.log(element + " is not in there.")
    //         } else {
    //             console.log(" apply a point.");
    //         }
    // }
    
    let temp = colorArray.U;
    let count = (temp.match(" " + element + " ") || []).length;
    if(count >= 1){
        console.log(element);
        console.log(count);
    }
    
    
    if(occurrences(colorArray.U, element, false) >= 1){
        console.log("Point Assigned.");
    };

});



console.log(myDictionary);

//console.log(Object.keys(data3));
//console.log(bigColorfulString);
//console.log(JSON.stringify(data.AA));


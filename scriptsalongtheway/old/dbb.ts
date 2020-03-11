import * as data from './DA.json';
import * as data2 from './M20.json';

//console.log(Object.keys(data));

//this gets the keys! THE KEYS! FOR THEM DICTIONARY ENTRIES!
Object.keys(data).forEach(element => {
    if(element.length == 2){  
            console.log(element);
            console.log(data[element]);  
    }
});

Object.keys(data2[0].cards).forEach(element => {
    //This line delivers the card number itself
    //console.log(element);
    //This line delivers the contents of any one card
    //console.log(data2[0].cards[element]);
    //this delivers the keys from within the object that is any one card
    //console.log(Object.keys(data2[0].cards[element]));
    //These lines deliver each card's color profile and flavortext
    console.log((data2[0].cards[element]).colorIdentity);
    if((data2[0].cards[element]).colorIdentity == 'W'){
        console.log((data2[0].cards[element]).flavorText);
    }

});
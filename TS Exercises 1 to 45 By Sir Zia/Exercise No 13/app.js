"use strict";
//Exercise no 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favourite_transport = ["bike", "car", "plane", "train"];
const statement = "i would like to own a ";
for (let i = 0; i < favourite_transport.length; i++) {
    console.log(statement + favourite_transport[i]);
}

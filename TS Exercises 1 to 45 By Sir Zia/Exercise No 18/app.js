"use strict";
//Exercise No 18
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ['skardu', 'malam jabba', 'kashmir', 'manshera', 'lahore'];
//• Print your array in its original order.
console.log(`original order : ${locations}`);
//• Print your array in alphabetical order without modifying the actual list.
let alphabetical_order = [...locations].sort();
console.log(`alphabetical order : ${alphabetical_order}`);
console.log(`original order : ${locations} `);
//• Print your array in reverse alphabetical order without changing the order of the original list.
let reverse_alpha_order = [...locations].sort().reverse();
console.log(`reverse_alpha_order : ${reverse_alpha_order}`);
console.log(`original order : ${locations} `);
//• Reverse the order of your list. Print the array to show that its order has changed.
let reverse_order = [...locations].reverse();
console.log(`resverse order : ${reverse_order}`);
console.log(`original order : ${locations}`);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(...locations.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(...locations.sort().reverse());

"use strict";
/* Exercise No 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
let country = "pakistan";
//• Tests for equality and inequality with strings
console.log("i predict true ", country === "pakistan");
console.log("i predict False ", country !== "pakistan");
//• Tests using the lower case function
console.log("i predict true ", country.toLowerCase() === "pakistan");
//• Tests using the Upper case function
console.log("i predict true", country.toUpperCase() === "PAKISTAN");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x = 8;
let y = 4;
console.log("i predict False ", x === y);
console.log("i predict true ", x !== y);
console.log("i predict true ", x > y);
console.log("i predict False ", x < y);
console.log("i predict true ", x >= y);
console.log("i predict False ", x <= y);
//• Tests using "and" and "or" operators.
let cond1 = true;
let cond2 = false;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
//• Test whether an item is in a array
//• Test whether an item is not in a array 
let fullName = ["hammad", "huzaifa", "bilal", "moiz"];
console.log(fullName.includes("huzaifa"));
console.log(fullName.includes("hamza"));

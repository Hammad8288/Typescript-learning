//Ecercise NO 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Mr.john";
//print in UpperCase
console.log(personName.toUpperCase());
//print in LowerCase
console.log(personName.toLowerCase());
//print in TitleCase
console.log(personName.split(".").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join("."));

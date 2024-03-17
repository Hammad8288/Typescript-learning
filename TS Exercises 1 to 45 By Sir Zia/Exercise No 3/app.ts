//Ecercise NO 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName:String = "Mr.john" 

//print in UpperCase
console.log(personName.toUpperCase()) ;

//print in LowerCase
console.log(personName.toLowerCase()) ;

//print in TitleCase
console.log(personName.split(".").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(".") );


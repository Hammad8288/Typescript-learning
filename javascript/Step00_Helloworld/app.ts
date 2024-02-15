let message = "hello world" ; 
console.log(message) ;

let a = "hammAd ahmED"

console.log(a.toLowerCase())
console.log(a.toUpperCase())

// console.log("Slicing", a.slice(0,5))
// console.log("charat", a.charAt(0))7

let titleCase = a.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ") ;
console.log(titleCase) ;
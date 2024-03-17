//Exercise No 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface person {
    name : string ,
    age  : number ,
    follow : boolean ,
}
  
let bigBrother : person = {
    name : "hammad Ahmed" ,
    age : 24 ,
    follow : true ,
} 
console.log(bigBrother) ;


let User : person = {
    name : "mubashir ahmed" ,
    age : 22 ,
    follow : false ,
}

console.log(User) ;

//Exercise No 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner

let Guest_name:string [] = ["Huzaifa","Bilal","Moiz"] ;
let message = ("im inviting three people on dinner tonight and you and invited.") ;

for(let i=0; i<Guest_name.length; i++){
    console.log(`Hello Mr.${Guest_name[i]} ! ${message}`)
}


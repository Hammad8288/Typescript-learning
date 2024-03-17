//Exercise no 17

let Guest_name:string [] = ["Huzaifa","Bilal","Moiz"]

for(let i=0; i<Guest_name.length; i++){
    console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n") ;
}


let absent_guest:string = ("Moiz") ;
let new_guest:string = ("Hamza") ;

Guest_name[2] = new_guest ;

for(let i=0; i<Guest_name.length; i++){
console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n") ;
}

console.log(`Due to Some Personal Reason Mr ${absent_guest} will not come in our party.`) 
console.log("\nhello everyone i have a good news for you guys.I just found a bigger dinner table so i will invite three more guest in our party.")

Guest_name.unshift("Daniyal Nagori") ;
Guest_name.splice(2,0,"Imran Khan") ;
Guest_name.push("Ali") ;

for(let i=0; i<Guest_name.length; i++){
console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n") ;
}

console.log("\nSorry we can not arrange big table, Only Two peoples will be invited.") ;

while(Guest_name.length > 2 ) {
    let removed_guest = Guest_name.pop();
    console.log(`Sorry ${removed_guest}, You are not invited for Dinner.`)   
}

for (let i = 0; i<Guest_name.length; i++) {
    console.log(`Dear ` + Guest_name[i] + ` you are still invited`) ;
}

Guest_name.splice(0, 2);
console.log(Guest_name);

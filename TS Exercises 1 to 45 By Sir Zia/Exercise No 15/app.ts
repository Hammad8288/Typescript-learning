// //Exercise No 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite


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
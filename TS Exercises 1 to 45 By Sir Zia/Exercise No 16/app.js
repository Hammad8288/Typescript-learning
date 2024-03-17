// //Exercise No 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var Guest_name = ["Huzaifa", "Bilal", "Moiz"];
// for(let i=0; i<Guest_name.length; i++){
//     console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n") ;
// }
var absent_guest = ("Moiz");
var new_guest = ("Hamza");
Guest_name[2] = new_guest;
for (var i = 0; i < Guest_name.length; i++) {
    console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n");
}
console.log("Due to Some Personal Reason Mr ".concat(absent_guest, " will not come in our party."));
console.log("\nhello everyone i have a good news for you guys.I just found a bigger dinner table so i will invite three more guest in our party.");
//• Add one new guest to the beginning of your array.
Guest_name.unshift("Daniyal Nagori");
//• Add one new guest to the middle of your array. 
Guest_name.splice(2, 0, "Imran Khan");
//add one new guest to the end of your list
Guest_name.push("Ali");
for (var i = 0; i < Guest_name.length; i++) {
    console.log("Dear \n Mr." + Guest_name[i] + " You are cordially invited to dinner at my place. It would be an honor to have your presence. \n \n Thank you \n \n Best Regrards \n \n Hammad Ahmed \n \n");
}

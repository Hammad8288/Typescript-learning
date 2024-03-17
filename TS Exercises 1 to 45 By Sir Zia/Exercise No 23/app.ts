/*Exercise No 23
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car:string = 'Vigo';

//Test 1
console.log("Is car == 'Vigo'? I predict True.") ;
console.log(car == 'Vigo') ;

//Test 2
console.log("Is car === 'Vigo'? I predict True.") ;
console.log(car === 'Vigo') ;

//Test 3
console.log("Is car != 'ford'?  I predict True. ")
console.log(car != 'ford') ;

//Test 4
console.log("Is car !== 'Honda'?  I predict True. ")
console.log(car !== 'Honda') ;

//Test 5
console.log("Is car.touppercase =='VIGO'? I predict True.")
console.log(car.toUpperCase() == 'VIGO') ;

//Test 6
console.log("Is car =='VIGO'? I predict False.")
console.log(car == 'VIGO') ;

//Test 7
console.log("Is car === 'ford'?  I predict False. ")
console.log(car === 'ford') ;

//Test 8
console.log("Is car == 'train'?  I predict False. ")
console.log(car == 'train') ;

//Test 9
console.log("Is car === 'VIGO'? I predict False.") ;
console.log(car === 'VIGO') ;

//Test 10
console.log("Is car.tolowerCase =='VIGO'? I predict True.")
console.log(car.toLowerCase() == 'VIGO') ;

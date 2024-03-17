//Exercise No 36
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size:string = 'large' , message:string = 'I love TypeScript.'){
    console.log(`the size of shirt is ${size} and message is ${message}`) ;
}
  //for large
    make_shirt();
  //for medium
    make_shirt('medium') ;
  //for small
    make_shirt('small' , 'i love programming');



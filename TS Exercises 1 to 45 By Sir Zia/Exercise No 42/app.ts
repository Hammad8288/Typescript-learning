//Exercise No 42
/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

let magicians : string[] = ['Harry Houdini','Criss Angel','David Blaine','Derren Brown','Dynamo'] ;

    function show_magicians(magicians:string[]){
        for (let magic of magicians) 
        console.log(magic)
    }


    function make_great(magicians:string[]){
        for(let i = 0; i < magicians.length; i++){
            magicians[i] = "The Great " + magicians[i] ;
        }
    }

   




    make_great(magicians) ;

    show_magicians(magicians) ;
    

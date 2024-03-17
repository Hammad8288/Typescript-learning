//Exercise No 43
/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

let magicians : string[] = ['Harry Houdini','Criss Angel','David Blaine','Derren Brown','Dynamo'] ;

    function show_magicians(magicians:string[]){
        for (let magic of magicians) 
        console.log(magic)
    }


    function make_great(magician:string[]){
        let updated_magicians:string[] = []
        for(let i = 0; i < magician.length; i++){
            updated_magicians.push("The Great " + magician[i])    ;
        }
        return updated_magicians
    }

    let copyArray = make_great(magicians) ;
    
    show_magicians(magicians) ;
    show_magicians(copyArray) ;
    
    

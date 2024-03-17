//Exercise No 41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magicians : string[] = ['Harry Houdini','Criss Angel','David Blaine','Derren Brown','Dynamo'] ;

    function show_magicians(magicians:string[]){
        for (let magic of magicians)
        console.log(magic);
    }

    show_magicians(magicians) ;
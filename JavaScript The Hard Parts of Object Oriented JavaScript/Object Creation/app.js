/*
// let's suppose we're building a quiz game with user

 SOME OF OUR USER 

    Name : Phil
    Score : 4 
    
    Name : Julia
    Score : 5

    Functionality 
    ~ Ability to increase score
    
1. To Store this data in proper manner, we'll use object; 
2. or we can say we have to store this data in bundle 
*/

{
    let obj = {
        Name : Phil,
        Score : 4,
        increment : function (){
            obj.Score++
        }

    }
    obj.increment
}

// 2. Creating obj using 'Dot notation'.

{
    let obj = {}; //  Creating an empty object

    obj.name = 'shahid hashmi';
    obj.score = 4;
    obj.increment = function(){
        obj.score++
    }

    // This is also a way to create a object
}


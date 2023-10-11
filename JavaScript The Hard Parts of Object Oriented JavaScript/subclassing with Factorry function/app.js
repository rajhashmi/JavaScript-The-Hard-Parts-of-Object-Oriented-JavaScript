//  till now we are just accesing a propery or a method from it prototype chain, we are not inhariting, let's dig in

function userCreater(name,score){
    const newUser = Object.create(userFunction);
    newUser.name = name;
    newUser.score = score;
    return newUser
}
const userFunction = {
    sayName : function(){
        console.log(this.name);
    },
    showScore : function(){
        console.log(this.score);
    }
} 
let user1 = userCreater('shahid', 8);

//  as we already see this factory function, now I want to create a paidUser with some extra features and also want this object as well but my paid won't access to this let see


function paidNewUser(paidName,paidScore,accountBalance){
    const paidUser = userCreater(paidName,paidScore); // now I call this function, it's mean it's return a object but there is catch, which is the paidUser __proto__ is reference to userFunction, we want this but not now because first it should check the paidFunction prototype and then userCreater prototype, now we will first replace it's __proto__ reference to paidFunction using setProtoypeOf

    Object.setPrototypeOf(paidUser,paidFunction); // we are replacing userFunction to paidFunction;
    paidUser.accountBalance = accountBalance; // we are adding property
    return paidUser
}
const paidFunction = {
    increseBalacne: function(){
        this.accountBalance++
    }
}

Object.setPrototypeOf(paidFunction, userFunction); // setting prototype to userFunciton

const paidUser1 = paidNewUser("hashmi",6,14);

paidUser1.increseBalacne()

class createUser{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    getUser(){
        console.log(this.name)
    }

}

class paidUserCreator extends createUser {
    constructor(paidUserName,paidUserScore,accountBalance){
        super(paidUserName,paidUserScore)
        this.accountBalance = accountBalance
    }
    getBalnace(){
        console.log(this.accountBalance)
    }
}


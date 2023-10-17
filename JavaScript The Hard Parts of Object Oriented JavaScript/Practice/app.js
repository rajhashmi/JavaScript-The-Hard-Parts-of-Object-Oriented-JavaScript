{
    const obj = {
        firstName: "shahid",
        lastName: "Hashmi",
        fullNmae: function(){
            return `${this.firstName} ${this.lastName}`
        }
    }
    console.log(obj.fullNmae())
}
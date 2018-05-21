var square = (x) => x * x

console.log(square(9))

var user = {
    name: "Eze",
    sayHi: () => {
        console.log(arguments)
        console.log(`hi, I'm ${this.user}`)
    },
    sayHiAlt(){
        console.log(arguments)
        console.log(`hi, I'm ${this.name}`)
    }
}

user.sayHi()
user.sayHiAlt(1,2,3)
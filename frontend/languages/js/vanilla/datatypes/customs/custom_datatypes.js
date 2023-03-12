// Here we are making a new datatype with the help of "new keyword"
// So we can give variables to the constructor
// And we can also declare methods of variables outside the constructor
// If you are using the constructor you have to give the "this" keyword

class fruits{
    constructor(a, b){
        this.fruit1 = a
        this.fruit2 = b
    }

    eat_fruits(){
        console.log(`eat ${this.fruit1} every morning`)
    }
}

class flowers{
    flower1 = "sunflower"
    flower2 = "roses"
}

var new_fruit = new fruits("orange", "grapes")
var new_flower = new flowers()
console.log(new_fruit.fruit1)
console.log(new_fruit)
console.log(new_flower.flower1)

new_fruit.eat_fruits()
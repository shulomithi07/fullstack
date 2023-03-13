interface Mailable{
    send(email:string):boolean
    queue(email:string):boolean
}


interface ExtraProperties extends Mailable{
    later(email:string, after:number):void
}


let mail;

class Human{
    eyes:number
    ears:number
    constructor(){
        this.eyes
        this.ears
    }
}

// We're using super() to say to the code that the parent also has constructor
// So first execute the parent constructor and come to the child
class Girl extends Human{
    cute: boolean
    constructor(){
        super()
        this.cute
    }
}

let shiny = new Girl()
shiny.cute = true
shiny.eyes = 2

console.log(shiny)
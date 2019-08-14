//practice funictions
// Alex.Prince-Mobbs 13/08/2016

const line = () =>{
    console.log("----------------------------------------------------------------".toLowerCase())
}

const reverseString = (s) =>{
    return s.split("").reverse().join("")
}

console.log("hello")
console.log(reverseString("hello"))

line()

const addThreeNumbers = (num1, num2, num3) =>{
    console.log("adding nummbers ...")
    return num1 + num2 + num3
}

console.log(addThreeNumbers(10,20,30))

line()

const dispalyName = (name) =>{
    console.log(` ${name}`)
} 

dispalyName("Tom")

line ()

const dispalyGreeting = (name) =>{
    console.log ("Hello") + dispalyName("Edith")
}

dispalyGreeting()

line()

let coffeeIsGrinding = false

const pressCoffeeBeans = () =>{
    if (coffeeIsGrinding) {
        console.log("Stopping the grind")
        coffeeIsGrinding = false
    }else {
        console.log("Grinding is about to start")
        coffeeIsGrinding = true
    }
}

pressCoffeeBeans()

pressCoffeeBeans()

line()

const addUp = (num1, num2) => {
    return num1 + num2
}

addUp(7,3)
console.log(addUp(2,5))
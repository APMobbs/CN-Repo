// pratice on if statments
// Alex. Prince-Mobb 13/08/2019

let weather = "life"

if (weather == "sunny"){
    console.log("it not raining. YET")
}else if (weather == "rain"){
    console.log("it's raining. as per usual")
}else {
    console.log("it could be raining. again")
}

console.log("-----------".toLowerCase())

let random = Math.floor(Math.random()*55)
console.log("my age is " + random)

let age = random

if (age >= 18){
    console.log("YOU MAY PASS. and buy a drink")
}else if (age < 18){
    console.log("YOU SHALL NOT PASS")
}else {
    console.log("there appears to be a mistake")
}

// dodgy stans niteclub
// Female < 25 = free
// Female > 35 = £150
// Male < 25 = £10
// Male > 35 = £150
// other = £15

console.log("-----------".toLowerCase())

let gender = "female"
console.log("i am " + gender)
console.log("my age is " + random)


if (gender = "female" && age < 25 && age > 18){
    console.log("entry: free")
}else if (gender = "female" && age > 35){
    console.log("entry: £150")
}else if (gender = "male" && age < 25 && age > 18){
    console.log("entry: £10")
}else if (gender = "male" && age > 35){
    console.log("entry: £150")
}else if (gender = "male" && age > 18){
    console.log("entry: no entry")
}else if (gender = "female" && age > 18){
    console.log("entry: no entry")
}else {
    console.log("entry: £150")
}

console.log("-----------".toLowerCase())

let day = "Saturday"

if (day == "Saturday" || day == "Saturday"){
    console.log("it's the weekend")
}else {
    console.log("When's the` weekend")
}

console.log("-----------".toLowerCase())


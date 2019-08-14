let num = Math.floor(Math.random()*10000)

if (num % 3 === 0){
    console.log(num + " fizz")
}else if (num % 5 === 0){
    console.log(num + " buzz")
}else if (num % 3 === 0 || num % 5 === 0){
    console.log(num + " fizzbuzz")
}else {
    console.log(num + " not divisible by 3 or 5")
}
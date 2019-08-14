let num = Math.floor(Math.random()*55)

if (num % 3 === 0 || num % 5 === 0){
    console.log(num + " is divisible by 3 or 5")
}else {
    console.log(num + " not divisible by 3 or 5")
}
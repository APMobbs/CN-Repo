let birthDay = new Date (1983,10,28)
let today = Date.now()
let nextBirthDay = (2019,10,28)

console.log(birthDay.getTime())
console.log(today)
let diff = today - birthDay.getTime()
console.log(diff)
let dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24))
console.log(dayDiff)

let newDiff = today - nextBirthDay.getTime()
let newDayDiff = newDiff / (1000 * 60 * 60 * 24)
console.log(`it is ${newDayDiff} till your birthday`)


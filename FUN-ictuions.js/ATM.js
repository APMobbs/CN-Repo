//ATM
// Alex.Prince-Mobbs

const line = () =>{
    console.log("----------------------------------------------------------------".toLowerCase())
}

let pin = 6776

const enterPin = (sumbitedPin) =>{
    if (pin == sumbitedPin){
        console.log("correct pin")
    }else if (pin !== sumbitedPin) {
        console.log("incorrect pin")
    }
}

enterPin(6776)

line()

let accountBalance = 500670

const cashWithdrawal = (amount) => {
    console.log(`attempting to withdraw ${amount} from account you account`)
    if (amount < accountBalance){
        console.log(`${amount} is available to withdraw`)
    }else if (amount > accountBalance){
        console.log(`sorry that amount is to high there is only ${accountBalance} in your account`)
    }
}

cashWithdrawal(300)

line()

const pinAndWithdrawal = (sumbitedPin, amount) => {
    if (pin == sumbitedPin && amount < accountBalance){
        console.log(`correct pin, ${amount} is available to withdraw`)
    }else if (pin !== sumbitedPin && amount < accountBalance){
        console.log(`incorrect pin`)
    }else if (pin !== sumbitedPin && amount > accountBalance){
        console.log(`incorrect pin`)
    }else if (pin == sumbitedPin && amount > accountBalance){
        console.log(`correct pin, sorry that amount is to high there is only ${accountBalance} in your account`)
    }
}

console.log("please enter pin and the amount you would like to withdraw")

pinAndWithdrawal(6776, 100000000)



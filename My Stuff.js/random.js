let allClasses = ["Artificer","Barbarian","Bard","Blood Hunter","Cleric","Dragon Knight","Druid","Fighter","Monk","Magus","Paladin","Pugilist","Ranger","Rouge","Spiritualist","Sorcerer","Titan","Warden","Warlock","Wizard"]

let officalClass = ["Barbarian","Bard","Blood Hunter","Cleric","Dragon Knight","Druid","Fighter","Monk","Magus","Paladin","Pugilist","Ranger","Rouge","Spiritualist","Sorcerer","Titan","Warden","Warlock","Wizard"]

let homebrewClass = ["Artificer","Blood Hunter","Dragon Knight","Druid","Magus","Pugilist","Spiritualist","Titan","Warden"]

const pickRandom = (i) =>{
    return Math.floor(Math.random()*i)
}

const returnName = (allClasses) =>{
    let randomNumber = pickRandom(allClasses.length)
    let pickedName = allClasses[randomNumber]
    allClasses.splice(randomNumber,1)
    return pickedName
}



console.log("Player 1 " + returnName(allClasses))
console.log("Player 2 " + returnName(allClasses))
console.log("Player 3 " + returnName(allClasses))
console.log("Player 4 " + returnName(allClasses))
let fname = "Ayush"
let lname = "Rai"

let fullName = fname + " " + lname  // Not a good practice

let sentence = `My full name is ${fname} ${lname}`

console.log(sentence)

const gameName = new String('AyushGG-gamer-pro')

console.log(gameName.__proto__);    // shows as obj but empty
console.log(gameName[2])

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

let newString = gameName.substring(0,4) // cannot give negative values
let anotherNewString = gameName.slice(0,4)  // can use negative values
// let anotherNewString = gameName.slice(-8,4)

console.log(newString)
console.log(anotherNewString)

let StringOne = "    Ayush    "
let StringTwo = StringOne.trim()

console.log(StringOne)
console.log(StringTwo)

const url = "https://ayushrai.com/profile/ayush%20rai"

console.log(url.replace("%20", "-"))
console.log(url.includes("%20"))

console.log(gameName.split('-'))
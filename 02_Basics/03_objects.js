//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Rai",
    [mySym]: "mykey1",      // correct way of writing symbols else will act as string in typeof
    age: 19,
    email: "ayush@google.com",
    location: "Lucknow",
    isLoggedin: "true",
    LastloginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])      //will act as a symbol and not as a string
// console.log(typeof JsUser[mySym])      //will act as a symbol and not as a string

// Object.freeze(JsUser)       //No updation now as JsUser object is freezed !

JsUser.email = "ayush@chatgpt.com"

// console.log(JsUser)

JsUser.greeting = function greeting(){
    console.log("Hello JS User !")
}

JsUser.greetingTwo = function greetingTwo(){
    console.log(`Hello JS User ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
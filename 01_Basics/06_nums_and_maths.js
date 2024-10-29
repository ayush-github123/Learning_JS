const score = 666
console.log(score)      //gives only output !

const balance = new Number(500.0022)
console.log(balance)    //gives datatype also

// console.log(balance.toString().length)      //converts to string and then prints its length
// console.log(balance.toFixed(2))             //prints number till two digit only after decimal

console.log(balance.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString())      //puts comma in b/w -- US standard
// console.log(hundreds.toLocaleString('en-IN')) // INDIAN Standard

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


//++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math.PI)
// console.log(Math.abs(-5))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(5.9))
// console.log(Math.sqrt(25))
// console.log(Math.pow(25, 2))


console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 100
const max = 300

console.log(Math.random() * (max - min + 1) + min)      // random values b/w min and max



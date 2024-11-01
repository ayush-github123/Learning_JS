const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
const newNums = []

// myNumers.forEach( (num) => {
//     newNums.push(num+10)
// })

const newNums2 = myNumers.map( (nums) => (nums*10)).map( (nums) => (nums+5)).filter( (nums) => (nums>30))

// console.log(newNums)
console.log(newNums2)


// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);
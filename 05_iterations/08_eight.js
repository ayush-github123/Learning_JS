const myNum = [1, 2, 3, 4, 5, 6]

// const val = myNum.reduce( function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);         //factorial 
//     return acc*currval
// },  1)                                   //if initial value not set then it will take the first value of the array


const val = myNum.reduce( (acc, currval) => (acc+currval))

// console.log(val);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(total);

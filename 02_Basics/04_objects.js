const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ayush Rai"
tinderUser.isLoggedin = false

// console.log(tinderUser)

tinderUser.info = {
    name: "Animesh Rai",
    id: "1234abcd",
    isLoggedin: true
}

// console.log(tinderUser.info)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const objInarray = [
    {
        id: "123abc",
        name: "Shivam"
    },
    {
        id: "1234abcd",
        name: "Shrey"
    },
    {
        id: "12345abcde",
        name: "Rita"
    }
]

// console.log(objInarray[1].name)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.keys(tinderUser.info));
// console.log(Object.values(tinderUser.info));
// console.log(Object.entries(tinderUser.info));

// console.log(tinderUser.hasOwnProperty("isLoggedin"))     tells whether present or not !

const course = {
    course: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor } = course              //destructuring of objects

console.log(instructor);




/*

JSON DATA --

{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Slavko",
        "last": "Busche"
      },
      "location": {
        "street": {
          "number": 5874,
          "name": "Mozartstraße"
        },
        "city": "Lübben (Spreewald)",
        "state": "Thüringen",
        "country": "Germany",
        "postcode": 17489,
        "coordinates": {
          "latitude": "-47.2802",
          "longitude": "-103.4422"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "slavko.busche@example.com",
      "login": {
        "uuid": "d179a8f1-1cd7-47a0-84c4-b76d73b48303",
        "username": "smallfish737",
        "password": "coventry",
        "salt": "fWZDBOdV",
        "md5": "563057cc415d211f78a7ea1e3fb55058",
        "sha1": "6f758362f5ee1dd3d6707dd3e51f4779e72a23ac",
        "sha256": "72b5c741a9c8f9634f8772a743dfb6c8afc4ec224d9b9b721e487d466a0a4a68"
      },
      "dob": {
        "date": "1972-05-06T08:32:11.896Z",
        "age": 52
      },
      "registered": {
        "date": "2010-07-20T01:23:45.852Z",
        "age": 14
      },
      "phone": "0417-2520227",
      "cell": "0175-5512626",
      "id": {
        "name": "SVNR",
        "value": "48 060572 B 246"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "DE"
    }
  ],
  "info": {
    "seed": "26a74efd9bd989a5",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

*/

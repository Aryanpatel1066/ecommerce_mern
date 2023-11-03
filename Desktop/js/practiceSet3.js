// // 1Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

// // Your ES6 code here

// const formatArray =str=>`The array has ${items.length} items, and the first item is "${str[0]}", and the last item is "${str[str.length-1]}"`
// const items = ['apple', 'banana', 'orange']
// const message = formatArray(items)
// console.log(message)
// // The array has 3 items, and the first item is "apple", and the last item is "orange".

// // 2 Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.


// // Your ES6 code here

// const product = {
//     name: 'Socks',
//     price: 249,
//     inStock: true,
//   }
//   const formatProduct = (item)=> `${item.name} costs INR ${item.price} and is in stock`
  
//   const message2 = formatProduct(product)
//   console.log(message2)
 

//   // 3Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

//   // Your ES6 code here

// const findPerson = (obj,person)=>obj.name == person;

// console.log(

//     findPerson(
//       [
//         { name: 'Ail', age: 25 },
//         { name: 'Ail', age: 25 },
//       ],
//       'hh',
//     ),
//   )

// 4  Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.


// Your ES6 code here

// const pickFirstAndSecond = ([arr1])=>({first:arr1,second:arr2,third:arr3})

// console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// // {first: 'orange', second: 'banana'}

// console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// // {first: 'red', second: 'blue'}

//5Convert the following code to ES6+ syntax with minimum number of characters.

const startsWithA=str=>str.charAt(0)==='A'

  

console.log(startsWithA('Akshita'))
// true
console.log(startsWithA('Jeena'))
// false

// 9 Write an ES6 function to return the second element of the given array by adding “Hello” before it.

// Your ES6 code here
 
const sayHello =([first,second]) =>`Hello ${second} `


console.log(sayHello(['Akshay', 'Sweta', 'Prerana', 'Vinay']))
// Hello Sweta

console.log(sayHello(['Kanika', 'Rakesh', 'Prerana', 'Puja']))
// Hello Rakesh

// 14 Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

// Your ES6 code here

const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
   console.log(getAddress(userData))
  // {postalCode: '12134', city: 'Germany'}

  
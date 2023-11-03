//  1)   Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).


//  const isEligibleToVote = age => age >=18 ? console.log("Eligible to vote") : console.log("Not eligible to vote");
// console.log(isEligibleToVote(20))  
// console.log(isEligibleToVote(18))  
// console.log(isEligibleToVote(17)) 

//2) Write a function that takes two numbers as input and determines which one is greater.

//  const isGreater = (num1,num2) => {num1 > num2 ? console.log(`${num1} is greater then ${num2}`): console.log(`${num2} is greater than ${num1}`)}
// console.log(isGreater(2, 5))  
// console.log(isGreater(10, 5))  

// 3 Write a function that takes a number as input and determines if it is positive or negative.

// Your ES6 code here
// const checkNum = (num)=> num>0 ? console.log("positive number") :console.log("Negative Number");
// console.log(checkNum(9))  
// console.log(checkNum(-8))  
// console.log(checkNum(22))  

//4 check wheather number is even or odd

//  const isEvenOdd = num => num%2==0 ?console.log("Even Numbee") : console.log("Odd Number");
// console.log(isEvenOdd(5))  
// console.log(isEvenOdd(8))  
// console.log(isEvenOdd(10)) 

//5 Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

//  6 Write a function that takes a string as input and determines if it is longer than 5 characters.

// function checkLength (str){
//     str.length>5?console.log("more than 5 character"): console.log("less than 5 characte");
// }

// console.log(checkLength('Programming'))  
// console.log(checkLength('Jeep'))  

//7  Write a function that takes a number as input and determines if it is between 1 and 10.

// const isBetweenOneAndTen = num => num<=10?true:false;

// console.log(isBetweenOneAndTen(5)) 
// console.log(isBetweenOneAndTen(11)) 

//8 Write a function that takes a string as input and determines if it contains the word "hello".

//9 Write a function that takes a number as input and determines if it is a multiple of 3.

// Your ES6 code here
// const isMultipleOfThree = num =>num%3 == 0 ? true:false;
// console.log(isMultipleOfThree(5)) 
// console.log(isMultipleOfThree(9)) 

//10Write a function which takes in a number as input and returns it after multiplying by 10.


// Your ES6 code here
// const multiplyByTen= num =>num*10;
// console.log(multiplyByTen(20)) 
// console.log(multiplyByTen(40)) 

//11 Console individual values of the product object using object destructuring.

const product = {
    title: 'iPhone',
    price: 5999,
    description: 'The iPhone is a smartphone developed by Apple',
  }
  const {title,price,description}=product;
   
  console.log(title) // iPhone
  console.log(price) // 5999
  console.log(description) // The iPhone is a smartphone developed by Apple

//12 Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book ={
    title:"The Goal",
    author:"swami vivek",
    pages:30
};
// Your ES6 code here

const getBookDetails = ({pages}) => pages>100 ? true:false;
console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below

// 13 Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const personNeog = {
    name:"amit",
    age:16,
   occupation:"devloper"
}

// Your ES6 code here
 const changeOccupation = (person,newOccupation) =>{
    return person.occupation=newOccupation;
 }
 console.log(personNeog);
 changeOccupation(personNeog,"front-end-devloper");
 console.log(personNeog);

 // 14 Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const arr=[1,2,3];
const [a,b,c]=arr;
console.log(a);
console.log(b);
console.log(c);

// 15 Convert the given function into ES6 with least amount of characters.

const defaultParamsFunc=(a,b,c=4)=>a*b*c
console.log(defaultParamsFunc(3, 1)) // 12
console.log(defaultParamsFunc(3, 10)) // 120
  console.log(defaultParamsFunc(3, 1)) // 12
  console.log(defaultParamsFunc(3, 10)) // 120
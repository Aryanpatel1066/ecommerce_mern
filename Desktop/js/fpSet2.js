// console.log("connected")
// 1) Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
  ];
  
  // Your code here
  const peopleName = obj =>obj.map((obj)=>obj.name);
  const names = peopleName(people);
  console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']


// 2 Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.
 

const numbers2 = [1, 2, 3, 4];
// Your code here
const func = number=>numbers2.map((number)=>number*5);
const multiplyByFive=func(numbers2)
console.log(multiplyByFive); // Output: [5, 10, 15, 20]

//3 Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

// Your code here
const func2 = obj =>obj.map((employee)=>`'Hi ${employee.name} we are glad to haave you as a ${employee.dept}'`)
const greetEmployeeMessages = func2(employeeData);
console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']


// 4 Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
];

// Your code here
const getBookTitles = bookObj => bookObj.map(({title})=>title)
const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']


//5) Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here

const func5 = studArr => studArr.filter((stud)=>stud[0]=="A")
const studentNames = func5(studentName);
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//6Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)


const bollywoodMovies4 = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

// Your code here
  //  const getBestOldBollywoodMovies = movies =>movies.filter((movie)=>movie.rating>8 && movie.year<1990);

const objName = obj =>obj.name;
objName.map(bollywoodMovies4)
    
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies4);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']
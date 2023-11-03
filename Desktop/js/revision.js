// how to make call back function

 const nameOddOrEven = (name,even,odd) => name.lenght % 2 == 0 ? even():odd();

 let result = nameOddOrEven("aryan",()=>console.log("my name is divisible"),()=>console.log("not divisible name"))

 // how to work settime out let's check it 

 setTimeout(() => console.log("A"), 0);
setTimeout(() => console.log("C"), 0);
setTimeout(() => console.log("B"), 0);
 

// let language = document.querySelector(".heading");
// setInterval(() => {
    
//  setTimeout(() => {
//     language.innerText="Css3"
// }, 1000);
// setTimeout(() => {
//     language.innerText="Bootstrap4"
// }, 2000);
// setTimeout(() => {
//     language.innerText="Java Script"
// }, 3000);setTimeout(() => {
//     language.innerText="React Js"
// }, 4000);
//  setT
// }, 4000);
// let body = document.querySelector("body");
//  console.log(body);
// let heading = document.createElement('h1');
// heading.classList.add="dkd";
//  heading.innerText="hello world";
//  body.appendChild(heading);
// setInterval(() => {
    

//  setTimeout(() => {
//     heading.innerText="html"
//  }, 1000);
//  setTimeout(() => {
//     heading.innerText="css"
//  }, 2000);
//  setTimeout(() => {
//     heading.innerText="js"
//  }, 3000);

// }, 3000);

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 3000);
    });
  }

//   fakeFetch("padopatel",true)
//   .then((data)=>{
//     console.log(`succsessfully:${data}`)
//   })
//   .catch((err)=>{
//    console.log(`oops! some thing went wrong ${err}`)
//   })  
// console.log("let's check wheather it is working or not")

const serverResponse= msg =>{
  fakeFetch(msg)
  .then((Response)=>Response.length);
}
     serverResponse("hello")
.then((data)=>console.log(data))
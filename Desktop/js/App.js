console.log("hello world");

// map function

// let num = [1,2,3,4,5];
// let result = num.map(item=>{
//     return item;
// })
// console.log(result);

// const  data = [
//     {name:"aryan",age:16},
//     {name:"xyz",age:9}
// ];
// let store = data.map(item=>{
//     return item.name;
// })
// console.log(store);


// // filter function 
// let arr4 = [10,2,3,55];


// let result = arr4.filter((el)=>{
//     return el % 2 == 0;
// });
// console.log(result)
// const person =[
//     {name:"pado",surname:"patel"},
//     {name:"jimit",surname:"morya"},
//     {name:"xyz",surname:"patel"},
//     {name:"fd",surname:"ambani"}
// ];
// let Info = person.filter(({surname})=>{
//     return surname == "patel";
// }) 
//  console.log(Info)

// let arr = [10,20,30];
// let sumArr = arr.reduce((total,arr)=>(total+arr))
// console.log(sumArr)

const arr = [10,20,30];

// find total sum       
// let result = arr.reduce((result,el)=>{
//     return result+el;
// });
// console.log(result);
 
// find the squre
// let squre=arr.map((item)=>{
//     return item*item;
// });
// console.log(squre)

// let avg = result/arr.length;
// console.log(avg)

// const doubleAndReturnArgs = (arr,...args)=>[
// ...arr,
// ...args.map((c)=>c*2),
// ];

// const mergeObjects=(arr1,arr2)=>({
//     ...obj1,...obj2
// });


// ******** practice dom manipulation 

// let result = document.getElementById("para");
// console.log(result)

// let names = document.getElementsByClassName("name");
 
// for(let i = 0;i<names.length;i++){
//     console.log(names[i])
// }

// let tags= document.getElementsByTagName("div");
// console.log(tags)

// let heading = document.querySelector("h1");
// console.log(heading);
// heading.style.color="red";
// heading.style.backgroundColor="yellow";

// let h2 = document.querySelector("h2")
// h2.innerText="hellop ";

//** practice on event js */

let buttons=document.querySelector(".btnSubmit");
console.log(buttons);
const sayhello=()=>console.log("hello to you by devloper")

// for(element of buttons){
//     console.log(element)
// }

//  button.addEventListener("click",sayhello)
// btn.addEventListener("click",()=>{
//     console.log("button click by pada the web devloper")
// })

let inp = document.querySelector('input');
console.log(inp);

inp.addEventListener("keyup",function(event){
    // console.log("key wass presssed");
    // console.log("key=",event.key);
    console.log("code=",event.code);
    if(event.code=="ArrowUp"){
        console.log("character forwad");
    }
    else if(event.code=="ArrowDown"){
        console.log("character backword")
    }
    else if(event.code=="ArrowLeft"){
        console.log("charcater left");
    }
    else if (event.code=="ArrowRight"){
console.log("character right move")
    }
})
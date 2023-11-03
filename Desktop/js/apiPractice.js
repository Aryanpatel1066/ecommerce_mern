// console.log("connected file")

// const url="https://catfact.ninja/fact";

// async function  getFacts() {
//   try{
//      let response =await fetch(url);
//     let data = await response.json()
//     console.log(data.fact)
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// setTimeout(() => {
//    getFacts()
// }, 1000);
 
 
 const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
 
  // let getJock  = ()=>{
  //   fetch(api)
  //   .then((data)=>data.json())
  //   .then((item)=>console.log(item.joke))
  // }
  // getJock()

  async function jokila(){
   try{
    let response = await fetch(api);
    console.log(response)
    let data = await response.json();
    console.log(data.joke);
   }
   catch(er){
    console.error(er);
   }
  }
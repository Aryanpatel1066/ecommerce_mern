//1) create input type and button

let input = document.createElement('input');
let button= document.createElement('button');
let body = document.querySelector('body')
input.value="enter value whatver want yo do";
button.innerText="submit";
body.append(input);
body.append(button);
// button.classList.add('button')
button.setAttribute('class','button')
button.style.backgroundColor="blue";
button.style.color="white"
const button = document.querySelector('button');
const element = document.querySelector('#selectme');
const body = document.querySelector('body');

// console.log(button, element)

button.addEventListener('click', ()=>{
    // element.style = "background:dodgerblue";
    element.classList.toggle('dodgorblue')
})

button.addEventListener('click', ()=>{
    // element.style = "background:dodgerblue";
    body.classList.toggle('dark')
})
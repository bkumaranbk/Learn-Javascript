// const balls = document.getElementsByClassName('ball');
const body = document.querySelector('body');

const balls = document.querySelectorAll('.ball');

balls.forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
})



let age = 23;
let name = "kumaran"
console.log('Your age is ' +age);
console.log(`Your age is ${age}`);
console.log(`Hi ${name} Your age is ${age}`);
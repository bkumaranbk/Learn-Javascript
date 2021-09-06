// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissor = document.querySelector("#scissor");

// console.log(rock);
// console.log(paper);
// console.log(scissor);

function logName(Name = "Default", age = 23){
    // console.log("kumaran");
    console.log(Name + " You are " + age);
}

// Never Misspell the function Keyword
// A function can have multiple parameters
// You can set default values for the parameters
// Any variable you difine inside a function's body is local to that function
logName()

console.log()

function add(a = 0, b = 0) {
    return a + b
}

const result = add()

console.log(result)

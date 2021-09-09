console.log("Hello world!!");

const arr = [1,2,3,4]
console.log(arr[2]);

const [one, two, three, four, five] = arr; //ES6 Destructuring
console.log(three);
console.log(five);

function getScores(){
    return [90,100];
}

let [x,y,z] = getScores();
console.log(x);
console.log(y);
console.log(z);

const obj = {
    fname: "Balachandran Kumaran",
    email: "bkumaran98@gmail.com",
    age: 23
}

console.log(obj.name);


let {fname, age, email, dum} = obj;
console.log(age);
console.log(email);
console.log(dum);


let person = {
    firstname: "Balachandran Kumaran",
    lastname: "Kumaran",
    age1: 23,
    middlename:"bk"
}

let {firstname, lastname, age1, middlename = ""} = person;
console.log(firstname);
console.log(lastname);
console.log(age1);
console.log(middlename);
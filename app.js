// JS Promises
// Promises is a JS Object
// ------------
// JS Promises Have 3-Stages
// Pending
// Fullfilled / Resolve
// Rejected

// Promise
let concert = true;
let attendConsert = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (concert) {
      resolve("BOB ATTEND THE CONCERT");
    } else {
      reject("BOB FAILED TO ATTEND THE CONCERT");
    }
  }, 3000);
});

console.log(attendConsert);
console.log(attendConsert);

// then and catch is a method
// attendConsert.then((data) => console.log(data));

// attendConsert.catch((error) => console.log(error);

attendConsert.then((data) => console.log(data)).catch((error) => console.log(error));
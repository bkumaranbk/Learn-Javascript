const balls = document.getElementsByClassName('ball');
const body = document.querySelector('body');


const arr = [1,2,3,4,5,6]

// arr.push(6);
// console.log(arr);

// console.log(arr.length);
// const added = arr.push(3)
// const added = arr.unshift(3)
// const added = arr.includes(3)
// console.log(added);

// arr.shift()
// arr.splice(2,1) //remove specific index 
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);;
// }


arr.forEach((element, index) => {
    // console.log('iteration');
    console.log(element, index);
});


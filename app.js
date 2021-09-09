// //Noraml function
// function add(x,y){
//     return x+y;
// }

// console.log(add(2,4));


// //Function Variable declaration
// let add1 = function(x,y){
//     return x+y;
// }
// console.log(add1(12,4));


// //Arrow Function with varable declaration
// let add2 = (x,y) => x + y;
// console.log(add2(13,4));

// //When use multiple return use { }
// let add3 = (x,y) => {
//     console.log(x);
//     return x + y;
// }
// console.log(add3(13,4));





const counter = {
    count: 0,
    manipulate: function(){
        return ++(this.count);
    },
    // key: this.location.href
    arrow: (x,y) => {
            return x + y; 
    },
    previous: () => {
        return --(this.count); //Arrow function doesn't have 'this' key word BUT when use "return this;" indecate window
    },


}

console.log(counter.manipulate());
console.log(counter.arrow(12,12));
console.log(counter.previous());
console.log(counter.count);
console.log(counter);

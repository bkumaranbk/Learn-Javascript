let ranks = [1,2,3];
// const newArr = ranks.map((e) => console.log(e+1));

// console.log(
//     ranks.map((e) => (e+1)));



// console.log(
//     ranks.map((e) => {
//         return (e+1)
//     } ));

// console.log(
//     ranks.map((e, index) => {
//         return (index)
//     } )); //map returns 

// console.log(
//     ranks.forEach((e) => {
//         return (e+1)
//     } )); //forEach Does not return any thing


console.log(
    ranks.map((e) => {
        if(e%2===0){
            return e
        }else{
            return "odd"
        }
    } ));
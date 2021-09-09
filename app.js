let ranks = [1,2,3,4,5,6,7];

let newMapArr = ranks.map((e) => {
        if(e%2===0){
            return e
        }
    });
console.log(newMapArr);


let newFilterArr = ranks.filter((e) => {
        if(e%2===0){
            return e
        }
    } );
console.log(newFilterArr);
// Conditional Statment if

// Checks weather the number is even or odd

const b = 0 ;

if(typeof b === 'number' && b != 0){
    if (b % 2 === 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
    
}else if(b == 0){
        console.log("0 cant be a odd number or even nuber")
}else{
        console.error("This is not a number")
}

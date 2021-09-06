const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const board =  document.querySelector("#board");

// console.log(rock);
// console.log(paper);
// console.log(scissor);

//==========================================
// const handler = (action) => {
//     console.log("You clicked " + action);
// }

// rock.addEventListener('click', () => {
//     handler('rock')
// });


// paper.addEventListener('click', () => {
//     handler('paper')
// });


// scissor.addEventListener('click', () => {
//     handler('scissor')
// });


// ========================================
// rock.addEventListener('click',(action) => {
//     console.log("You clicked " + action);
// });



// =================Final=========================
const handler = (event) => {
    // console.log(event.target.id);
    const action = event.target.id

    // if(action === 'rock'){
    //     // console.log("Rock crushes scissors");
    //     board.innerHTML = "Rock crushes scissors"
    // }else if (action === 'paper'){
    //     // console.log("Paper traps Rock");
    //     board.innerHTML = "Paper traps Rock"
    // }else if (action === 'scissor'){
    //     // console.log("Scissor cuts Paper");
    //     board.innerHTML = "Scissor cuts Paper"
    // }else{
    //     // console.log("Click somthing");
    //     board.innerHTML = "Click somthing"
    // }

    switch (action) {
        case "rock":
            board.innerHTML = "Rock crushes scissors"
            break
        case 'paper':
            board.innerHTML = "Paper traps Rock"
            break
        case 'scissor':
            board.innerHTML = "Scissor cuts paper"
            break
        default:
            board.innerHTML = "Click something"
            break
    }

}

rock.addEventListener('click',handler);
paper.addEventListener('click',handler);
scissor.addEventListener('click',handler);

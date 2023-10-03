let boxes = document.getElementsByClassName("box")
const reset = document.getElementById('reset')
let turn = "X"

// Function to change the turn
const changeTurn = ()=>{

    return turn === "X"? "0": "X";
}

// Function to check for a win
const checkWin = ()=>{
    
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach((e) =>{
        if((boxes[e[0]].innerText === boxes[e[1]].textContent) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== '')){
            document.querySelector('.game-info').innerText = boxes[e[0]].innerText + " won";
        }
    })
}

// Game Logic
Array.from(boxes).forEach(element =>{
    // let boxText = document.querySelector('.boxtext');
    element.addEventListener('click',() => {
            if(element.innerText === ''){
                element.innerText = turn
                turn = changeTurn();
                checkWin()
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }

           
        })
})

reset.addEventListener('click',function(){
    boxes.innerText = ''
})

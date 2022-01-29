const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const X_CLASS ='x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let circleTurn:any

startGame()

function startGame(){
    // circleTurn = false
    cellElements.forEach((cell) => {
        cell.addEventListener('click', handleClickEvent, {once:true})
    })
    setBoardHoverClass()
}

function handleClickEvent(e:any, ): void {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
   //Check for win
   if (checkWin) {
    console.log('winner')
   }
   //Check for Draw
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell:any, currentClass:any){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board!.classList.remove(X_CLASS)
    board!.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board!.classList.add(CIRCLE_CLASS)
    } else{
        board!.classList.add(X_CLASS)
    }
}

function checkWin(currentClass:any){
    return WINNING_COMBINATIONS.some( (combinations) => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}
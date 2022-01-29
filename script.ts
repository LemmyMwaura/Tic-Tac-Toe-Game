const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winning-message-element')
const winningMessage = document.querySelector('[data-winning-message-text]')
const overlay = document.querySelector('.overlay')
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
   if (checkWin(currentClass)) {
     endGame(false)
   } else if(isDraw()) {
       endGame(true)
   } else {
    swapTurns()
    setBoardHoverClass()
   }
}

function endGame(draw:any){
    if(draw){
        winningMessage!.textContent = 'Draw!'
    } else {
        winningMessage!.textContent = `${circleTurn ? "O's" : "X's" } wins!`
    }

    winningMessageElement!.classList.add('show')
    overlay!.classList.add('show')
}

function isDraw(){
    return [...cellElements].every( (cell) =>{
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
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
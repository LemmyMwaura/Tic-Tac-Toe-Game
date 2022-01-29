"use strict";
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const X_CLASS = 'x';
const CIRCLE_CLASS = "circle";
let circleTurn;
startGame();
function startGame() {
    // circleTurn = false
    cellElements.forEach((cell) => {
        cell.addEventListener('click', handleClickEvent, { once: true });
    });
    setBoardHoverClass();
}
function handleClickEvent(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    //Check for win
    //Check for Draw
    swapTurns();
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}
function swapTurns() {
    circleTurn = !circleTurn;
}
function setBoardHoverClass() {
    board.classList.remove(CIRCLE_CLASS);
    board.classList.remove(X_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    }
    else {
        board.classList.add(X_CLASS);
    }
}

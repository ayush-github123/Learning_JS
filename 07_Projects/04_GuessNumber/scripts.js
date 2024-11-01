// let count = 10
// let atremaining = document.querySelector('#attemptsCount')
// atremaining.innerHTML = `${count}`

let random = Math.floor((Math.random()*100)+1)
console.log(random)
const guessButton = document.getElementById('guessButton')
const result = document.querySelector('.result')
const userInput = document.querySelector('#guessInput');
const p = document.getElementById('newGame')
let playGame = true
const prevGuess = document.querySelector('.prevGuess')


let previousGuesses = []

function validateGuess(input){
    if(input === '' ||  isNaN(input)){
        result.innerHTML = "Invalid input"
        return false
    }
    else{
        if(input>100 || input<= 0)
        {
            result.innerHTML = `${input} is out of range`
            return false
        }
    }
    return true
}


function checkGuess(input){
    if(input === random)
        {
            result.style.color = 'green'
            result.innerHTML = `You guessed it correct, The number is : ${random}`
            guessButton.disabled = true

        }
    else if(input < random)
    {
        
            result.innerHTML = `Your guess is below the number`
            previousGuess(input)
    }
    else if(input > random){
        result.innerHTML = `Your guess is above the number`
        previousGuess(input)
    }
    else{
        result.style.color = 'red'
        result.innerHTML = `Invalid input`
    }
    
}


function previousGuess(input)
{
    previousGuesses.push(input)
    prevGuess.innerHTML += `${input} `
    prevGuess.style.color = 'blue'
        
}


function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    guessButton.disabled = true
    result.innerHTML = "You've run out of attempts! The number was: " + random;
    p.setAttribute('class', 'btns')
    p.innerHTML = "Start a New Game"
    newgame()
}


function newgame(){
    p.addEventListener('click', (e) => {
        e.preventDefault()
        count = 10
        previousGuesses = []
        prevGuess.innerHTML = ``
        result.innerHTML = ``
        random = Math.floor(Math.random() * 100) + 1
        guessButton.disabled = false
        userInput.removeAttribute('disabled')
        result.innerHTML = ''
    })
}





let count = 10; // Move count outside of the event listener
const attemptRemain = document.querySelector('#attemptsCount');
attemptRemain.innerHTML = count; // Display initial attempts

guessButton.addEventListener('click', (e) => {
    e.preventDefault();
    const input = parseInt(document.querySelector('#guessInput').value);
    
    if (validateGuess(input)) {
        checkGuess(input);
        count--; // Decrement attempts after a valid guess
        attemptRemain.innerHTML = count; // Update remaining attempts
        
        if (count === 0) {
            endgame()
        }
    }
});
// Declaration of buttons and elements for easy manipulation.
const resetButt = document.querySelector(".btn--new");
const rollDice1 = document.querySelector("#roll1");
const rollDice2 = document.querySelector("#roll2");
const holdTurn1 = document.querySelector("#hold1");
const holdTurn2 = document.querySelector("#hold2");
const dicePng = document.querySelector("img");
const curr1 = document.querySelector("#current--0");
const curr2 = document.querySelector("#current--1");
const total1 = document.querySelector("#score--0");
const total2 = document.querySelector("#score--1");
const activePlayer1 = document.querySelector(".player--0");
const activePlayer2 = document.querySelector(".player--1");

// Alert message stating the rules of the Game
window.alert("Welcome to the Dice Game. If you throw a 1, you miss your turn and the first player to reach a total score of 100 wins. Good Luck!")


// Functions for switching active player state using the add and remove classlist function to manipulate the roll and hold buttons in the HTML document.
let switchActivePlayer1 = () => {
    rollDice1.classList.add("hidden");
    rollDice2.classList.remove("hidden");
    holdTurn1.classList.add("hidden");
    holdTurn2.classList.remove("hidden");
    activePlayer1.classList.remove("player--active");
    activePlayer2.classList.add("player--active");
}
let switchActivePlayer2 = () => {
    rollDice1.classList.remove("hidden");
    rollDice2.classList.add("hidden");
    holdTurn1.classList.remove("hidden");
    holdTurn2.classList.add("hidden");
    activePlayer1.classList.add("player--active");
    activePlayer2.classList.remove("player--active");
}

// Function to reset game
let resetGame = () => {
    playerScore1 = 0;
    curr1.textContent = playerScore1;
    playerScore2 = 0;
    curr2.textContent = playerScore2;
    playerTotal1 = 0;
    total1.textContent = playerTotal1;
    playerTotal2 = 0;
    total2.textContent = playerTotal2;

    activePlayer2.classList.remove("player--active");
    activePlayer1.classList.add("player--active");
    activePlayer2.classList.remove("player--winner");
    activePlayer1.classList.remove("player--winner");
}


// Player One Script
let playerScore1 = 0;
let playerTotal1 = 0;
rollDice1.addEventListener("click", function () {
    // Generation of random number from 1 - 6.
    let diceOutcome = Number(Math.floor(Math.random() * 6) + 1);

    // Using an if else control structure to switch player1 state when outcome equals 1 or continue playing if outcome is not equals 1.
    if (diceOutcome === 1) {
        dicePng.src = "./image/dice-1.png";
        playerScore1 = 0;
        curr1.textContent = playerScore1;
        switchActivePlayer1();

    }
    else {
        playerScore1 += diceOutcome;
        curr1.textContent = playerScore1;

        // Using the if else control structure and the attribute function to change the dice display according to the random number outcome.
        if (diceOutcome === 2) {
            dicePng.src = "./image/dice-2.png";
        }
        else if (diceOutcome === 3) {
            dicePng.src = "./image/dice-3.png";
        }
        else if (diceOutcome === 4) {
            dicePng.src = "./image/dice-4.png";
        }
        else if (diceOutcome === 5) {
            dicePng.src = "./image/dice-5.png";
        }
        else {
            dicePng.src = "./image/dice-6.png";
        }
    }

    // Using the addEventListener function to add a click event to the hold button for the player 1 active state.
    holdTurn1.addEventListener("click", function () {
        playerTotal1 += playerScore1;
        total1.textContent = playerTotal1;

        playerScore1 = 0;
        curr1.textContent = playerScore1;

        // Using an if statement to decide when player1 wins the game by having a total score above 100 else switch active player.
        if (playerTotal1 >= 100) {
            activePlayer1.classList.remove("player--active");
            activePlayer1.classList.add("player--winner");
        }
        else {
            switchActivePlayer1();
        }
    })

})



// Player Two script
let playerScore2 = 0;
let playerTotal2 = 0;
rollDice2.addEventListener("click", function () {
    // Generation of random number from 1 - 6.
    let diceOutcome = Number(Math.floor(Math.random() * 6) + 1);

    // Using an if else control structure to switch player1 state when outcome equals 1 or continue playing if outcome is not equals 1.
    if (diceOutcome === 1) {
        dicePng.src = "./image/dice-1.png";
        playerScore2 = 0;
        curr2.textContent = playerScore2;
        switchActivePlayer2();

    }
    else {
        playerScore2 += diceOutcome;
        curr2.textContent = playerScore2;

        // Using the if else control structure and the attribute function to change the dice display according to the random number outcome.
        if (diceOutcome === 2) {
            dicePng.src = "./image/dice-2.png";
        }
        else if (diceOutcome === 3) {
            dicePng.src = "./image/dice-3.png";
        }
        else if (diceOutcome === 4) {
            dicePng.src = "./image/dice-4.png";
        }
        else if (diceOutcome === 5) {
            dicePng.src = "./image/dice-5.png";
        }
        else {
            dicePng.src = "./image/dice-6.png";
        }
    }

    // Using the addEventListener function to add a click event to the hold button for the player 1 active state.
    holdTurn2.addEventListener("click", function () {
        playerTotal2 += playerScore2;
        total2.textContent = playerTotal2;

        playerScore2 = 0;
        curr2.textContent = playerScore2;

        // Using an if statement to decide when player2 wins the game by having a total score above 100 else switch active player.
        if (playerTotal2 >= 100) {
            activePlayer2.classList.remove("player--active");
            activePlayer2.classList.add("player--winner");
        }
        else {
            switchActivePlayer2();
        }
    })

})


// Reset Button Script to restore everything to default state
resetButt.addEventListener("click", function () {
    dicePng.src = "./image/dice-6.png";
    switchActivePlayer2();
    resetGame();

    // Alert message stating the rules of the Game
    window.alert("Welcome to the Dice Game. If you throw a 1, you miss your turn and the first player to reach a total score of 100 wins. Good Luck!")
})

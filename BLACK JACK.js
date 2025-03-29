// Simple card game using Linera's microchains

// Game setup const players = ["Player 1", "Player 2"]; let scores = {"Player 1": 0, "Player 2": 0};

// Function to draw a card function drawCard() { return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10 }

// Game round function playRound() { let player1Card = drawCard(); let player2Card = drawCard();

console.log(`${players[0]} drew ${player1Card}`);
console.log(`${players[1]} drew ${player2Card}`);

if (player1Card > player2Card) {
scores[players[0]]++;
console.log(`${players[0]} wins this round!`);
} else if (player2Card > player1Card) {
scores[players[1]]++;
console.log(`${players[1]} wins this round!`);
} else {
console.log("It's a tie!");
}

}

// Play 5 rounds for (let i = 0; i < 5; i++) { playRound(); }

// Display final scores console.log("Final Scores:", scores); if (scores[players[0]] > scores[players[1]]) { console.log(${players[0]} wins the game!); } else if (scores[players[1]] > scores[players[0]]) { console.log(${players[1]} wins the game!); } else { console.log("The game is a tie!"); }
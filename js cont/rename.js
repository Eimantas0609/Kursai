let rock = 1;
let paper = 2;
let scissors = 3;

// Play game
function play(choices) {
	const playerChoice = choices;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
}

// Get computers choice
function getComputerChoice() {
	const rand = Math.floor(Math.random() * 3) + 1;
}

// Get game winner
function getWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		winner = "draw";
	} else if (playerChoice === "rock") {
		if (computerChoice === "paper") {
			winner = "computer";
		} else {
			winner = "player";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "scissors") {
			winner = "computer";
		} else {
			winner = "player";
		}
	} else if (playerChoice === "scissors") {
		if (computerChoice === "rock") {
			winner = "computer";
		} else {
			winner = "player";
		}
	}
}

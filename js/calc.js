const dataPlace = document.getElementById("dataPlace");
const resultPlace = document.getElementById("resultPlace");
let prevNumber;
let symbol;
let isEqualsClicked = false;
let rez = 0;

function addNumber(number) {
	if (Number(dataPlace.textContent) == 0 && dataPlace.textContent != "0.") {
		dataPlace.textContent = number;
	} else {
		dataPlace.textContent += number;
	}
}
function addDot() {
	dataPlace.textContent = dataPlace.textContent.trim() + ".";
}

function deleteNumber() {
	dataPlace.textContent = dataPlace.textContent.slice(0, -1);
	console.log(dataPlace.textContent);
	if (dataPlace.textContent.length == 0) {
		dataPlace.textContent = 0;
		resultPlace.textContent = 0;
	}
}

function mathActions(symbolParam) {
	if (prevNumber && !isEqualsClicked) {
		equals(false);
	} else {
		resultPlace.texContent = Number(dataPlace.textContent);
	}
	prevNumber = Number(dataPlace.textContent);
	symbol = symbolParam;
	dataPlace.textContent = 0;
}
function equals(clicked) {
	isEqualsClicked = clicked;
	if (symbol == "+") {
		rez = prevNumber + Number(dataPlace.textContent);
	} else if (symbol == "-") {
		rez = prevNumber - Number(dataPlace.textContent);
	} else if (symbol == "*") {
		rez = prevNumber * Number(dataPlace.textContent);
	} else if (symbol == "/") {
		rez = prevNumber / Number(dataPlace.textContent);
	} else if (symbol == "%") {
		rez = prevNumber % Number(dataPlace.textContent);
	}

	dataPlace.textContent = rez;
	resultPlace.textContent = rez;
}

function getSquareRoot() {
	if (Number(dataPlace.textContent) === 0) {
		resultPlace.textContent = Math.sqrt(Number(resultPlace.textContent));
	} else {
		dataPlace.textContent = Math.sqrt(Number(dataPlace.textContent));
	}
}
function roundNumber() {
	dataPlace.textContent = Math.round(Number(dataPlace.textContent));
}

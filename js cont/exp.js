const text = document.getElementById("text");
const lorem = document.getElementById("lorem");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let value = text;
function paverstiRaidesDidziasias() {
	console.log(input1.value.toUpperCase());
	input1.value = input1.value.toUpperCase();
}

function doesTextIncludesString() {
	console.log(lorem.textContent.includes(input1.value));
	return lorem.textContent.toLowerCase().includes(input1.value.toLowerCase());
}

function checkIfTextExistAndReplace() {
	if (doesTextIncludesString()) {
		lorem.innerHTML = lorem.textContent.replace(
			input1.value,
			input1.value.bold()
		);
	}
}
function concatText() {
	console.log(input1.value.concat("", input2.value));
}
function getTextLength() {
	console.log(input1.value.lenght(""));
}

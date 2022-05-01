let inputElement = document.getElementById("data");

let inputElementNew = document.getElementById("newData");

let a = 5;

function rezult() {
	let inputValue = Number(inputElement.value);
	console.log(inputValue);
	let inputValueNew = Number(inputElementNew.value);
	console.log(inputValueNew);
	d = a + inputValue + inputValueNew;

	console.log(d);
}
function rezultNew() {
	let inputValue = Number(inputElement.value);
	let inputValueNew = Number(inputElementNew.value);
	b = inputValue;
	c = inputValueNew;

	d = b + c;
	console.log(d);

	if (d > 10) {
		console.log("daugiau nei 10");
	} else if (d < 10) {
		console.log("maziau nei 10");
	} else {
		console.log("10");
	}
}
let message = "Labas";
let messageEnd;

if (5 < 1) {
	messageEnd = ",vakaras!";
} else {
	messageEnd = ",rytas!";
}

message += messageEnd;
console.log(message);

// nxnxnxnxnxnxnnxnxnxnxnxnx

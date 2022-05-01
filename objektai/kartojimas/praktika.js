// 1---------
let string = "labas";
let number = 24;
let boolean = false;
22222222222222222;
const dog = {
	age: 3,
	name: "Kuzia",
	color: "sweet brown",
};
const family = ["Janina", "Eimantas", "Dovydas", "Auguste", "Dziuginta"];

//  33333333333

// console.log("Hello world");

// 44444444444

// let me = "Eimantas";
// console.log(dog);

// 5555555555555

// let a = 5;
// console.log(a);

// 66666

// let b = "cat";
// function boolean() {
// 	if (b == "cat") {
// 		console.log(true);
// 	} else {
// 		console.log(b);
// 	}
// }
// boolean();

// 7777777777777777777777
// function trecias
// console.lo           fail
// g(family[2]);
// 888888888888888888

// let c = 8;
// let d = 10;
// function mukriu() {
// 	d += c;
// }
// mukriu();
// console.log(d);

// 9999999999999

// family.push("Kuzia");

// 10///////
// family.pop("Kuzia");
// console.log(family);

// ///11/////

// for (let i = 0; i <= 10; i++) console.log(i);

// 12///

// console.log(family.map((item, index) => (item = index)));

// 13+++++

const skaiciai = [1, 1, 3, 5, 8, 13, 21, 34];

let numbers = skaiciai.filter((item) => item % 2 !== 0);
console.log(numbers);

// 14////
function das(param) {
	console.log(param);
}

// 15
const newArray = [10, 24, 39, 65, 87];

// 16
function getSum(param) {
	let sum = param.reduce((previous, current) => previous + current);
	console.log(sum);
}
// 17
getSum(skaiciai);
getSum(newArray);
// 18
Object.keys(dog).map((key) => console.log(dog[key]));
// 19
console.log(Object.keys(dog));
// 20
dog.qwe = number;
dog.zxc = boolean;
Object.assign(dog, { a: number, b: boolean });
console.log(dog);
// 21
let array3 = [];
for (let i = 0; i < 5; i++) {
	array3.push(dog);
}
// 22
function displayResults() {
	console.log(array3);
}
// 23
const input = document.getElementById("input");
const array4 = [];
function displayInputValue() {
	if (!array4.includes(input.value) && input.value !== "") {
		array4.push(input.value);
		const newDuom = document.createElement("div");
		newDuom.textContent = input.value;
		displayElement.appendChild(newDuom);
	}
	console.log(array4);
}

const displayElement = document.getElementById("display");

// 24

// 25

// 26//

// 27

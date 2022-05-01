// const me = {
// 	firstName: "Eimantas",
// 	lastName: "jurenkovas",
// 	age: 49,
// 	city: "Ukmerge",
// 	childrens: ["Dovydas", "Auguste", "Dziuginta"],
// 	"key with space": "bbbbb",
// };
// console.log(me.age);

// console.log(me.firstName, me.lastName);

// console.log(me);

// console.log(me.childrens);

// console.log(me.city);

const characters = [
	{
		name: "Luke Skywalker",

		height: "172",

		mass: "77",

		eye_color: "blue",

		gender: "male",
	},

	{
		name: "Darth Vader",

		height: "202",

		mass: "136",

		eye_color: "yellow",

		gender: "male",
	},

	{
		name: "Leia Organa",

		height: "150",

		mass: "49",

		eye_color: "brown",

		gender: "female",
	},

	{
		name: "Anakin Skywalker",

		height: "188",

		mass: "84",

		eye_color: "blue",

		gender: "male",
	},
];

const tableBody = document.getElementById("table");
const keys = Object.keys(characters[0]);
// function renderTableData() {
// 	characters.map((character) => {
// 		const rowElement = document.createElement("tr");
// 		const keys = Object.keys(character);

// 		for (let key of keys) {
// 			const dataCell = document.createElement("td");
// 			dataCell.textContent = character[key];
// 			rowElement.appendChild(dataCell);
// 		}
// 		tableBody.appendChild(rowElement);
// 	});
// }

function renderTableData(array) {
	tableBody.innerHTML = "";
	array.map((character) => {
		const rowElement = document.createElement("tr");

		for (let key of keys) {
			const dataCellElement = document.createElement("td");
			dataCellElement.textContent = character[key];

			rowElement.appendChild(dataCellElement);
		}
		tableBody.appendChild(rowElement);
	});
}

// renderTableData(characters);

function getAllCharacterHeightSum() {
	return characters
		.map((character) => Number(character.height))
		.reduce((first, second) => first + second);
}
console.log(getAllCharacterHeightSum());

function getAllCharacterMassSum() {
	return characters
		.map((character) => Number(character.mass))
		.reduce((first, second) => first + second);
}
console.log(getAllCharacterMassSum());

function createNewRow() {
	const rowElement = document.createElement("tr");
	for (let key of keys) {
		const dataCellElement = document.createElement("td");
		if (key == "height") {
			dataCellElement.textContent = getAllCharacterHeightSum();
		} else if (key == "mass") {
			dataCellElement.textContent = getAllCharacterMassSum();
		}

		rowElement.appendChild(dataCellElement);
	}
	tableBody.appendChild(rowElement);
}
createNewRow();

function getAllNames() {
	console.log(characters.map((character) => character.name.split(" ")[0]));
}
getAllNames();

const allMass = characters.filter((character) => character.mass > 80);
console.log(allMass);
const allHeight = characters.filter((character) => character.height < 180);
console.log(allHeight);
const allGender = characters.filter((character) => character.gender === "male");
console.log(allGender);
const allEye = characters.filter((character) => character.eye_color == "blue");
console.log(allEye);

const maleGender = characters.some(
	(character) => character.gender === "male" && character.height > 180
);
console.log(maleGender);
const quest = characters.some(
	(character) => character.eye_color == !"brown" && character.height > 170
);

console.log(quest);

const heightUp = characters.sort(
	(first, second) => first.height - second.height
);

console.log(heightUp);

const nameAbc = characters.sort();

console.log(nameAbc);
renderTableData(characters);

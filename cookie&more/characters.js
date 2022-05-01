let characters = [
	{
		name,
		height,
		mass,
		eye_color,
		gender,
		homeworld,
	},
	// {
	// 	name: "Darth Vader",
	// 	height: "202",
	// 	mass: "136",
	// 	eye_color: "yellow",
	// 	gender: "male",
	// },
	// {
	// 	name: "Leia Organa",
	// 	height: "150",
	// 	mass: "49",
	// 	eye_color: "brown",
	// 	gender: "female",
	// },
	// {
	// 	name: "Anakin Skywalker",
	// 	height: "188",
	// 	mass: "84",
	// 	eye_color: "blue",
	// 	gender: "male",
	// },
];

const tableBody = document.getElementById("table");
const keys = Object.keys(characters[0]);

function renderTableData(array) {
	tableBody.innerHTML = "";

	array.map((character) => {
		const rowElement = document.createElement("tr");

		for (let key of keys) {
			const dataCellElement = document.createElement("td");
			if (key === "homeworld") {
				const buttonElement = document.createElement("button");
				buttonElement.textContent = "Homeworld";
				buttonElement.onclick = () => getHomeworld(character[key]);
				dataCellElement.appendChild(buttonElement);
			} else {
				dataCellElement.textContent = character[key];
			}

			rowElement.appendChild(dataCellElement);
		}

		tableBody.appendChild(rowElement);
	});

	buildTotalRow();
}

function getAllFirstNames() {
	console.log(characters.map((character) => character.name.split(" ")[0]));
}

const getCharacterPropertySum = (property) => {
	return characters.reduce((prev, current) => {
		const value =
			current && current[property] && current[property] !== "unknown"
				? Number(current[property].replace(/,/g, ""))
				: 0;

		return prev + value;
	}, 0);
};

const getCharacterNamesLengthSum = () =>
	characters.reduce((prev, current) => prev + current.name.length, 0);

function buildTotalRow() {
	const rowElement = document.createElement("tr");

	for (let key of keys) {
		const dataCellElement = document.createElement("td");
		dataCellElement.classList.add("fw-bold");

		if (key === "name") {
			dataCellElement.textContent = `Simboliu suma ${getCharacterNamesLengthSum()}`;
		}

		if (key === "height" || key === "mass") {
			dataCellElement.textContent = getCharacterPropertySum(key);
		}

		rowElement.appendChild(dataCellElement);
	}

	tableBody.appendChild(rowElement);
}

const sortByNumber = (property) =>
	renderTableData(characters.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) =>
	renderTableData(
		characters.sort((a, b) => a[property].localeCompare(b[property]))
	);

const charactersWithGreaterMassThan80 = characters.filter(
	(character) => character.mass > 80
);
const charactersWithLessHeightThan180 = characters.filter(
	(character) => character.height < 180
);
const charatersMale = characters.filter(
	(character) => character.gender === "male"
);
const charatersWithBlueEyes = characters.filter(
	(character) => character.eye_color === "blue"
);

getAllFirstNames();
// renderTableData(characters);

function addCharacter(character) {
	const nameInput = document.getElementById("name").value;
	const heightInput = document.getElementById("height").value;
	const massInput = document.getElementById("mass").value;
	const eyeColorInput = document.getElementById("eye_color").value;
	const genderInput = document.getElementById("gender").value;

	const newCharacter = {
		name: nameInput,
		height: heightInput,
		mass: massInput,
		eye_color: eyeColorInput,
		gender: genderInput,
	};

	characters.push(newCharacter);

	renderTableData(characters);
}
let fetchUrl = "https://swapi.dev/api/people/";
let previousPage;
let nextPage;

function getCharacters(url) {
	fetch(url)
		.then((response) => {
			response.json().then((data) => {
				characters = data.results;
				previousPage = data.previous;
				nextPage = data.next;
				renderTableData(characters);
			});
		})
		.catch((error) => {
			console.log("Error:", error);
		});
}

getCharacters(fetchUrl);

function getHomeworld(url) {
	fetch(url).then((response) => {
		response.json().then((data) => {
			console.log(data);
		});
	});
}

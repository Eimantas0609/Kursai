const persons = [
	{
		firstName: "Rokas",
		lastName: "Skinderis",
		age: 28,
		gender: "Male",
		hobby: "Singing",
		height: 194,
		programmingSkill: 5,
	},

	{
		firstName: "Rokas",
		lastName: "Virvicius",
		age: 27,
		gender: "Male",
		hobby: "Bassketball",
		height: 185,
		programmingSkill: 1,
	},

	{
		firstName: "Ieva",
		lastName: "Staseviciute",
		age: 33,
		gender: "Female",
		hobby: "Ride a  motorcycle",
		height: 174,
		programmingSkill: 1,
	},

	{
		firstName: "Simona",
		lastName: "Sleviene",
		age: 30,
		gender: "Female",
		hobby: "Knitting toys",
		height: 170,
		programmingSkill: 1,
	},

	{
		firstName: "Zilvinas",
		lastName: "Pusnys",
		age: 30,
		gender: "Male",
		hobby: "Napping",
		height: 175,
		programmingSkill: 2,
	},

	{
		firstName: "Eimantas",
		lastName: "Jurenkovas",
		age: 49,
		gender: "Male",
		hobby: "Fishing",
		height: 172,
		programmingSkill: 1,
	},

	{
		firstName: "Mindaugas",
		lastName: "Strakšys",
		age: 22,
		gender: "Male",
		hobby: "Skydiving",
		height: 176,
		programmingSkill: 1,
	},

	{
		firstName: "Roman",
		lastName: "Laskov",
		age: 34,
		gender: "Male",
		hobby: "Sports",
		height: 197,
		programmingSkill: 1,
	},
];
console.log(persons);
function addPerson() {
	const firstNameInput = document.getElementById("firstName").value;
	const lastNameInput = document.getElementById("lastName").value;
	const ageInput = document.getElementById("age").value;
	const genderInput = document.getElementById("gender").value;
	const hobbyInput = document.getElementById("hobby").value;
	const heightInput = document.getElementById("height").value;
	const programmingSkillInput =
		document.getElementById("programmingSkill").value;

	const newPerson = {
		firstName: firstNameInput,
		lastName: lastNameInput,
		age: ageInput,
		gender: genderInput,
		hobby: hobbyInput,
		height: heightInput,
		programmingSkill: programmingSkillInput,
	};

	persons.push(newPerson);

	formTableData(persons);
}

const allTable = document.getElementById("table");
const keys = Object.keys(persons[0]);

function formTableData(array) {
	allTable.innerHTML = "";
	array.map((person) => {
		const rowItem = document.createElement("tr");
		for (let key of keys) {
			const dataCellItem = document.createElement("td");
			dataCellItem.textContent = person[key];
			rowItem.appendChild(dataCellItem);
		}
		allTable.appendChild(rowItem);
	});
	createNewRow();
}

const topHeight = () => Math.max(...persons.map((x) => x.height));
const topAge = () => Math.max(...persons.map((x) => x.age));
const topSkill = () => Math.max(...persons.map((x) => x.programmingSkill));

console.log(topHeight());
// console.log(topAge);
// console.log(topSkill);

function createNewRow() {
	const rowItem = document.createElement("tr");
	for (let key of keys) {
		const dataCellItem = document.createElement("td");
		if (key == "height") {
			dataCellItem.textContent = topHeight();
		} else if (key == "age") {
			dataCellItem.textContent = topAge();
		} else if (key == "programmingSkill") {
			dataCellItem.textContent = topSkill();
		}
		rowItem.appendChild(dataCellItem);
	}
	allTable.appendChild(rowItem);
}
// createNewRow();

const lowAge = persons.filter((person) => person.age < 30);
// console.log(lowAge);
const upHeight = persons.filter((person) => person.height > 175);
// console.log(upHeight);
const male = persons.filter((person) => person.gender == "Male");
// console.log(male);
const female = persons.filter((person) => person.gender == "Female");
// console.log(female);
const skill = persons.filter((person) => person.programmingSkill !== 5);
// console.log(skill);

const sortByNumber = (property) =>
	formTableData(persons.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) =>
	formTableData(persons.sort((a, b) => a[property].localeCompare(b[property])));

formTableData(persons);

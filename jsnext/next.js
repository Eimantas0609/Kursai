const toDoList = document.getElementById("todo");
const doneList = document.getElementById("done");
const inputElement = document.getElementById("input");

let toDoArray = ["mazda", "saab", "audi", "bmw", "toyota"];
let doneArray = [];

toDoList.innerHTML = toDoArray.join("<br>");

function transferToDone() {
	doneArray = toDoArray.slice(0, 4);
	toDoArray = doneArray.splice(3, 2);
	console.log(updateLists());
}
function addToDo() {
	const value = inputElement.value;
	const isValueEmptyOrExisting = value == "" || toDoArray.includes(value);
	if (isValueEmptyOrExisting) {
		toDoArray.push(inputElement.value);
		inputElement.value = "";
		updateLists();
	}
}
// console.log()
function updateLists() {
	toDoList.innerHTML = "";
	doneList.innerHTML = "";
	// otherItem(toDoArray, doneArray, toDoList);
	// otherItem(doneArray, toDoArray, doneList);

	// for (let i = 0; i < from.length; i++) {
	// 	const listElement = document.createElement("li");
	// 	listElement.textContent = from[i];
	// 	listElement.onclick = () => {
	// 		to.push(from.splice(i, 1)[0]);
	// 		updateLists();
	// 	};
	// list.appendChild(listElement);
	for (let i = 0; i < toDoArray.length; i++) {
		const listElement = document.createElement("li");
		listElement.textContent = toDoArray[i];
		listElement.onclick = () => {
			doneArray.push(toDoArray.splice(i, 1)[0]);
			updateLists();
		};
		toDoList.appendChild(listElement);
		// toDoArray.innerHTML += `<div>${toDoArray[index]}</div>`;
	}
	for (let i = 0; i < doneArray.length; i++) {
		const listElement = document.createElement("li");
		listElement.textContent = doneArray[i];
		listElement.onclick = () => {
			toDoArray.push(doneArray.splice(i, 1)[0]);
			updateLists();
		};
		doneList.appendChild(listElement);
		// doneArray.innerHTML += `<div>${doneArray[index]}</div>`;
	}

	// doneList.innerHTML = doneArray.join("<br>");
	// toDoList.innerHTML = toDoArray.join("<br>");
}
updateLists();
// transferToDone();
// for (let index = 0; index < newArray.length; index++){
//    console.log(index);
//    console.log(newArray[index])
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// const wordArray = ["as", "tu", "mes", "jus", "jos"];

// const emptyArray = [];
// for (let i = 0; 1 < 10; i++) {
// 	emptyArray.push(Math.random());
// }
// console.log(emptyArray);

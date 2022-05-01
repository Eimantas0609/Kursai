const element = document.getElementById("eventTrigger");
const inputElement = document.getElementById("input");

function onClickDoSomethink() {
	element.addElementByListener("click", () => {
		onClickDoSomethink();
	});

	inputElement.addElementByListener("focus", () => {
		console.log("focus");
	});
	inputElement.addElementByListener("hover", () => {
		console.log("hover");
	});
	inputElement.addElementByListener("focus", () => {
		console.log("focus");
	});
}

const arrayMenu = [
	{
		name: "pavadinimas1",
		aprasas: "su kuom valgoma ",
	},
	{
		name: "pavadinimas2",
		aprasas: "su kuom valgoma ",
	},
	{
		name: "pavadinimas3",
		aprasas: "su kuom valgoma ",
	},
	{
		name: "pavadinimas4",
		aprasas: "su kuom valgoma ",
	},
	{
		name: "pavadinimas5",
		aprasas: "su kuom valgoma ",
	},
	{
		name: "pavadinimas6",
		aprasas: "su kuom valgoma ",
	},
];

const listElement = document.getElementById("list");

function katalogas() {
	arrayMenu.map((item) => {
		const listItem = document.createElement("li");
		listItem.textContent = item.name;

		const aprasas = document.createElement("div");
		aprasas.textContent = item.aprasas;
		aprasas.style.display = "none";
		listItem.appendChild(aprasas);

		listItem.addEventListener("mouseenter", () => {
			aprasas.style.display = "block";
		});
		listItem.addEventListener("mouseleave", () => {
			aprasas.style.display = "none";
		});
		listElement.appendChild(listItem);
	});
}
katalogas();
// --------------------
const input = document.getElementById("input");
const validationElement = document.getElementById("validation");

input.addEventListener("keyup", (event) => {
	if (event.target.value !== "Labas") {
		validationElement.textContent = "Text should be 'Labas'";
	} else {
		validationElement.textContent = "Done";
	}
});
// _______________________________________
const loginElement = document.getElementById("login");

function login() {
	document.cookie = "asdtrue";
}

if (document.cookie) {
	loginElement.style.display = "none";
}

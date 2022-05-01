const me = {
	firstName: "Eimantas",
	lastName: "Jurenkovas",
	age: 49,
	city: "Ukmerge",
	childrens: ["Dovydas", "Auguste", "Dziuginta"],
	greetMe: () => console.log(`Eimantas Jurenkovas`),
};

const moreOfMe = {
	gender: "male",
	hobby: "fishing",
	height: 172,
};

const mostOfMe = Object.assign(me, moreOfMe);

console.log(me);

let backendData = [{ name: "Eimantas", isHuman: true }];

Object.keys(mostOfMe);

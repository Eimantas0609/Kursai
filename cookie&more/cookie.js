const cookieDisplay = document.getElementById("cookieDisplay");
let cookieCount = getCookie("cookieCount") || 0;
let grandmaCount = getCookie("grandmaCount") || 0;
let factoryCount = getCookie("factoryCount") || 0;
let grandmaWorktime = 0;
let grandmaUpgrades = getCookie("grandmaUpgrades")?.split("|") || [];
cookieDisplay.textContent = cookieCount;
let grandmaInterval;

const upgradeRates = {
	grandmaUpgrade1: 1.25,
	grandmaUpgrade2: 2,
	grandmaUpgrade3: 100,
	grandmaUpgrade4: 1000,
};

function setCookie(name, value) {
	document.cookie = `${name}=${value};`;
}

function getCookie(name) {
	if (document.cookie) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);

		if (parts.length === 2) {
			return parts.pop().split(";").shift();
		}
	} else {
		return 0;
	}
}

const buyGrandma = () => {
	if (cookieCount < 50) return;

	updateCookies(-50);
	grandmaCount++;
	if (grandmaCount >= 5 && !grandmaUpgrades.includes("grandmaUpgrade1"))
		showGrandmaUpgrade("grandmaUpgrade1", 200);
	if (grandmaCount >= 100 && !grandmaUpgrades.includes("grandmaUpgrade2"))
		showGrandmaUpgrade("grandmaUpgrade2", 5000);
	if (grandmaCount >= 1000 && !grandmaUpgrades.includes("grandmaUpgrade3"))
		showGrandmaUpgrade("grandmaUpgrade3", 100000);
	if (grandmaCount >= 10000 && !grandmaUpgrades.includes("grandmaUpgrade4"))
		showGrandmaUpgrade("grandmaUpgrade4", 1000000);

	setCookie("grandmaCount", grandmaCount);
};

function showGrandmaUpgrade(id, cost) {
	const grandmaElement = document.getElementById("buyGrandma");
	if (document.getElementById(id)) return;

	let grandmaUpgrade = document.createElement("button");
	grandmaUpgrade.id = id;
	grandmaUpgrade.textContent = "Upgrade";
	grandmaUpgrade.className = "btn btn-lg btn-info";
	grandmaUpgrade.addEventListener("click", () => buyGrandmaUpgrade(id, cost));
	grandmaElement.parentNode.insertBefore(grandmaUpgrade, grandmaElement);
}

function buyGrandmaUpgrade(id, cost) {
	if (cookieCount < cost) return;

	document.getElementById(id).remove();

	grandmaUpgrades.push(id);
	setCookie("grandmaUpgrades", grandmaUpgrades.join("|"));
	updateCookies(-cost);
}

const buyGrandmaFactory = () => {
	if (cookieCount < 500 || grandmaCount < 50) return;

	updateCookies(-500);
	factoryCount++;
	setCookie("factoryCount", factoryCount);
};

function workingGrandmas() {
	grandmaInterval = setInterval(function () {
		const cookiePerSecond = getCookiePerSecond();
		grandmaWorktime += 1;
		updateCookies(cookiePerSecond);
	}, 1000);
}

function getCookiePerSecond() {
	console.log({
		grandma: getGrandmaCookiePerSecond(),
		factory: getGrandmaFactoryCookiePerSecond(),
	});
	return [
		getGrandmaCookiePerSecond(),
		getGrandmaFactoryCookiePerSecond(),
	].reduce((a, b) => a + b, 0);
}

function getGrandmaCookiePerSecond() {
	let bonusRate = grandmaUpgrades.reduce((a, b) => a * upgradeRates[b], 1);
	console.log({ bonusRate });
	let tiredGrandma = grandmaWorktime % 15 >= 10; // 0-10 dirba, 10-15 ne
	let effectiveness = tiredGrandma ? 0 : bonusRate;

	return getProductivity(0.5, effectiveness, grandmaCount);
}

function getGrandmaFactoryCookiePerSecond() {
	let bonusRate = 1;
	return getProductivity(10, bonusRate, factoryCount);
}

function getProductivity(baseCookiePerSecond, effectiveness, count) {
	return baseCookiePerSecond * effectiveness * count;
}

function updateCookies(cookieChange) {
	cookieCount = Number(cookieCount || 0) + cookieChange;
	setCookie("cookieCount", cookieCount);
	cookieDisplay.textContent = cookieCount;
}

function reset() {
	cookieCount = 0;
	grandmaCount = 0;
	factoryCount = 0;

	document.cookie = `factoryCount=0; grandmaCount=0; cookieCount=0`;
	grandmaUpgrades = [];
}

workingGrandmas();

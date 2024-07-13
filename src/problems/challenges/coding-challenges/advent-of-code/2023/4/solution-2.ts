import {readFileSync} from "fs";

const input = readFileSync("4/input.txt").toString();

function getCardID(card: string) {
	return parseInt(card.match(/\d+/)[0], 10);
}

function getWinningNumbers(card: string) {
	const firstHalf = card.split("|")[0];

	const firstHalfNumbers = firstHalf.split(" ").filter((number) => number);

	return firstHalfNumbers
		.map((number) => parseInt(number, 10))
		.filter((number) => !isNaN(number))
		.slice(1);
}

function getNumbers(card: string) {
	const secondHalf = card.split("|")[1];

	return secondHalf
		.split(" ")
		.filter((number) => number)
		.map((number) => parseInt(number, 10))
		.filter((number) => !isNaN(number));
}

function getMatches(card: string) {
	const winningNumbers = getWinningNumbers(card);
	const numbers = getNumbers(card);

	return numbers.filter((number) => winningNumbers.includes(number));
}

const cards = input.split("\n").filter((card) => card);

const obtainedCards: {[key: number]: number} = {};

function countCards() {
	let sum = 0;

	for (const cardID in obtainedCards) {
		sum += obtainedCards[cardID];
	}

	return sum;
}

for (let c = 0; c < cards.length; c++) {
	const card = cards[c];

	const id = getCardID(card);

	console.log("Checking card " + id);

	const cardsHeld = (obtainedCards[id] ??= 1);

	console.log(cardsHeld + ` copies are held`);

	const matches = getMatches(card);

	console.log("Matches:", matches);
	console.log("Number of matches: " + matches.length);

	const increase = cardsHeld;

	console.log("Increase: " + increase);

	console.log(
		"Updating card IDs from " +
			(c + 1 + 1) +
			" to " +
			(c + matches.length + 1) +
			" inclusive"
	);

	for (let i = c + 1; i <= c + matches.length && i < cards.length; i++) {
		const iteratedCard = cards[i];

		const id = getCardID(iteratedCard);

		obtainedCards[id] ??= 1;
		obtainedCards[id] += increase;
	}

	console.log(" ");
}

console.log(obtainedCards);

console.log(countCards());

import {readFileSync} from "fs";

const input = readFileSync("4/input.txt").toString();

const cards = input.split("\n").filter((card) => card);

let pointSum = 0;

for (const card of cards) {
	const split = card.split("|");

	const winningNumbers = split[0]
		.split(" ")
		.map((number) => parseInt(number))
		.filter((number) => !isNaN(number))
		.slice(1);

	const numbers = split[1]
		.split(" ")
		.map((number) => parseInt(number))
		.filter((number) => !isNaN(number));

	let worth = 0;

	for (const number of numbers) {
		if (winningNumbers.includes(number)) {
			if (worth === 0) {
				worth = 1;
			} else {
				worth *= 2;
			}
		}
	}

	pointSum += worth;
}

console.log(pointSum);

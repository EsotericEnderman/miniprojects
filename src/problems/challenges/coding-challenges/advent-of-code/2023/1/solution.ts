const digits = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
];

function getDigitValue(digit: string) {
	return digits.indexOf(digit) + 1;
}

import {readFileSync} from "fs";

const input = readFileSync("1/input.txt").toString();

const lines = input.split("\n");

// Problem

function decodeLine(line: string) {
	let sum = 0;

	characterLoop: for (let c = 0; c < line.length; c++) {
		const character = line[c];

		let value = parseInt(character, 10);
		if (!isNaN(value)) {
			sum += value * 10;
			break characterLoop;
		} else {
			for (const digit of digits) {
				const digitSlice = line.slice(c, c + digit.length);

				if (digit === digitSlice) {
					sum += getDigitValue(digit) * 10;
					break characterLoop;
				}
			}
		}
	}

	characterLoop: for (let c = line.length - 1; c >= 0; c--) {
		const character = line[c];

		let value = parseInt(character, 10);
		if (!isNaN(value)) {
			sum += value;
			break characterLoop;
		} else {
			for (const digit of digits) {
				const digitSlice = line.slice(c - digit.length + 1, c + 1);

				if (digit === digitSlice) {
					sum += getDigitValue(digit);
					break characterLoop;
				}
			}
		}
	}

	return sum;
}

let sum = 0;

for (const line of lines) {
	sum += decodeLine(line);
}

console.log(sum);

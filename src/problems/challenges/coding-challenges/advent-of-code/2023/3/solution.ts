import {readFileSync} from "fs";

const symbols = ["/", "*", "&", "+", "$", "-", "=", "%", "@", "#"];

const input = readFileSync("3/input.txt").toString();

const lines = input.split("\n").filter((line) => line);

function getEngineNumber(lineIndex: number, stringIndex: number) {
	const line = lines[lineIndex];

	let number = "";

	let isEngineNumber = false;

	while (!isNaN(parseInt(line[stringIndex]))) {
		number += line[stringIndex];

		const left = line[stringIndex - 1];
		const right = line[stringIndex + 1];
		const above = lines[lineIndex - 1]?.[stringIndex];
		const below = lines[lineIndex + 1]?.[stringIndex];

		const topLeft = lines[lineIndex - 1]?.[stringIndex - 1];
		const topRight = lines[lineIndex - 1]?.[stringIndex + 1];
		const bottomLeft = lines[lineIndex + 1]?.[stringIndex - 1];
		const bottomRight = lines[lineIndex + 1]?.[stringIndex + 1];

		let isNextToSymbol = false;

		for (const position of [
			left,
			right,
			above,
			below,
			topLeft,
			topRight,
			bottomLeft,
			bottomRight
		]) {
			if (symbols.includes(position)) {
				isNextToSymbol = true;
			}
		}

		isEngineNumber = isEngineNumber || isNextToSymbol;

		stringIndex++;
	}

	if (isEngineNumber) {
		return parseInt(number);
	} else {
		return 0;
	}
}

let sum = 0;

for (let l = 0; l < lines.length; l++) {
	const line = lines[l];

	for (let i = 0; i < line.length; i++) {
		const character = line[i];

		if (isNaN(parseInt(character))) {
			continue;
		}

		const value = getEngineNumber(l, i);

		if (!isNaN(value)) {
			sum += value;
			i += `${value}`.length;
		}
	}
}

// console.log(sum);

function getNumber(
	lineIndex: number,
	stringIndex: number
): [number, number, number, number] {
	const line = lines[lineIndex];
	const character = line?.[stringIndex];

	if (isNaN(parseInt(character))) {
		return [0, lineIndex, stringIndex + 1, stringIndex];
	}

	let number = "";

	let rightIndex = stringIndex,
		leftIndex = stringIndex;

	while (!isNaN(parseInt(line?.[leftIndex]))) {
		number = line[leftIndex] + number;
		leftIndex--;
	}

	while (!isNaN(parseInt(line?.[rightIndex + 1]))) {
		number += line[rightIndex + 1];
		rightIndex++;
	}

	const value = parseInt(number);
	return [isNaN(value) ? 0 : value, lineIndex, leftIndex + 1, rightIndex];
}

let gearRatioSum = 0;

for (let l = 0; l < lines.length; l++) {
	const line = lines[l];

	for (let i = 0; i < line.length; i++) {
		const character = line[i];

		if (character != "*") {
			continue;
		}

		let values: [number, number, number, number][] = [];

		for (const position of [
			[l, i - 1],
			[l, i + 1],
			[l - 1, i],
			[l + 1, i],

			[l - 1, i - 1],
			[l - 1, i + 1],
			[l + 1, i - 1],
			[l + 1, i + 1]
		]) {
			values.push(getNumber(position[0], position[1]));
		}

		values = values.filter((value) => value[0] !== 0);

		// Remove duplicates
		for (let a = 0; a < values.length; a++) {
			const value = values[a];

			for (let b = 0; b < values.length; b++) {
				if (b === a) {
					continue;
				}

				const checkingValue = values[b];

				if (
					checkingValue[0] === value[0] &&
					checkingValue[1] === value[1] &&
					checkingValue[2] === value[2] &&
					checkingValue[3] === value[3]
				) {
					values.splice(b, 1);
					b--;
				}
			}
		}

		if (values.length !== 2) {
			console.log(values.length);
			console.log(values);
			continue;
		}

		console.log(values[0][0] * values[1][0]);

		gearRatioSum += values[0][0] * values[1][0];
	}
}

console.log(gearRatioSum);

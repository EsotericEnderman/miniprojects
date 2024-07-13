import {readFileSync} from "fs";

const input = readFileSync("2/input.txt").toString();

const games = input.split("\n");

let sumOfPowers = 0;

for (const game of games) {
	if (!game) continue;

	let minRedCubes = 0;
	let minGreenCubes = 0;
	let minBlueCubes = 0;

	const cubesShownList = game.split(";");

	for (const cubesShown of cubesShownList) {
		// r red, g green, b blue;

		const r = parseInt(cubesShown.match(/\d+(?= red)/)?.[0]) || 0;
		const g = parseInt(cubesShown.match(/\d+(?= green)/)?.[0]) || 0;
		const b = parseInt(cubesShown.match(/\d+(?= blue)/)?.[0]) || 0;

		minRedCubes = Math.max(minRedCubes, r);
		minGreenCubes = Math.max(minGreenCubes, g);
		minBlueCubes = Math.max(minBlueCubes, b);
	}

	sumOfPowers += minRedCubes * minGreenCubes * minBlueCubes;
}

console.log(sumOfPowers);

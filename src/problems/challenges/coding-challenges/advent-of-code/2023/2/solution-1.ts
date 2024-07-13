import {readFileSync} from "fs";

const input = readFileSync("2/input.txt").toString();

const games = input.split("\n").filter((game) => game);

const redCubesNumber = 12;
const greenCubesNumber = 13;
const blueCubesNumber = 14;

let sumOfIds = 0;

function isGamePossible(game: string) {
	const cubesShownList = game.split(";");

	for (const cubesShown of cubesShownList) {
		// g green, r red, b blue

		const r = parseInt(cubesShown.match(/\d+(?= red)/)?.[0]) ?? 0;
		const g = parseInt(cubesShown.match(/\d+(?= green)/)?.[0]) ?? 0;
		const b = parseInt(cubesShown.match(/\d+(?= blue)/)?.[0]) ?? 0;

		if (r > redCubesNumber || g > greenCubesNumber || b > blueCubesNumber) {
			return false;
		}
	}

	return true;
}

for (let i = 0; i < games.length; i++) {
	const game = games[i];

	if (isGamePossible(game)) {
		sumOfIds += i + 1;
	}
}

console.log(sumOfIds);

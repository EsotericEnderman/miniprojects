import {readFileSync} from "fs";
import {latinAlphabet} from "../../../../constants/latin-alphabet.js";
import {arrayDifference} from "../../../../utility/array-utility.js";

const minimumLength = 4;

const solvedWords = [];

let words = readFileSync("data/english-words.txt")
	.toString()
	.split("\n")
	.filter((word) => word)
	.map((word) => word.toLowerCase())
	.filter((word) => word.length >= minimumLength);

const requiredLetter = "";

const optionalLetters = [];

words = words.filter((word) => word.includes(requiredLetter));

const disallowedLetters = arrayDifference(latinAlphabet, [
	...optionalLetters,
	requiredLetter
]);

words = words.filter((word) => {
	for (const letter of word) {
		if (disallowedLetters.includes(letter)) {
			return false;
		}
	}

	return true;
});

words = arrayDifference(words, solvedWords);

console.log(words);

let totalPoints = 0;

words.forEach((word) => (totalPoints += word.length));

console.log("totalPoints =", totalPoints);

import {readFileSync} from "fs";

const wordLength = 5;

const clues = {
	confirmedLetters: "*****",
	wrongPositionLetters: [],
	wrongLetters: []
};

const words = readFileSync("data/english-words.txt").toString();

let wordsList = words
	.split("\n")
	.filter((word) => word)
	.filter((word) => word.length === wordLength)
	.map((word) => word.toLowerCase());

wordsList = wordsList.filter((word) => {
	const confirmedLetters = clues.confirmedLetters;

	for (let i = 0; i < confirmedLetters.length; i++) {
		const confirmedLetter = confirmedLetters[i];

		if (confirmedLetter === "*") {
			continue;
		}

		if (word[i] !== confirmedLetter) {
			return false;
		}
	}

	return true;
});

wordsList = wordsList.filter((word) => {
	const wrongPositionLetters = clues.wrongPositionLetters;

	for (const wrongPositionLettersList of wrongPositionLetters) {
		for (let i = 0; i < wrongPositionLettersList.length; i++) {
			const wrongPositionLetter = wrongPositionLettersList[i];

			if (wrongPositionLetter === "*") {
				continue;
			}

			if (word[i] === wrongPositionLetter) {
				return false;
			}

			if (!word.includes(wrongPositionLetter)) {
				return false;
			}
		}
	}

	return true;
});

wordsList = wordsList.filter((word) => {
	for (const wrongLetter of clues.wrongLetters) {
		if (word.includes(wrongLetter)) {
			return false;
		}
	}

	return true;
});

console.log(wordsList);

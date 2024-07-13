const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray: string[] = [];

for (const letter of alphabet) alphabetArray.push(letter);

function rot13(str: string) {
	return str
		.split("")
		.map((element) => {
			const index = alphabetArray.indexOf(element);

			if (index === -1) return element;

			return alphabetArray[
				index - 13 >= 0 ? index - 13 : alphabetArray.length + (index - 13)
			];
		})
		.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));

const alphabetStr = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str: string) {
	let currentIndex = 0;

	for (let i = 0; i < alphabetStr.length; i++) {
		if (str[currentIndex] === alphabetStr[i]) {
			currentIndex++;
			continue;
		}
		if (!currentIndex) continue;
		return alphabetStr[i];
	}

	return undefined;
}

console.log(fearNotLetter("abce"));

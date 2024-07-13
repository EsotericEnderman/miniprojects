const clockNumberGuess = (num: number) => {
	let start = num;
	// 4 = start number
	if (num >= 30 || num <= 10) {
		throw new Error(`Number must be between 10 and 30.`);
	}

	num += 4; // 1 + 2
	num += 11; // 3
	num -= 17; // 4
	num += 4; // 5
	num -= start + 2; // 6
	num %= 12;
	console.log(num);
};

// 0 = 12 (mod 12)

for (let i = 11; i < 29; i++) {
	clockNumberGuess(i);
}

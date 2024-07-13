const map = {
	1: "I",
	4: "IV",
	5: "V",
	6: "VI",
	9: "IX",
	10: "X",
	40: "XL",
	50: "L",
	90: "XC",
	100: "C",
	400: "CD",
	500: "D",
	900: "CM",
	1000: "M"
};

function convertToRoman(num: number) {
	const numString = `${num}`;
	let numberStr = "";

	for (let i = numString.length - 1; i >= 0; i--) {
		let val = num[i] * 10 ** (numString.length - (i + 1));

		const int = 10 ** (numString.length - (i + 1));

		let numeralValue: string | null = null;
		if (val === 9 * int) {
			numeralValue = `${map[int]}` + map[int * 5];
		} else if (val >= 6 * int) {
			numeralValue =
				`${map[(val - (val - 5)) * int]}` + map[int].repeat(val / int - 5);
		} else if (val >= 4 * int) {
			numeralValue = `${map[int]}` + map[int * 5];
		}

		numberStr =
			(map[val] ?? numeralValue ?? map[int].repeat(num[i])) + numberStr;
	}

	return numberStr;
}

console.log(convertToRoman(68));
console.log(convertToRoman(83));

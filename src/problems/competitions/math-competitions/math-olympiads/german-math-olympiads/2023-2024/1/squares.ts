const timeStart = Date.now();

const globalBase = 10;

const start = 0;
const end = 1_000_000;

const count = 2;

const power = 2;

for (let n = start; n <= end; n++) {
	const numObj: {[key: `${number}`]: number[]} = {};

	for (let i = n; i < n + count; i++) {
		numObj[`${i}`] = [];
	}

	for (const numString in numObj) {
		const num = parseInt(numString, globalBase);

		let exponentiated = 0;
		for (let a = 2; (exponentiated = Math.pow(a, power)) <= num; a++) {
			const q = num / exponentiated;

			if (q !== Math.floor(q)) {
				continue;
			}

			numObj[`${num}`].push(exponentiated);
		}
	}

	let allFactorsArePower = true;
	for (const numString in numObj) {
		if (numObj[numString as `${number}`].length === 0) {
			allFactorsArePower = false;
		}
	}

	if (allFactorsArePower) {
		console.log(numObj);
	}
}

const timeEnd = Date.now();

console.log(timeEnd - timeStart);

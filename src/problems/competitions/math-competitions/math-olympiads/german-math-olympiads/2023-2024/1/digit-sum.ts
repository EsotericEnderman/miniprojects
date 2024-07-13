import assert from "assert";

const globalBase = 10;

const digitSum = (a: number | BigInt, base: number = globalBase) => {
	const str = a.toString();

	let sum = 0;
	for (const digit of str) {
		sum += parseInt(digit, base);
	}

	return sum;
};

const digitSumObj: {[key: number]: [number[], number]} = {};

let done = false;

process.on("exit", () => !done && console.log(digitSumObj));

const start = 1;
const iterations = 100;

for (let s = start; s <= iterations; s++) {
	const digitSums: number[] = [];

	for (let f = 0; f < s; f++) {
		const k = BigInt("1".repeat(s));

		const m = BigInt(BigInt(4) * k);

		const nStr = m.toString();
		const nArr = nStr.split("");
		nArr[s - (f + 1)] = "5";

		const n = BigInt(nArr.join(""));

		console.log("s = " + s);
		console.log("f = " + f);
		console.log("k = " + k);
		console.log("m = " + m);
		console.log("n = " + n);

		const c1 = BigInt(n + m);
		const c2 = BigInt(n - m);

		const c = BigInt(c1 * c2 + k);

		assert(
			c ===
				BigInt("1" + "0".repeat(2 * f)) +
					BigInt("8".repeat(f) + "9".repeat(s - f) + "1".repeat(f))
		);

		console.log("n^2 - m^2 + k = c = " + c);

		const dSum = digitSum(c);

		if (f === 0) {
			assert(c.toString().startsWith("1"));
			assert(c.toString().length === s + 1);
			assert(dSum === 1);
		} else if (s > 2 * f) {
			assert(
				c.toString() ===
					(
						BigInt("1" + "0".repeat(2 * f)) +
						BigInt(
							"8".repeat(f) +
								"9".repeat(s - 2 * f - 1) +
								"9" +
								"9".repeat(f) +
								"1".repeat(f)
						)
					).toString()
			);

			// 8 9 9 0 9 1
			// f - 1, 1, s - 2f - 1, 1, f, f

			assert(
				c.toString() ===
					"8".repeat(f - 1) +
						"9" +
						"0".repeat(s - 2 * f - 1) +
						"0" +
						"9".repeat(f) +
						"1".repeat(f)
			);

			assert(dSum === 18 * f + 1);
		} else if (s < 2 * f) {
			assert(
				c.toString() ===
					"8".repeat(s - f - 1) +
						"9" +
						"8".repeat(2 * f - s) +
						"9".repeat(s - f) +
						"1".repeat(f)
			);
			assert(dSum === 9 * s + 1);
		} else if (s === 2 * f) {
			assert(
				c.toString() === "8".repeat(f - 1) + "9" + "9".repeat(f) + "1".repeat(f)
			);

			assert(dSum === 18 * f + 1);
		}

		console.log("d(c) = " + dSum);
		digitSums.push(dSum);
	}

	const a = digitSums.filter(
		(sum, index) => digitSums.indexOf(sum) === index
	).length;

	console.log("a = " + a);

	if (s % 2 === 0) {
		assert(a === s / 2 + 1);
	} else if (s !== 1) {
		assert(a === (s + 3) / 2);
	}

	digitSumObj[s] = [digitSums, a];
}

done = true;

console.log(digitSumObj);

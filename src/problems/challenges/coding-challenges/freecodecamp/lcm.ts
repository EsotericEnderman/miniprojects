/**
 * Function to find lowest common multiple of an array of numbers.
 * @param {Array} input Array of numbers to find the lowest common multiple of.
 * @example lcm([2,3,4,5,6,7])
 * // Expected output: 420
 */
const lcm = (input: number[]) => {
	const max = Math.max(...input);

	for (let i = Math.min(...input); i < max; i++) input = [...input, i];

	loop: for (let i = max; ; i += max) {
		for (let e = 0; e < input.length; e++) {
			let number = input[e];

			if (i / number !== Math.floor(i / number)) continue loop;
		}
		return i;
	}
};

console.log(lcm([1, 5]));

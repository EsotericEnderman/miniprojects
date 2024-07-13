export function sum(
	lowerBound: number,
	upperBound: number,
	f: (x: number) => number
) {
	let sum = 0;

	for (let i = lowerBound; i <= upperBound; i++) {
		sum += f(i);
	}

	return sum;
}

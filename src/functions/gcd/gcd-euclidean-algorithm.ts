function gcd(a: number, b: number) {
	let smallest = Math.min(a, b);
	let largest = smallest === a ? b : a;

	for (;;) {
		const remainder = largest % smallest;

		if (remainder === 0) {
			return smallest;
		}

		const temp = smallest;
		smallest = remainder;
		largest = temp;
	}
}

function gcdRecursive(a: number, b: number) {
	const smallest = Math.min(a, b);
	const largest = smallest === a ? b : a;

	const remainder = largest % smallest;

	if (remainder === 0) {
		return smallest;
	}

	return gcdRecursive(remainder, smallest);
}

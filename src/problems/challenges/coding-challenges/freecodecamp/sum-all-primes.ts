function sumPrimes(num: number) {
	let sum = 0;

	loop: for (let i = 2; i <= num; i++) {
		// Loop to check if the number is prime
		for (let e = 2; e < i; e++) {
			if (i % e === 0) continue loop;
		}

		sum += i;
	}

	return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

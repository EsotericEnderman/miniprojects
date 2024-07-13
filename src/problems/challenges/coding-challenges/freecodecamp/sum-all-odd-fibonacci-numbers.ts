function sumFibs(num: number) {
	const fibArray = [1, 1];

	for (let i = 1; i < num - 1; i++) {
		if (fibArray[i] + fibArray[i - 1] > num) break;
		fibArray.push(fibArray[i] + fibArray[i - 1]);
	}

	return fibArray.reduce((accumulator, element) => {
		if (element % 2) return accumulator + element;

		return accumulator;
	});
}

console.log(sumFibs(4));
console.log(sumFibs(10));
console.log(sumFibs(74014));

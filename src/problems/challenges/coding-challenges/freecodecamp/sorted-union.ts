function uniteUnique(...arrays: any[]) {
	const unique: any[] = [];

	for (const arr of arrays)
		for (const element of arr) {
			if (unique.indexOf(element) !== -1) continue;
			unique.push(element);
		}

	return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function diffArray(arr1: any[], arr2: any[]) {
	const newArr = [];

	for (const element of [...arr1, ...arr2]) {
		if (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) {
			newArr.push(element);
		}
	}

	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

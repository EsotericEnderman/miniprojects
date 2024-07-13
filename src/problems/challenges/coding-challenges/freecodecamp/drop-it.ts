function dropElements<T>(arr: T[], func: (T) => boolean) {
	let state = false;

	while (!state) {
		state = func(arr[0]);
		if (!state) arr.splice(0, 1);
	}

	return arr;
}

dropElements([1, 2, 3], function (n: number) {
	return n < 3;
});

console.log(
	dropElements([1, 2, 3], function (n: number) {
		return n > 0;
	})
);

function steamrollArray(arr: any[]) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const element = [...arr[i]];

			steamrollArray(element);

			arr.splice(i, 1, ...element);

			if (!element.length) {
				i--;
			}
		}
	}
	return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

console.log(steamrollArray([1, [], [3, [[4]]]]));

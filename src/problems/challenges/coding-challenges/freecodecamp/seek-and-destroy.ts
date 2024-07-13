function destroyer(arr: any[], ...destroy: any[]) {
	console.log(destroy);

	for (let i = 0; i < arr.length; i++) {
		if (destroy.indexOf(arr[i]) !== -1) {
			arr.splice(i, 1);
			i--;
		}
	}

	return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

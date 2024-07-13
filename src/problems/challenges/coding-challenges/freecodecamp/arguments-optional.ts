function addTogether(arg1: number, arg2: number) {
	if (typeof arg1 !== "number") {
		return undefined;
	}

	if (arguments.length === 1) {
		return (arg2: number) => {
			if (typeof arg2 !== "number") {
				return undefined;
			}

			return arg1 + arg2;
		};
	}

	if (typeof arg2 !== "number") return undefined;

	return arg1 + arg2;
}

console.log(addTogether(5, undefined));

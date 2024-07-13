function myReplace(str: string, before: string, after: string) {
	const reg = new RegExp(before, "ig");

	return str.replace(
		reg,
		/^[A-Z]/.test(str.match(reg)?.[0] as string)
			? after[0].toUpperCase() + after.slice(1)
			: after[0].toLowerCase() + after.slice(1)
	);
}

console.log(
	myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

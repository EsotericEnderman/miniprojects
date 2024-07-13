const map = {
	G: "C",
	C: "G",
	A: "T",
	T: "A"
};

function pairElement(str: string) {
	const arr = [];

	for (const letter of str) arr.push([letter, map[letter]]);

	return arr;
}

console.log(pairElement("GCG"));

console.log(pairElement("TTGAG"));

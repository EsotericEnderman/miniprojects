const zuFall = (green: number) => {
	// blue, green, yellow, red, purple
	let blue = Math.floor(Math.random() * 100);

	let yellow = blue + green;
	let red = green + yellow;
	let purple = yellow + red;

	console.log(red + purple, 3 * blue + 5 * green);
};

for (let i = 0; i < 100; i++) {
	zuFall(i);
}

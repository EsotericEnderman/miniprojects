import {readFile, readdirSync} from "fs";

const inputFolder = readdirSync("./");
const inputFile = inputFolder.filter((e) => /input.*\.txt/.test(e));

const isBeautiful = (array) => {
	const previousElements = [];

	for (let i = 0; i < array.length; i++) {
		const totalPreviousElements = previousElements.reduce(
			(acc, element) => acc + element,
			0
		);

		if (totalPreviousElements === array[i]) {
			return false;
		}

		previousElements.push(array[i]);
	}
	return true;
};

readFile("./" + inputFile, "utf-8", (err, data) => {
	if (err) throw err;
	const lines = data.split("\n");

	for (let i = 2; i <= lines.length - 1; i += 2) {
		const line = lines[i].replace(/\r/g, "");

		let array = line.split(" ").map((element) => parseInt(element));

		if (isBeautiful(array)) {
			console.log(`YES\n${array.join(" ")}`);
			continue;
		}

		array = array.sort((a, b) => b - a);

		if (isBeautiful(array)) {
			console.log(`YES\n${array.join(" ")}`);
			continue;
		}

		const previousElements = [];

		for (let j = 0; j < array.length; j++) {
			const element = array[j];

			if (!isBeautiful([...previousElements, array[j]])) {
				array.splice(j, 1);
				array.splice(j + 1 >= array.length ? 0 : j + 1, 0, element);
			}

			previousElements.push(array[j]);
		}

		if (isBeautiful(array)) {
			console.log(`YES\n${array.join(" ")}`);
			continue;
		}

		console.log(`NO`);
	}
});

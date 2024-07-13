import {readdirSync, readFile} from "fs";

const inputFolder = readdirSync("./");
const inputFile = inputFolder.filter((e) => /input.*\.txt/.test(e));

const getBeautyArray = (array: any[], size: number) => {
	let newArr = [...array];

	const beautyArray: number[] = [];
	const chunkArray: any[][] = [];

	while (Math.sqrt(newArr.length) < size) {
		newArr.push(null);
	}

	for (let i = 0; i < newArr.length; i += size) {
		const chunk = newArr.slice(i, i + size);

		chunkArray.push(chunk);

		for (let j = 0; j < chunk.length - 1; j++) {
			if (chunk[j + 1]) {
				beautyArray.push(Math.abs(chunk[j] - chunk[j + 1]));
			}
		}
	}

	for (let j = 0; j < chunkArray.length; j++) {
		for (let s = 0; s < chunkArray[j].length; s++) {
			if (chunkArray[j - 1]?.[s] && chunkArray[j][s]) {
				beautyArray.push(Math.abs(chunkArray[j - 1][s] - chunkArray[j][s]));
			}
		}
	}

	return beautyArray;
};

readFile("./" + inputFile, "utf-8", (err, data) => {
	if (err) throw err;
	const lines = data.split("\n");

	for (let i = 1; i <= lines.length - 1; i++) {
		const line = lines[i].replace(/\r/g, "");

		const size = line.length * line.length;

		const length = line.length;

		let intArray: number[] = [];

		// ! Array of possible values = (2 - 1 = 1) => (size - 1)

		for (let j = 1; j <= size; j++) {
			intArray.push(j);
		}

		const consoleLogArray: number[] = [];

		rows: for (let j = 1; j <= length; j++) {
			columns: for (let o = 1; o <= length; o++) {
				const index = (j - 1) * length + o;

				if (index === 1) {
					const max = Math.max(...intArray);
					intArray.splice(intArray.indexOf(max), 1);
					consoleLogArray.push(max);
					continue columns;
				}

				const elementLeftIndex = o - 1 - 1;

				let elementLeft = consoleLogArray[index - 1 - 1];
				let elementUp = consoleLogArray[index - length - 1];

				if (!elementLeft) elementLeft = null;
				if (!elementUp) elementUp = null;

				elementLeft = elementLeftIndex >= 0 ? elementLeft : null;

				let preferredElement;

				const beautyArray = getBeautyArray(consoleLogArray, length);
				let preferredElementArray: number[] = [];

				if (elementUp) {
					for (const element of intArray) {
						if (beautyArray.indexOf(Math.abs(elementUp - element)) === -1) {
							preferredElementArray.push(element);
						}
					}
				}

				if (elementLeft) {
					for (const element of intArray) {
						if (beautyArray.indexOf(Math.abs(elementLeft - element)) === -1) {
							preferredElementArray.push(element);
						}
					}
				}

				if (elementLeft && elementUp) {
					for (const element of intArray) {
						if (
							beautyArray.indexOf(Math.abs(elementLeft - element)) === -1 &&
							beautyArray.indexOf(Math.abs(elementUp - element)) === -1
						) {
							preferredElementArray.push(element);
						}
					}

					if (!preferredElement) {
						for (const element of intArray) {
							if (beautyArray.indexOf(Math.abs(elementUp - element)) === -1) {
								preferredElementArray.push(element);
							}
						}
					}

					if (!preferredElement) {
						for (const element of intArray) {
							if (beautyArray.indexOf(Math.abs(elementLeft - element)) === -1) {
								preferredElementArray.push(element);
							}
						}
					}
				}

				const elementArray = preferredElementArray
					.filter(
						(element, index) => preferredElementArray.indexOf(element) === index
					)
					.map((preferredElement, index) => {
						const divideArray = [];

						for (const number of intArray) {
							if (
								consoleLogArray.indexOf(Math.abs(preferredElement - number)) ===
								-1
							) {
								divideArray.push(number);
							}
						}

						return {
							preferredElement: preferredElement,
							index: index,
							score: divideArray.length
						};
					});

				let highestScore: {
					score: number;
					preferredElement?: number;
					index?: number;
				} = {score: 0};

				for (const element of elementArray) {
					if (element.score > highestScore.score) {
						highestScore = element;
					}
				}

				preferredElement = highestScore.preferredElement;

				if (!preferredElement) {
					preferredElement = intArray[0];

					console.log(preferredElement);
				}

				intArray.splice(intArray.indexOf(preferredElement), 1);
				consoleLogArray.push(preferredElement);
			}
		}

		let consoleLogString = "";

		for (let o = 0; o < consoleLogArray.length; o++) {
			if (!(o % length) && o) {
				consoleLogString += "\n";
			}
			consoleLogString += `${consoleLogArray[o]} `;
		}

		console.log(consoleLogString);

		const beautyArray = getBeautyArray(consoleLogArray, line.length).sort(
			(a, b) => a - b
		);

		console.log(
			`Beauty: ` +
				beautyArray +
				` (` +
				beautyArray.filter((a, index) => beautyArray.indexOf(a) === index)
					.length +
				`/` +
				Math.abs(0 - (size - 1)) +
				`)`
		);
	}
});

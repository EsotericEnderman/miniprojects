const map = {
	"PENNY": 0.01,
	"NICKEL": 0.05,
	"DIME": 0.1,
	"QUARTER": 0.25,
	"ONE": 1,
	"FIVE": 5,
	"TEN": 10,
	"TWENTY": 20,
	"ONE HUNDRED": 100
};

function checkCashRegister(
	price: number,
	cash: number,
	cid: [string, number][]
) {
	const availableChange = parseFloat(
		cid
			.reduce((accumulator, element) => accumulator + element[1], 0)
			.toPrecision(5)
	);

	let requiredChange = cash - price;
	const neededChange = requiredChange;

	if (availableChange === requiredChange) {
		return {status: "CLOSED", change: cid};
	}

	if (availableChange < requiredChange) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	}

	let totalChange = 0;
	let change = [];

	while (requiredChange > 0) {
		let preferredElement: [string, number, number, number, number] = [
			"PENNY",
			0,
			0,
			99999,
			-1
		];

		for (let i = 0; i < cid.length; i++) {
			const element = cid[i];
			const val = map[element[0]];

			if (element[1] !== Math.abs(element[1])) {
				return {status: "INSUFFICIENT_FUNDS", change: []};
			}

			if (val + totalChange > neededChange) {
				continue;
			}

			let maxVal = val;

			let maxValCount = 1;

			while (maxVal + val <= requiredChange && maxVal + val <= element[1]) {
				maxVal = parseFloat((maxVal + val).toPrecision(5));
				maxValCount++;
			}

			if (maxValCount < preferredElement[3] || maxVal > preferredElement[2]) {
				preferredElement = [element[0], maxVal, element[1], maxValCount, i];
				// cid[i][1] = parseFloat((cid[1][1] - val).toPrecision(5))
			}
		}

		if (!preferredElement[1]) return {status: "INSUFFICIENT_FUNDS", change: []};

		cid.splice(preferredElement[4], 1);

		totalChange += preferredElement[1];

		requiredChange = parseFloat(
			(requiredChange - preferredElement[1]).toPrecision(5)
		);

		change.push(preferredElement);
	}

	return {
		status: "OPEN",
		change: change
			.sort((a, b) => {
				if (a[1] > b[1]) return -1;
				if (a[1] < b[1]) return 1;
				return 0;
			})
			.map((element) => {
				return element.slice(0, 2);
			})
	};
}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 1],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]
	])
);

const stoll = (houseHolds: number) => {
	let individualCost = houseHolds * 3;

	let stationCost = 27.5 + 0.25 * houseHolds;

	console.log(houseHolds, individualCost, stationCost);

	if (individualCost > stationCost) {
		console.log(`CHEAPER!!!!`);
	}
};

for (let i = 1; i < 60; i++) {
	stoll(i);
}

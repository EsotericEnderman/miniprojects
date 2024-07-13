function orbitalPeriod(
	arr: {name: string; avgAlt: number; orbitalPeriod?: number}[]
) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;

	return arr.map((element) => {
		element.orbitalPeriod = Math.round(
			2 * Math.PI * Math.sqrt((element.avgAlt + earthRadius) ** 3 / GM)
		);
		delete element.avgAlt;
		return element;
	});
}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]));

console.log(
	orbitalPeriod([
		{name: "iss", avgAlt: 413.6},
		{name: "hubble", avgAlt: 556.7},
		{name: "moon", avgAlt: 378632.553}
	])
);

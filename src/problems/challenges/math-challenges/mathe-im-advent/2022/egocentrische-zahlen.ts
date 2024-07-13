const ego = (num: number) => {
	let start = num;
	let one = parseInt(`${num}`.match(/^\d/)[0]);
	let two = parseInt(`${num}`.match(/\d.$/)[0].match(/^\d/)[0]);
	let three = parseInt(`${num}`.match(/\d$/)[0]);

	let end = one + two * two + three * three * three;
	if (end === start) {
		return console.log(`${end} is an egocentric number.`);
	}
};

for (let i = 100; i < 999999999999; i++) {
	ego(i);
}

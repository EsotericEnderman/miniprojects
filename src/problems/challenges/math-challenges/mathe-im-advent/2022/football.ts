let field1 = [
	{name: "Rotation Nordpoll 1881", playedTeams: []},
	{name: "Victoria Wichteldorf", playedTeams: []}
];

let field2 = [
	{name: "Union Polarstern", playedTeams: []},
	{name: "Die Rentiere", playedTeams: []}
];

let field3 = [
	{name: "Rot-Weiss Arktis 1777", playedTeams: []},
	{name: "FC Compass", playedTeams: []}
];

const rotation2 = (field1, field2, field3) => {
	field1[0].playedTeams.push(field1[1].name);
	field1[1].playedTeams.push(field1[0].name);
	field2[0].playedTeams.push(field2[1].name);
	field2[1].playedTeams.push(field2[0].name);
	field3[0].playedTeams.push(field3[1].name);
	field3[1].playedTeams.push(field3[0].name);

	let ___field1 = [...field1];
	let ___field2 = [...field2];
	let ___field3 = [...field3];

	field1[0] = ___field1[1];
	field1[1] = ___field2[1];
	field2[0] = ___field3[1];
	field2[1] = ___field3[0];
	field3[0] = ___field2[0];
	field3[1] = ___field1[0];

	console.log(
		`Field 1:\n`,
		field1,
		`\nField 2:\n`,
		field2,
		`\nField 3:\n`,
		field3
	);
};

rotation2(field1, field2, field3);
rotation2(field1, field2, field3);
rotation2(field1, field2, field3);
rotation2(field1, field2, field3);
rotation2(field1, field2, field3);

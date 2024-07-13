function truthCheck(
	collection: {name: string; role: string; isBot: boolean}[],
	pre: string
) {
	let status = true;

	for (const entry of collection) {
		if (!entry[pre]) {
			status = false;
		}
	}

	return status;
}

console.log(
	truthCheck(
		[
			{name: "Quincy", role: "Founder", isBot: false},
			{name: "Naomi", role: "", isBot: false},
			{name: "Camperbot", role: "Bot", isBot: true}
		],
		"isBot"
	)
);

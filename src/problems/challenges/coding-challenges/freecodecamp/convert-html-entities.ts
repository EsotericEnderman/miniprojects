function convertHTML(str: string) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/'/g, "&apos;")
		.replace(/"/g, "&quot;");
}

convertHTML("Dolce & Gabbana");

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

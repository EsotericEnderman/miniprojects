function telephoneCheck(str: string) {
	return /^1? ?(\(\d{3}\)|\d{3})( |-)?\d{3}( |-)?\d{4}$/.test(str);
}

console.log(telephoneCheck("555-555-5555"));

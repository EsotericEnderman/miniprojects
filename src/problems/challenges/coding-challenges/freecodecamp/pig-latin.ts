function translatePigLatin(str: string) {
	if (/^(a|e|i|o|u)/.test(str)) return str + "way";

	const match = str.match(/^[^aeiou]+/gi);

	str = str.replace(/^[^aeiou]+/gi, "");

	return str + match + "ay";
}

translatePigLatin("consonant");

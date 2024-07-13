function palindrome(str: string) {
	str = str.replace(/ |,|_|\.|-|\/|\(|\)/gi, "").toLowerCase();

	let strEndToStart = "";

	for (let i = str.length - 1; i >= 0; i--) {
		strEndToStart += str[i];
	}
	return strEndToStart === str;
}

console.log(palindrome("eye"));
console.log(palindrome("0_0 (: /- :) 0-0"));

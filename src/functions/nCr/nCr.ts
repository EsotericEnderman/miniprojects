import {fact} from "../fact/fact.js";

export function nCr(n: number, r: number) {
	return fact(n) / (fact(n - r) * fact(r));
}

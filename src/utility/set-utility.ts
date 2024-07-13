import {arrayEquals} from "./array-utility.js";
import {equals} from "./utility.js";

export function setEquals<T>(a: Set<T>, b: Set<T>) {
	if (a.size !== b.size) {
		return false;
	}

	const aArray = [...a];
	const bArray = [...b];

	return arrayEquals(aArray, bArray);
}

export function setDifference<T>(a: Set<T>, b: Set<T>) {
	return new Set(Array.from(a).filter((element) => !includes(b, element)));
}

export function includes<T>(set: Set<T>, searchElement: T) {
	for (const element of set) {
		if (equals(element, searchElement)) {
			return true;
		}
	}

	return false;
}

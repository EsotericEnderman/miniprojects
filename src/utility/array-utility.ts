import {equals} from "./utility.js";

export function chooseRandomItem<T>(array: T[]) {
	return array[Math.floor(Math.random() * array.length)];
}

export function arrayDifference(a: any[], b: any[]) {
	return a.filter((element) => !includes(b, element));
}

export function includes<T>(array: T[], searchElement: T) {
	for (const element of array) {
		if (equals(searchElement, element)) {
			return true;
		}
	}

	return false;
}

export function arrayEquals(a: any[], b: any[]) {
	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		const aValue = a[i];
		const bValue = b[i];

		const equal = equals(aValue, bValue);

		if (!equal) {
			return false;
		}
	}

	return true;
}

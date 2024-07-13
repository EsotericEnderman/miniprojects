import {equals} from "./utility.js";

export function objectEquals(a: Object, b: Object) {
	for (const key in a) {
		const aValue = a[key];
		const bValue = b[key];

		const equal = equals(aValue, bValue);

		if (!equal) {
			return false;
		}
	}

	for (const key in b) {
		const aValue = a[key];
		const bValue = b[key];

		const equal = equals(aValue, bValue);

		if (!equal) {
			return false;
		}
	}

	return true;
}

import Decimal from "decimal.js";
import {factDecimal} from "../fact/fact.js";

Decimal.set({precision: 10000});

export function e(precision: number) {
	let sum = new Decimal(0);

	for (let i = new Decimal(0); i.lessThanOrEqualTo(precision); i = i.plus(1)) {
		sum = sum.plus(new Decimal(1).dividedBy(factDecimal(i)));
	}

	return sum;
}

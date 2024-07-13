import Decimal from "decimal.js";

export function fact(n: number) {
	let product = 1;

	for (let i = 2; i <= n; i++) {
		product *= i;
	}

	return product;
}

export function factDecimal(n: Decimal) {
	let product = new Decimal(1);

	for (let i = new Decimal(2); i.lessThanOrEqualTo(n); i = i.add(1)) {
		product = product.times(i);
	}

	return product;
}

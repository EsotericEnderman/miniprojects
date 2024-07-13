import {nCr} from "../../../../../functions/nCr/nCr.js";

const n = 8;

for (let k = 1; k <= n; k++) {
	console.log(calculatePositionCount(k));
}

function calculatePositionCount(k: number) {
	const maximumPositions = nCr(k * k, 2);

	return maximumPositions - 4 * (k - 1) * (k - 2);
}

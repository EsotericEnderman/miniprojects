import {Vector} from "./Vector.js";

export class Matrix {
	vectors: Vector[];

	constructor(vectors: Vector[]) {
		this.vectors = vectors;
	}

	public get rowCount() {
		return this.vectors.length;
	}

	public get columnCount() {
		return this.vectors[0].components.length;
	}

	public get rank(): number {
		const rowCount = this.rowCount;
		const columnCount = this.columnCount;

		const matrix = this.vectors.map((vector) => vector.components.slice());

		let lead = 0;

		for (let row = 0; row < rowCount; row++) {
			if (lead >= columnCount) {
				break;
			}

			let i = row;

			while (matrix[i][lead] === 0) {
				i++;
				if (i === rowCount) {
					i = row;
					lead++;
					if (lead === columnCount) {
						break;
					}
				}
			}

			if (lead < columnCount) {
				const temp = matrix[i];
				matrix[i] = matrix[row];
				matrix[row] = temp;

				const divisor = matrix[row][lead];

				for (let j = 0; j < columnCount; j++) {
					matrix[row][j] /= divisor;
				}

				for (let j = 0; j < rowCount; j++) {
					if (j !== row) {
						const factor = matrix[j][lead];
						for (let k = 0; k < columnCount; k++) {
							matrix[j][k] -= factor * matrix[row][k];
						}
					}
				}
				lead++;
			}
		}

		let rank = 0;

		for (const row of matrix) {
			if (row.some((entry) => entry !== 0)) {
				rank++;
			}
		}

		return rank;
	}
}

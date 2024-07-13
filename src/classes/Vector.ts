import {Comparable} from "../interfaces/Comparable";
import {arrayEquals} from "../utility/array-utility.js";

export class Vector implements Comparable, Iterable<number> {
	public components: number[];

	constructor(components: number[]) {
		this.components = components;
	}

	public get dimension() {
		return this.components.length;
	}

	public equals(otherVector: Vector) {
		if (this === otherVector) {
			return true;
		}

		return arrayEquals(this.components, otherVector.components);
	}

	public add(otherVector: Vector) {
		if (otherVector.dimension !== this.dimension) {
			throw new Error(
				"Can't add vector " +
					this +
					" to vector " +
					otherVector +
					" because of differing dimensions."
			);
		}

		for (let i = 0; i < this.components.length; i++) {
			this.components[i] += otherVector.components[i];
		}
	}

	[Symbol.iterator](): Iterator<number> {
		let index = 0;
		const components = this.components;

		return {
			next(): IteratorResult<number> {
				if (index < components.length) {
					return {
						value: components[index++],
						done: false
					};
				} else {
					return {value: undefined, done: true};
				}
			}
		};
	}
}

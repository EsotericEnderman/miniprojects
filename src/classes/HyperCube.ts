import {HyperRectangle} from "./HyperRectangle.js";

export class HyperCube extends HyperRectangle {
	constructor(sideLength: number, dimensions: number) {
		super(Array(dimensions).fill(sideLength));
	}

	public get sideLength() {
		return this.sideLengths[0];
	}
}

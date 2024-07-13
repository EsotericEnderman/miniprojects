import {HyperCube} from "./HyperCube.js";

export class Square extends HyperCube {
	constructor(sideLength: number) {
		super(sideLength, 2);
	}
}

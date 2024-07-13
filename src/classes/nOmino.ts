import {arrayEquals} from "../utility/array-utility.js";
import {HyperCube} from "./HyperCube.js";
import {Shape} from "./Shape.js";

export class nOmino extends Shape {
	private hyperCubes: Set<HyperCube> = new Set();

	constructor(size: number) {
		super();
	}

	public canAttachHyperCube(otherHyperCube: HyperCube) {
		const hyperCubeSideLength = this.hyperCubes[0]?.sideLength;

		if (!hyperCubeSideLength) {
			return true;
		}

		const otherHyperCubeSideLength = otherHyperCube.sideLength;

		if (hyperCubeSideLength !== otherHyperCubeSideLength) {
			return false;
		}

		let matchingVerticesCount = 0;

		for (const hyperCube of this.hyperCubes) {
			for (const vertexA of hyperCube.vertices) {
				const componentsA = vertexA.components;
				for (const vertexB of otherHyperCube.vertices) {
					const componentsB = vertexB.components;
					if (arrayEquals(componentsA, componentsB)) {
						matchingVerticesCount++;

						if (matchingVerticesCount === Math.pow(2, this.dimension - 1)) {
							return true;
						}
					}
				}
			}
		}

		this.hyperCubes.add(otherHyperCube);
	}

	public attachHyperCube(hyperCube: HyperCube) {
		if (!this.canAttachHyperCube(hyperCube)) {
			return false;
		}

		this.hyperCubes.add(hyperCube);
		return true;
	}

	public static generateAllPossible(
		size: number,
		hyperCubeSideLength: number
	) {}
}

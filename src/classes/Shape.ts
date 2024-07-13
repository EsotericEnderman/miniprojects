import {arrayEquals} from "../utility/array-utility.js";
import {Vector} from "./Vector.js";
import {Vertex} from "./Vertex.js";

export class Shape {
	public vertices: Set<Vertex>;

	constructor(vertices: Set<Vertex> = new Set()) {
		this.vertices = vertices;
	}

	public get dimension(): number {
		return this.vertices.values().next().value.dimension;
	}

	public getVertex(position: Vector) {
		const components = position.components;

		for (const vertex of this.vertices) {
			if (arrayEquals(components, vertex.components)) {
				return vertex;
			}
		}

		return null;
	}

	public getBoundaries(boundaryDimension: number): Set<Shape> {
		if (boundaryDimension < 1 || boundaryDimension >= this.dimension) {
			throw new Error("Invalid boundary dimension provided.");
		}

		const boundaries: Set<Shape> = new Set();

		return boundaries;
	}

	private getVertexBoundaries(
		boundaryDimension: number,
		vertex: Vertex,
		boundaryVertices: Set<Vertex>
	): Set<Shape> {
		const vertexBoundaries = new Set<Shape>();

		return vertexBoundaries;
	}

	public translate(translation: Vector) {
		for (const vertex of this.vertices) {
			vertex.add(translation);
		}
	}
}

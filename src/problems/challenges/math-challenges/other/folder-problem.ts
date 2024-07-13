// Imports

import {chooseRandomItem} from "../../../../utility/array-utility.js";

// Configuration

const layerOneFolderCount = 6;
const layerTwoFolderCount = 2;

const fileCount = 10;

// Code

class File {
	superFolder?: Folder;

	countVisibleItems() {
		return 1;
	}

	isVisible() {
		return superFolder.isOpen;
	}
}

class Folder extends File {
	items: File[];
	isOpen: boolean;

	constructor(items?: File[]) {
		super();

		for (const item of items) {
			item.superFolder = this;
		}

		this.items = items;
	}

	open() {
		this.isOpen = true;
	}

	override countVisibleItems(): number {
		if (!this.isOpen) {
			return 1;
		}

		let sum = 0;

		for (const item of this.items) {
			sum += item.countVisibleItems();
		}

		return 1 + sum;
	}
}

const superFolder = new Folder(
	Array(layerOneFolderCount).fill(
		new Folder(
			Array(layerTwoFolderCount).fill(
				new Folder(Array(fileCount).fill(new File(), 0, fileCount)),
				0,
				layerTwoFolderCount
			)
		),
		0,
		layerOneFolderCount
	)
);

superFolder.open();

console.info("superFolder = ", superFolder);

function countVisibleItems() {
	console.log("visibleItems = ", superFolder.countVisibleItems() - 1);
}

countVisibleItems();

function searchForRandomFile() {
	const randomFirstLevelFolder = chooseRandomItem(superFolder.items) as Folder;
	const randomSecondLevelFolder = chooseRandomItem(
		randomFirstLevelFolder.items
	) as Folder;

	console.log("folder = ", randomSecondLevelFolder);
}

searchForRandomFile();

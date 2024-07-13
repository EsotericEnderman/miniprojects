const Person = function (firstAndLast: string) {
	// Only change code below this line
	// Complete the method below and implement the others similarly
	this.getFullName = () => {
		return firstAndLast;
	};

	this.getLastName = () => {
		return firstAndLast.match(/\w+$/)[0];
	};

	this.getFirstName = () => {
		return firstAndLast.match(/\w+/)[0];
	};

	this.setFirstName = (first: string) => {
		firstAndLast = first + firstAndLast.match(/ \w+/)[0];
	};

	this.setLastName = (last: string) => {
		firstAndLast = firstAndLast.match(/\w+ /)[0] + last;
	};

	this.setFullName = (firstAndLastName: string) => {
		firstAndLast = firstAndLastName;
	};
};

const bob = new Person("Bob Ross");
bob.getFullName();

console.log(Object.keys(bob).length);

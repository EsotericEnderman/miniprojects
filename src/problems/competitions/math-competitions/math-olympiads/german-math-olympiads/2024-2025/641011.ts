const solutions: [number, number, number][] = []

for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
            if (x * x + y * y + z * z === 5) {
                solutions.push([x, y, z]);
            }
        }
    }
}

console.log("Es gibt " + solutions.length + " Lösungen.");
console.log(solutions);

solutions.length = 0;

for (let x = -3; x <= 3; x++) {
    for (let y = -3; y <= 3; y++) {
        for (let z = -3; z <= 3; z++) {
            if (x * x + y * y + z * z === 9) {
                solutions.push([x, y, z]);
            }
        }
    }
}

console.log("Es gibt " + solutions.length + " Lösungen.");
console.log(solutions);

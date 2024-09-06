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

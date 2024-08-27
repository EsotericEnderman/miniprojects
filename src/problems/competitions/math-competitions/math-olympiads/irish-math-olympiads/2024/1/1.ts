const runcibleNumbers = new Set([1, 2]);

const alreadyAddedSums = new Set();

while (true) {
    const runcibleArrayCopy = [...runcibleNumbers];

    for (const x of runcibleArrayCopy) {
        yLoop: for (const y of runcibleArrayCopy) {
            if (alreadyAddedSums.has(x + "," + y) || alreadyAddedSums.has(y + "," + x)) {
                continue yLoop;
            }

            const newRuncibleNumber = 2 * x + 3 * y;

            if (runcibleNumbers.has(newRuncibleNumber)) {
                continue;
            }

            console.log(newRuncibleNumber);

            runcibleNumbers.add(newRuncibleNumber);

            alreadyAddedSums.add(x + "," + y)

            if (newRuncibleNumber === 2024) {
                console.log("2024 is a runcible number");
                console.log("2024 = 2 * " + x + " + 3 * " + y);
                process.exit(0);
            }
        }
    }
}

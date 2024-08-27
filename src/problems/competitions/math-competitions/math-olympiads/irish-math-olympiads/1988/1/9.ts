for (let i = 1000; i <= 9999; i++) {
    const numberString = `${i}`
    const A = parseInt(numberString[0]);
    const B = parseInt(numberString[1]);
    const C = parseInt(numberString[2]);
    const D = parseInt(numberString[3]);

    if (10 * A + B + 10 * C + D === 10 * B + C) {
        console.log(i + " is a peculiar number");
    }
}

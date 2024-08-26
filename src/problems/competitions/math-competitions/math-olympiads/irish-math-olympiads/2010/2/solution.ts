for (let a = 0; a <= 44; a++) {
    for (let b = 0; b <= 44; b++) {
        for (let c = 0; c <= 44; c++) {
            for (let d = 0; d <= 44; d++) {
                if (a * a + b * b + c * c + d * d === 2010) {
                    console.log(a, b, c, d);
                }
            }
        }
    }
}

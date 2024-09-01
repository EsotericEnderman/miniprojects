import Decimal from "decimal.js";

Decimal.set({precision: 1000000, maxE: 1000000, minE: -1000000, toExpPos: 1000000})

const a = new Decimal("444_444_444_444_445").pow(2).sub(new Decimal("444_444_444_444_444").pow(2)).plus(new Decimal("111_111_111_111_111"));

const stringA = a.toString();

console.log(stringA);

let digitSumA = 0;

for (const character of stringA) {
    digitSumA += parseInt(character);
}

console.log("q(a) = " + digitSumA);

const b = new Decimal("544_444_444_444_444").pow(2).sub(new Decimal("444_444_444_444_444").pow(2)).plus(new Decimal("111_111_111_111_111"))

const stringB = b.toString();

console.log(stringB);

let digitSumB = 0;

for (const character of stringB) {
    digitSumB += parseInt(character);
}

console.log("q(b) = " + digitSumB);

import Decimal from "decimal.js";
import {factDecimal} from "../../../../functions/fact/fact.js";
import chalk from "chalk";

const searchDigitString = "";
const iterations = 1000;

const iterationsDecimal = new Decimal(iterations);

Decimal.set({precision: 1000});

let e = new Decimal(0);

const regExp = new RegExp(searchDigitString);

let falseStringsFound = 0;

for (
	let i = new Decimal(0);
	i.lessThanOrEqualTo(iterationsDecimal);
	i = i.plus(1)
) {
	const ePart = new Decimal(1).dividedBy(factDecimal(i));

	e = e.add(ePart);

	const eString = e.toString();

	let foundString = regExp.test(eString);

	if (foundString) {
		const nextEPart = new Decimal(1).dividedBy(factDecimal(i.plus(1)));

		const nextE = e.add(nextEPart);
		const nextEString = nextE.toString();

		foundString ||= regExp.test(nextEString);

		if (foundString) {
			console.log(
				eString.replace(regExp, chalk.greenBright(searchDigitString))
			);
		} else {
			falseStringsFound += 1;
		}

		break;
	}
}

console.log(chalk.red("False strings found:"), falseStringsFound);

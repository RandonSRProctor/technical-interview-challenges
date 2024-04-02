/**
 *
 * @param {function} testFunciton
 * @param {[number, number]} caseArgs
 */

function testMultiply(multiply, caseArgs) {
  const [a, b] = caseArgs;
  const multiplyResult = multiply(a, b);
  const correctResult = a * b;
  if (
    (typeof correctResult !== 'number' || isNaN(correctResult)) &&
    multiplyResult === 'invalid input'
  ) {
    return;
  }
  if (multiplyResult !== correctResult) {
    const errorMessage = `The product of ${a} * ${b} is not: ${multiplyResult}`;
    throw new Error(errorMessage);
  }
}

/**
 *
 * @param {function} testFunciton
 * @param {[number, number][]} caseSet
 * @param {string} levelOfDifficulty
 */

export function testMultipleCaseSet(multiply, caseSet, levelOfDifficulty) {
  caseSet.forEach(caseInstance => testMultiply(multiply, caseInstance));
  console.log(`✅ ${levelOfDifficulty} difficulty: Pass\n`);
}

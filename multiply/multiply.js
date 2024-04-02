/**
 * A function to handle multiplication when the `*` operator is unavailable
 *
 * Should be functionally equivilant to `*` operator
 */

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'invalid input';
  }
  let answer = 0;
  for (let i = a; i > 0; i--) {
    answer = answer + b;
  }
  if (a < 0 || (b < 0 && !(a < 0 && b < 0))) {
    answer = answer - answer * 2;
  }
  return answer;
}

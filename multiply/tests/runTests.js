import { multiply } from '../multiply.js';
import { testMultipleCaseSet } from './testMultiply.js';
import { cases } from './cases.js';

testMultipleCaseSet(multiply, cases.basic, 'Basic');
setTimeout(
  () => testMultipleCaseSet(multiply, cases.advanced, 'Advanced'),
  1000
);
setTimeout(
  () =>
    testMultipleCaseSet(
      multiply,
      cases.annoyinglyDifficult,
      'Annoyingly Difficult'
    ),
  2000
);

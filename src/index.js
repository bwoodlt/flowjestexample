// @flow
/* eslint-disable no-console */

import Dog from './dog';

const toby = new Dog('Toby', 25);

console.log(toby.bark());

console.log(toby.declareAge());
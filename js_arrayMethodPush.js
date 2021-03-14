'use strict';

numbers.push = function(...values) {
  const { length: arrayLength } = this;
  const { length: valuesLength } = values;

  for (let i = 0; i < valuesLength; i += 1) {
    this[arrayLength + i] = values[i];
  }

  return this.length;
};
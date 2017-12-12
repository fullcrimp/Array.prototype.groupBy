const assert = require('assert');
const groupByFunction = require('./src/index.js');

const result1 = {
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
};

const result2 = {
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
};

let groupBy = groupByFunction()

it('should return grouped elements according to the passed function', () => {
    assert.deepEqual(groupBy([1,2,3,2,4,1,5,1,6]), result2);
});


let groupBy3 = groupByFunction((value) => value % 3)

it('should return grouped elements by default', () => {
    assert.deepEqual(groupBy3([1,2,3,2,4,1,5,1,6]), result1);
});

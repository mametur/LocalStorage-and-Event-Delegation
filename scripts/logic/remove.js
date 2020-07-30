'use strict';
console.log('--- loading remove testing logic---');


/**
 *@package{array} array  take array of object
 *@return {array} return array of object or empty array
 */
const removeItemByUser = (array, index) => {

    if (array.length === 0) {
        return [];
    }

    array.splice(index, 1);

    return array;
};

// write only one top-level describe in this file
describe('Remove Item Testing', () => {
    // write as many nested describes as you would like
    describe('Empty Array', () => {
        // write as many it's as you want in each describe
        it('Empty Array return an empty array', () => {
            // have only one assertion inside each it
            const expect = []
            const actual = removeItemByUser([]);
            assert.deepEqual(actual, expect);
        });
    });
    describe('Non Empty Array', () => {
        // write as many it's as you want in each describe
        it('Non empty Array reduce by index number', () => {
            // have only one assertion inside each it
            const expect = []
            const actual = removeItemByUser([{ name: "mam", done: false }], 0);
            assert.deepEqual(actual, expect);
        });
    });
});

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
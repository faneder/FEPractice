const assert = require('assert');
function countNumber(num) {
  // Array for the numbers from 1 to 10
  //let letters = 3; //if the number is ten, it should return 3
  const oneToTen = [0,3,3,5,4,4,3,5,5,4,3]
 // return letters += oneToTen[num]
  return oneToTen[num]
  // if (!num % 10 ==0) {
  //   var numToString = {
  //     1: 'one',
  //     2: 'two',
  //     3: 'three',
  //     4: 'four',
  //     5: 'five',
  //     6: 'six',
  //     7: 'seven',
  //     8: 'eight',
  //     9: 'nine'
  //   }
  //   return numToString[num].length;
  // } else {
  //   return false
  // }
}

describe('Number Letter Counts', function() {

  it('return three when passed 1!', () => {
    const expected = 3;
    const actual = countNumber(1);
    assert.equal(actual, expected);
  });
  it('return three when passed 2!', () => {
    const expected = 3;
    const actual = countNumber(2);
    assert.equal(actual, expected);
  });
  it('return five when passed 3!', () => {
    const expected = 5;
    const actual = countNumber(3);
    assert.equal(actual, expected);
  });
  it('return complain if number is above 10!', () => {
    const expected = undefined;
    const actual = countNumber(11);
    assert.equal(actual, expected);
  });

});
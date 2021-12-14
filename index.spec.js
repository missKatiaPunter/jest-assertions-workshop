const { minVal, fizzBuzz, timesTwo } = require('./index');

// A smoke test in real life has just one simple assertion. This is just an example.

test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
	expect(NaN).toBeNaN();
	expect(1).not.toBeNaN();
	expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {

});

describe('Testing function timesTwo()', () => {   

});

describe('Testing function fizzBuzz()', () => {

});

// Make the test below pass by writing a function

describe('Testing function that you have not written yet()', () => {
    test('Function that you have not written yet returns...', () =>{
        expect(haveNotWrittenYet(9)).toBe("🎄🎄🎄");
        expect(haveNotWrittenYet(36)).toBe("🎄🎄🎄🎄🎄🎄");
    });
    
});

// Write more functions and more tests. Success criteria: funny and Christmas
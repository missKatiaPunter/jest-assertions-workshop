const { minVal, fizzBuzz, timesTwo } = require('./index');
test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
    expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {
    it('Shoul return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });
    it('Should get a minimal value from an array', () => {
        expect(minVal([])).toBe(-12);
    });
});

describe('Testing function timesTwo()', () => {
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).toBe([5,4]);
    });
});

describe('Testing function fizzBuzz()', () => {
    it('returns an array of the same length as a parameter', () => {
        expect(fizzBuzz(10)).toHaveLength(7);
    });
    it('returns an array with some fizz, buzz and fizzbuzz', () => {
        expect(fizzBuzz(3)).toContain('fizz');
        expect(fizzBuzz(3)).toContain('fizzbuzz');
    })
});



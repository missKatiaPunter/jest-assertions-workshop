const { minVal, fizzBuzz, timesTwo, returnObjects } = require('./index');
test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
    expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {
    it('Shoul return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(()=> {
            minVal([])
        }).toThrow('Array is empty');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });
    it('Shoul get a minimal value from an array', () => {
        expect(minVal([1,2,34,0,-12])).toBe(-12);
    });
});

describe('Testing function timesTwo()', () => {
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).toEqual([2,4]);
        expect(timesTwo([1,2])).toBeInstanceOf(Object);
    });
});

describe('Testing function fizzBuzz()', () => {
    it('returns an array of the same length as a parameter', () => {
        expect(fizzBuzz(10)).toHaveLength(10);
    });
    it('returns an array with some fizz, buzz and fizzbuzz', () => {
        expect(fizzBuzz(3)).toContain('fizz');
        expect(fizzBuzz(15)).toContain('fizzbuzz');
    })
});

describe('Testing the function returnObjects()', () => {
    it(' ', () => {
        console.log(returnObjects(['asd', 1, 'asda', 2, 'asdd', 3 , 'asds', 4]));
    });
});
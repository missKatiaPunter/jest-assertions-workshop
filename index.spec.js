const { minVal, fizzBuzz, timesTwo, returnObjects } = require('./index');
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
    it('Shoul get a minimal value from an array', () => {
        expect(minVal([1,2,3,4])).toBe(1);
        expect(minVal([3,3,3,3])).toBe(3);
        expect(()=>{minVal([])}).toThrow('Array cannot be empty');
    });
});

describe('Testing function timesTwo()', () => {
    it('returns an array where numbers are doubled', () => {
        expect(Array.isArray(timesTwo([1,2]))).toBe(true);
        expect(timesTwo([1,2])).toEqual([2,4]);
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


describe('Testing function returnObjects()',()=>{
    it('returns an array as a result of the function',()=>{
        expect(Array.isArray(returnObjects(["Bob","Harry"]))).toBe(true);
    });
    it('check if each object of the array has property name and id',()=>{
        returnObjects(['Bob','Harry']).map(obj=>{expect(obj).toHaveProperty('name');});
        returnObjects(['Bob','Harry']).map(obj=>{expect(obj).toHaveProperty('id');});
    });
    it('check if each item of the array is a valid object',()=>{
        returnObjects(['Bob','Harry']).map(obj=>{expect(obj).toBeInstanceOf(Object);});
    });
});


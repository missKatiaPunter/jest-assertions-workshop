const { minVal, fizzBuzz, timesTwo, returnObjects, removeBMW } = require('./index');

test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
    expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {
  
    it('Should throw an error if a parameter is not valid', () => {
     expect(()=> {
         minVal([])
     }).toThrow("enter a valid value"); 
    });
    it('Shoul return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });
  
    it('Should get a minimal value from an array', () => {
        expect(minVal([1,2,34,0,-12])).toBe(-12);
    });
  
});

describe('Testing function timesTwo()', () => {
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).toEqual([2,4]);
    });
});

describe('Testing function fizzBuzz()', () => {
    it('returns an array of the same length as a parameter', () => {
        expect(fizzBuzz(10)).toHaveLength(10);
    });
    it('returns an array with some fizz, buzz and fizzbuzz', () => {
        expect(fizzBuzz(3)).toContain('fizz');
        expect(fizzBuzz(5)).toContain('buzz');
        expect(fizzBuzz(15)).toContain('fizzbuzz');
    })
});

describe('Testing returnobjects()', () => {
    it('should return an array', () => {
        expect(returnObjects(['a','b'])).toBeInstanceOf(Object);
        expect(returnObjects(['a','b'])[0]).toHaveProperty('name');        
    });
});

describe('testing removeBMW()', () => {
    it('should throw an error if a parameter is invalid ', () => {
        expect(()=>{
            removeBMW(100)
        }).toThrow("This program only works for text.");
    });
    it('should remove bmw', () => {
        expect(removeBMW('Nobmw')).toBe('No');
    });
});
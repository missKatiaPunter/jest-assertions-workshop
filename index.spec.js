const { minVal, fizzBuzz, timesTwo, returnObjects, removeBMW } = require('./index');
test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
    expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {

    it('Should throw an error if perameter empty', () => {
        expect(() => {
          minVal();
        }).toThrow("Error: Parameter is empty");
    });

    it('Should throw an error if array empty', () => {
        expect(() => {
          minVal([]);
        }).toThrow("Error: Array is empty");
    });

    it('Should return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });

    it('Should get a minimal value from an array', () => {
        expect(minVal([2,-3,4,-5,10,4,-12])).toBe(-12);
    });
  
});

describe('Testing function timesTwo()', () => {
    it('returns an array', () => {
        expect(timesTwo([2.5,2])).toBeInstanceOf(Array);
    });
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([2.5,2])).toStrictEqual([5,4]);
    });
});

describe('Testing function fizzBuzz()', () => {
    it('returns an array of the same length as a parameter', () => {
        expect(fizzBuzz(7)).toHaveLength(7);
    });
    it('returns an array with some fizz, buzz and fizzbuzz', () => {
        expect(fizzBuzz(3)).toContain('fizz');
        expect(fizzBuzz(5)).toContain('buzz');
        expect(fizzBuzz(15)).toContain('fizzbuzz');
    })
});


describe('Testing function returnObjects()', () => {
    it('Should return array of objects', () => {
        expect(returnObjects(['hi','bye'])).toBeInstanceOf(Object);
        expect(returnObjects(['hi','bye'])).toBeInstanceOf(Array);
        expect(returnObjects(['hi','bye'])[0]).toHaveProperty('name');
        expect(returnObjects(['hi','bye'])[1]).toHaveProperty('id');
    });
});



describe('Testing function removeBMW()', () => {
    it('Should throw an error if parameter is the wrong type', () => {
        expect(() => {
          removeBMW(1010101010);
        }).toThrow("Error: You should only enter text");
    });
});

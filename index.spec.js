const { minVal, fizzBuzz, timesTwo, returnObjects } = require('./index');

test('passes when value is NaN', () => {
	expect(NaN).toBeNaN();
	expect(1).not.toBeNaN();
	expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {	
	it('Shoul return a value of data type number', () => {
		expect(typeof minVal([1, 2, 34, 0, -12])).toBe('number');
		expect(minVal([1, 2, 34, 0, -12])).not.toBeInstanceOf(Object);
	});

	it('Should get a minimal value from an array', () => {
		expect(minVal([1, 2, 34, 0, -12])).toBe(-12);
	});

    it('Should return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });
    it('Should get a minimal value from an array', () => {
        expect(minVal([1,5,13,-10,-12])).toBe(-12);
    });   
    it('Should return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');           
    });
    it('Should get a minimal value from an array', () => {
        expect(minVal([2, -12])).toBe(-12);
    });
    it('Should throw error message if array is empty', () => {
        expect(() => {
        minVal([])
    }).toThrow("Please enter a parameter");
    });
});

describe('Testing function timesTwo()', () => {
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).toEqual([2,4]);
    });
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).not.toEqual([5,4]);
    });
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([1,2])).toBeInstanceOf(Array);
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
	});
});

describe('Testing returnobjects()', () => {
	it('should return an array', () => {
		expect(returnObjects(['a', 'b'])).toBeInstanceOf(Object);
		expect(returnObjects(['a', 'b'])[0]).toHaveProperty('name');
	});

    it('returns an array of the same length as a parameter', () => {
        expect(fizzBuzz(10)).toHaveLength(10);
    });
    it('returns an array with some fizz, buzz and fizzbuzz', () => {
        expect(fizzBuzz(3)).toContain('fizz');
        expect(fizzBuzz(15)).toContain('fizzbuzz');        
    })
});

//Work done in pairs in a break room
describe('Testing function returnObject', () => {
    it('Should return array of same length', () => {
        expect(returnObjects(['a','b','c'])).toHaveLength(3);
    });
    it('Should return an array', () => {
      expect(returnObjects(['a','b','c'])).toBeInstanceOf(Array); 
    });
    
    it('Each element of array should be an Object with name and id', () => {
      arrObj = returnObjects(['a','b','c'])
      for (i in arrObj){
        expect(returnObjects(['a','b','c'])[i]).toHaveProperty('name');
        expect(returnObjects(['a','b','c'])[i]).toHaveProperty('id');
        expect(returnObjects(['a','b','c'])[i]).toBeInstanceOf(Object);
        expect(returnObjects(['a','b','c'])[i]).not.toBeInstanceOf(Array);
      }
    });
    
    it('returns an array with elements as objects', () => {
        expect(returnObjects(['a','b','c'])).toEqual([{ name: 'a', id: 1 }, { name: 'b', id: 2 }, { name: 'c', id: 3 }]);
    });
});
const { minVal, fizzBuzz, timesTwo, returnObjects, removeBMW } = require('./index');


test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
	expect(NaN).toBeNaN();
	expect(1).not.toBeNaN();
	expect(typeof NaN).toBe('number');
});

describe('Testing function minVal()', () => {

    it('Should return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');
        expect(minVal([1,2,34,0,-12])).not.toBeInstanceOf(Object);
    });
    it('Should get a minimal value from an array', () => {
        expect(minVal([2,-3,4,-5,10,4,-12])).toBe(-12);
        expect(minVal([1,2,34,0,-12])).toBe(-12);
    });
});

describe('Testing function minVal()', () => {	
	it('Shoul return a value of data type number', () => {
		expect(typeof minVal([1, 2, 34, 0, -12])).toBe('number');
		expect(minVal([1, 2, 34, 0, -12])).not.toBeInstanceOf(Object);
	});
    it('Should get a minimal value from an array', () => {
        expect(minVal([1,5,13,-10,-12])).toBe(-12);
    });   
    it('Should return a value of data type number', () => {
        expect(typeof minVal([1,2,34,0,-12])).toBe('number');           
        expect(minVal([2, -1,3])).toBe(-1);
    });
    it('Should throw error message if array is empty', () => {
        expect(() => {
            minVal([])
        }).toThrow("Please enter a parameter");
    });
});

describe('Testing function timesTwo()', () => {

    it('returns an array', () => {
        expect(timesTwo([2.5,2])).toBeInstanceOf(Array);
    });
    it('returns an array where numbers are doubled', () => {
        expect(timesTwo([2.5,2])).toStrictEqual([5,4]);
    });
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


describe('Testing function returnObjects()', () => {
    it('Should return array of objects', () => {
        expect(returnObjects(['hi','bye'])).toBeInstanceOf(Object);
        expect(returnObjects(['hi','bye'])).toBeInstanceOf(Array);
        expect(returnObjects(['hi','bye'])[0]).toHaveProperty('name');
        expect(returnObjects(['hi','bye'])[1]).toHaveProperty('id');
    });
});

describe('testing removeBMW()', () => {
    it('Should throw an error if parameter is the wrong type', () => {
        expect(() => {
            removeBMW(1010101010);
        }).toThrow("Error: You should only enter text");
    });
	it('should remove bmw', () => {
		expect(removeBMW('Nobmw')).toBe('No');
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
});

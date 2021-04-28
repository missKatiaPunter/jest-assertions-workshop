// Test function minVal with one describe block and several tests and assertions
// Suggestion: you may want to check what data type is returned
// Refactor the function so that it does not allow to enter an empty array (throw)
// Test the refactored function

const minVal = arrVal =>{
    if(arrVal.length === 0){
        throw new Error ("enter a valid value");
    }
    return Math.min(...arrVal);
} 

// Test function fizzBuzz thoroughly
// Does it have a logic error?
// Refactor and test some more

const fizzBuzz = n => {
    let result = [];
    for(let i=1;i<n+1;i++){
        if(i%5===0 && i%3===0){
            result.push('fizzbuzz');
        } else if(i%3===0){
            result.push('fizz');
        } else if(i%5===0){
            result.push('buzz');
        } else{
            result.push(i);
        }
    }
  return result;
}

//Test function timesTwo with different tests and a single describe block
// You can use isInstanceOf to test if it returns an array
//Remember that toBe can only be used here on individual elements

const timesTwo = numbersToIncrease => numbersToIncrease.map(value => value*2);

//Test function returnObjects  with different tests and a single describe block
// You can use isInstanceOf to test if it returns an array
// You can use isInstanceOf to test each element in that array
// You can use toHaveProperty() to check each element of the returned array

const returnObjects = arrNames => arrNames.map((name, index) => ({name, id: index+1}));

// Test function removeBMW()
// Make sure you throw something

function removeBMW(str){
    if (typeof str !== 'string') {
        throw new Error("This program only works for text.");
    }
    return str.replace(/[bmw]/gi,'');
}

module.exports = { minVal, fizzBuzz, timesTwo, returnObjects,removeBMW };
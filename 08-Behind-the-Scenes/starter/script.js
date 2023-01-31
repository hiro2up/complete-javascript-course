'use strict';

console.log(this);

// For a declared function, the 'this' keyword in undefined
// This will also happen even if this function is inside a method
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// For an arrow function, the 'this' keyword takes the lexical value (parent - global scope, in this case), as arrow functions don't have the 'this' keyword
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

// For methods, the this keyword points to the object calling the method
const fabricio = {
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
fabricio.calcAge();

// For a function inside a method, the function rule still aplies. The this keyword will be undefined.
// Same applies for an arrow function inside an object. The object is not a block, so the arrow function does not get the this keywork and it will use the global scope
const dave = {
  firstName: 'Dave',
  year: 1972,
  calcAge: function () {
    console.log(2037 - this.year);

    // A solution would be using a variable to preserve the this keyword in the current scope
    //const self = this; // self or that are used
    // Or basically using an arrow function would produce the same result. No need for an extra variable
    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

dave.calcAge();

// Arguments keyword - not longer used in modern JavaScript
// The 'arguments' keyword exists for normally defined functions, but not for arrow functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// For arrow functions it returns an error that it's not defined

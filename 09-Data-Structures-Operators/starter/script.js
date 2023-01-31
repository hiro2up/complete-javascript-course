'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // method for testing spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  // method for testing rest operator and parameters - unknown number of parameters amd optional
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////// CODEBLOCK Destructuring arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // output will be "2 3 4". This way each value from the array is assigned to the variable in that order

// Another example
const [first, second] = restaurant.categories;
console.log(first, second); // Output will be "Italian Pizzeria"

// You can also skip one or more values by adding empty spaces between commas
let [primeiro, , segundo] = restaurant.categories;
console.log(primeiro, segundo); // Output will be "Italian Vegetarian"

// Switching variables without creating a temporary variable
[primeiro, segundo] = [segundo, primeiro];
console.log(primeiro, segundo); // Output will be "Vegetarin Italian"

// Destructuring an array returned by a method/function
console.log(restaurant.order(2, 0)); // Will return ["Garlic Bread", "Pizza"]
const [starter, main] = restaurant.order(2.0);
console.log(starter, main); // Will return "Garlic Bread Pizza" as strings individually

// With a nested array - nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; // For example, we don't want the 4
console.log(i, j); // Will return 2 [5,6]

const [m, , [n, o]] = nested; // For example, we want the values separately
console.log(m, n, o); // Will return 2 5 6

// When we don't know the length of the array, we can set default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // Will return 8 9 undefined
const [s = 1, t = 1, u = 1] = [8, 9];
console.log(s, t, u); // Will return 8 9 1

////// CODEBLOCK Destructing objects
// For objects, we use curly braquets and specify the name of the property
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Will return the properties

// You can also specify a new name for the new variables:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // Will return the same properties, but the variables have a new name

// Default values
// You can also set default variables when trying to get a property that might not exist in the object - the return of an API call, for example
// This example combines setting a default value and settig a new variable name for the second property
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // Will return an empty array for menu (as the property does not exist) and the property for starters.

// Mutating (reassigning, override) variables using values in objects
// Let's say we want EXISTING a and b to have the object's values
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// We want a = obj.a and b = obj.b // We wrap it in parenthesis, as we cannot use let or const in the beginning as the variables already exist
// And we cannot start with '{' as Js will understand that it is a block of code instead
/*
({a,b}) = obj;
console.log(a,b); // Will return 23 7
*/

// Nested objects
const {
  fri: { open: op, close: clo },
} = openingHours;
console.log(op, clo); // WIll return 11 23

// You can also use destructuring when passing an object as the only argument of a method/function --- SEE orderDelivery method in the beginning
// The default values can also be set for the argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // The output will be "Order received: Garlic Bread and Risotto will be delivered to Vis del Sole, 21 at 22:30"

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 2,
}); // the output will be based on time and mainIndex's default values

// CODEBLOCK
///////////// Spread operator (...) - UNPACKS AN ARRAY (right side of = operator)
const myArray = [7, 8, 9];
const badNewAray = [1, 2, myArray[0], myArray[1], myArray[2]];
console.log(badNewAray); // Will return [1, 2, 7, 8, 9]

const newArray = [1, 2, ...arr];
console.log(newArray); // Will return the same, but with the spread operator

//You can also return each value individually without using a for loop:
console.log(...newArray); // Will return 1 2 7 8 9 (not in an array)

// Example: You can use it to add a new item to an array
// However, keep in mind that, here, you create a new array, you don't add it to the existing one
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // Will return the array with 'Gnocci added at the end'

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const joinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//// The spread operator works in iterables (arrays, strings, maps, sets). Object is not an iterable, however, will also work only after ES18 release
// Note that the operator can only be used when building an array or passing values into a function
// String
const str = 'Fab';
const letters = [...str, ' ', 'N.'];
console.log(letters); // Will return ['F', 'a', 'b', ' ', 'N.']
console.log(...str); // Will return F a b

// Cannot be used with template literal - it does not work - throws unexpected token as it is not a place that expects multiple values separated by a comma
// console.log(`${...str} Nascimento`);

// In a function
const ingredients = [
  prompt("Let's make pasta! Ingredient 1:"),
  prompt('Ingredient 2:'),
  prompt('Ingredient 3:'),
];
restaurant.orderPasta(...ingredients); // Will return the message from the function with the ingredients you input

// Objects
const newRestaurant = { ...restaurant, founder: 'Fabricio', foundedIn: '2015' }; // Remember that the order does not matter for objects

// Creating a shallow copy without the .assign static method
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); // Will return 'Classico Italiano'
console.log(restaurantCopy.name); // Will return 'Ristorante Roma'

// CODEBLOCK
////////// Rest Pattern and Parameters - PACK ELEMENTS INTO AN ARRAY (left side of = operator)

// 1. Distructuring
const [v1, v2, ...others] = [1, 2, 3, 4, 5];
console.log(v1, v2, others); // Will return 1 2 [3,4,5]

// Rest element should always be included at the end of the assignment because otherwise JS won't know where to stop. If not the last, it will throw an error
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Will return Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'] (Pasta has been skipped due to the blank space - distructuring)

// Objects
// Separating the weekdays opening hours into one object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // Will return {thu: {...}, fri: {...}}

// 2. Functions
// Making it work without specifying the number of arguments
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); // returns 5
add(5, 3, 7, 2); // returns 17
add(4, 5, 2, 4, 6, 8, 3); // returns 32
const myOtherArray = [2, 3, 5];
add(...myOtherArray); // returns 10

// Order pizza function
/*
orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
*/
restaurant.orderPizza('mushrooms', 'onions', 'olives'); // Will return mushrooms ['onions', 'olives']
restaurant.orderPizza('cheese'); // will return cheese []

// CODEBLOCK
////////// Short Circuiting (&& and ||)
// Those operators can
// - Use any data type
// - Return any data type
// - Short-circuiting

// The OR operator ||
// will always return the first truthy value
console.log(3 || 'Fabricio'); // will return 3
console.log('' || 'Fabricio'); // will return Fabricio
console.log(true || 0); // will return true
console.log(undefined || null); // will return null - both are falsy, so it returns the last one
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns Hello

// Setting values without having to use the ternary operator or if/else
// With ternary
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // returns 10
// With short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // returns 10
// Note here that numGuests does not exist so it works, but if it existed and it was 0, it'd still set the variable to 10 as 0 is falsy, but the result would not be the expected. The solution will come with short-circuiting with the nullish coalescing operator (??)

// The AND operator &&
// will always return the first falsy value (oposite of OR)
console.log(0 && 'Fabricio'); // returns 0
console.log(7 && 'Fabricio'); // will return Fabricio - both are truthy, so it returns the last one
console.log('Hello' && 23 && null && 'Fabricio'); // returns null

// Practical example with &&
// With if block
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// With short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
// WARNING: just an example - replacing all if statements with this might make your code hard to read

// The nullish coalescing operator (??) - introduced in ES2020
// It works with the concept of nullish values instead of falsy values
// Nullish values: null and undefined
// Returns the first non-nullish value
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // returns 0

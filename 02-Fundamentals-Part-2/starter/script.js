'use strict';

/*
let calcAvrage = (a, b, c) => (a + b + c) / 3;

// TEST DATA 1: Dolphins 44 23 71 / Koalas 65 54 49
// TEST DATA 2: Dolphins 85 54 41 / Koalas 23 34 27

let dolphinsAvg = calcAvrage(65, 54, 49);
let koalasAvg = calcAvrage(23, 34, 27);

let checkWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`);
  } else {
    console.log("No winners!");
  }
};

checkWinner(dolphinsAvg, koalasAvg);
*/

/*
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

const bills = [100, 200, 350];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Shimerdtman",
  age: 40,
  profession: "teacher",
  hasDriversLicense: true,
  myDesc: function () {
    this.description = `${this.firstName} is a ${this.age}-year old ${
      this.profession
    }, and he ${
      this.hasDriversLicense ? "has" : "does not have"
    } a driver's license.`;
    return this.description;
  },
};

console.log(jonas.myDesc());
*/

// CODING CHALLENGE 3?
// const calcBMI = (mass, height) => {
//   return mass / height ** 2;
// };

// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// CODING CHALLENGE #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

const calcAvrage = (arr) => {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(`The bills are: ${bills}`);
console.log(`The tips are: ${tips}`);
console.log(`The totals are: ${totals}`);

console.log(`The bills average is: ${calcAvrage(bills)}`);
console.log(`The tips average is: ${calcAvrage(tips)}`);
console.log(`The totals average is: ${calcAvrage(totals)}`);
*/

// BUG FIXME TODO
// console.log('hi');

// CODING CHALLENGE
let temps1 = [17, 21, 23];
let temps2 = [12, 5, -5, 'hi', 0, 4];

const printForecast = (temps) => {
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    console.log(`${temps[i]}\u00B0 in ${i + 1} day(s)`);
  }
};

printForecast(temps1);
printForecast(temps2);

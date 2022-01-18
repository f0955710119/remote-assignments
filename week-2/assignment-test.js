/*
-----------SECTION tesing -----------
*/
const max = require('./assignment-1.js');
const { calculate, CalcObj1, calcObj2 } = require('./assignment-2.js');
const { dataAssignment, avg } = require('./assignment-3.js');
const { twoSum } = require('./assignment-advanced-algo');

// assignment 1: create a max()
max([1, 4, 6, 2]);

// assignment 2: create at least two objects
const object1 = new CalcObj1('+');
calculate(object1);
const object2 = calcObj2('-');
calculate(object2);

// assignment 3: show the average price of all products
avg(dataAssignment);

// assignment advanced: sum algo
twoSum([1, 2, 3, 4, 1, 4], 5);

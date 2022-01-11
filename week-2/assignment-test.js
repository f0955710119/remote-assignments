/*
-----------SECTION tesing -----------
*/
const max = require('./assignment-1.js');
const { calculate, calculateAnother } = require('./assignment-2.js');
const { dataAssignment, avg } = require('./assignment-3.js');
const { twoSum } = require('./assignment-advanced-algo');

max([1, 4, 6, 2]);
calculate({ op: '+', n1: 1, n2: 2 });
calculateAnother({ op: '+', n1: 1, n2: 2 });
avg(dataAssignment);
twoSum([1, 2, 3, 4, 1, 4], 5);

function calculate(args) {
  let result;
  if (args.op === '+') {
    result = args.n1 + args.n2;
  } else if (args.op === '-') {
    result = args.n1 - args.n2;
  } else {
    result = 'Not supported';
  }
  console.log(`The result of this operation is ${result}.`);
  return result;
}
// class sugar syntax
class CalcObj1 {
  n1 = 1;
  n2 = 2;
  constructor(op) {
    this.op = op;
  }
}
// function return object
function calcObj2(op) {
  return {
    op,
    n1: 1,
    n2: 2,
  };
}

module.exports = {
  calculate,
  CalcObj1,
  calcObj2,
};

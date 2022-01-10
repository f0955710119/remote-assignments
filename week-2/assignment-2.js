function calculate({ ...args }) {
  let result;
  if (args.op === '+') {
    result = args.n1 + args.n2;
  } else if (args.op === '-') {
    result = args.n1 - args.n2;
  } else {
    result = 'Not supported';
  }
  return result;
}

function calculateAnother(args = { op, n1, n2 }) {
  let result;
  if (args.op === '+') {
    result = args.n1 + args.n2;
  } else if (args.op === '-') {
    result = args.n1 - args.n2;
  } else {
    result = 'Not supported';
  }
  return result;
}

module.exports = {
  calculate,
  calculateAnother,
};

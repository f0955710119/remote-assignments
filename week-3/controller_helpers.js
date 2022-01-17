exports.sum = (queryNumber) => {
  const numberArray = `${queryNumber}`.split('');
  const sum = numberArray.reduce(
    (accNumber, curNumber) => (accNumber += +curNumber),
    0
  );
  return {sum,numberArray};
};

const helper = require('../controller_helpers');

exports.getData = (req, res) => {
  const queryNumber = +req.query.number;

  if (!Number.isInteger(queryNumber)) {
    res.status(404).json({
      status: 'fail',
      statusCode: 404,
      message: 'Wrong Parameter',
    });
  }

  const { sum, numberArray: intArray } = helper.sum(queryNumber);

  res.status(200).json({
    status: 'success',
    statusCode: 200,
    data: {
      sum,
      intArray,
    },
  });
};

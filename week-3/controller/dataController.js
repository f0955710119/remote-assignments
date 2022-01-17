// const helper = require('../controller_helpers');
exports.getData = (req, res) => {
  // get query
  const queryNumber = req.query.number;

  // status for missing query params
  if (!queryNumber) {
    res.status(400).json({
      status: 'fail',
      statusCode: 400,
      message: 'Lack of Parameter',
    });

    // status for invalid query
  } else if (!Number.isInteger(+queryNumber)) {
    res.status(400).json({
      status: 'fail',
      statusCode: 400,
      message: 'Wrong Parameter',
    });

    // 200 success status to send back the sum of ints from query
  } else {
    const int = +queryNumber;
    const sum = ((int + 1) * int) / 2;
    res.status(200).json({
      status: 'success',
      statusCode: 200,
      data: {
        sum,
      },
    });
  }
};

exports.visitHomePage = (req, res) => {
  res.status(200).render('index.html');
};

exports.visitSumPage = (req, res) => {
  res.status(200).render('sum.html');
};

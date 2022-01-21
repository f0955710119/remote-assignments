exports.visitHomePage = (req, res) => {
  return res.render('index', { title: 'Welcome My Server' });
};

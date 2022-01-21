exports.checkCookies = (req, res) => {
  if (req.cookies.NAME) {
    return res.render('myName', { title: 'My Name Page' });
  } else {
    return res.redirect(301, '/trackName');
  }
};

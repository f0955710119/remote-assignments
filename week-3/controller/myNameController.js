exports.checkCookies = (req, res) => {
  if (req.cookies.NAME) {
    return res.redirect(301, '/myName.html');
  } else {
    return res.redirect(301, '/trackName');
  }
};

exports.signIn = (req, res) => {
  const { name } = req.query;

  return res
    .status(201)
    .cookie('NAME', name, {
      expires: new Date(Date.now() + 3600 * 1000),
      path: '/',
      // httpOnly: true,
      // maxAge: 3600 * 1000,
      // secure: true,
    })
    .redirect(301, '/myName.html');
};

exports.visitPage = (req, res) => {
  return res.redirect(301, '/trackName.html');
};

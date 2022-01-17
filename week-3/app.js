const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/').get((req, res) => {
  res.status(200).send('Hello My Server!');
});

app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

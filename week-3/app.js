const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const dataRouter = require('./routes/dataRoutes');
const sumRouter = require('./routes/sumRoutes');

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.route('/index.html').get((req, res) => {
  res.status(200).render('index.html');
});
app.route('/').get((req, res) => {
  res.status(200).send('Hello My Server!');
});
app.use('/getData', dataRouter);
app.use('/sum.html', sumRouter);

app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dataRouter = require('./routes/dataRoutes');
const sumRouter = require('./routes/sumRoutes');

// instance
dotenv.config();
const port = process.env.PORT;
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// server-assignment-1
app.route('/').get((req, res) => {
  res.status(200).send('Hello My Server!');
});

// routes
app.use('/getData', dataRouter);
app.use('/sum.html', sumRouter);

// port
app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const dataRouter = require('./routes/dataRoutes');
const router = require('./routes/dataRoutes');

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.route('/').get((req, res) => {
  res.status(200).send('Hello My Server!');
});

app.use('/getData', dataRouter);

app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

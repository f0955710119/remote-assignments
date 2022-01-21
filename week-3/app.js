const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const dataRouter = require('./routes/dataRoutes');
const homeRouter = require('./routes/homeRoutes');
const sumRouter = require('./routes/sumRoutes');
const myNameRouter = require('./routes/myNameRoutes');
const trackNameRouter = require('./routes/trackNameRoutes');

// instance
dotenv.config();
const port = process.env.PORT;
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// engine
app.set('view engine', 'pug');

// routes
app.use('/', homeRouter); // server-assignment-1
app.use('/getData', dataRouter);
app.use('/sum', sumRouter);
app.use('/myName', myNameRouter);
app.use('/trackName', trackNameRouter);

// port
app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

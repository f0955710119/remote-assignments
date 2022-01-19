const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const dataRouter = require('./routes/dataRoutes');
const homeRouter = require('./routes/homeRoutes');
const myNameRouter = require('./routes/myNameRoutes');
const trackNameRouter = require('./routes/trackNameRoutes');

// instance
dotenv.config();
const port = process.env.PORT;
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(cookieParser());
// routes
// server-assignment-1
app.use('/', homeRouter);
app.use('/getData', dataRouter);
app.use('/myName', myNameRouter);
app.use('/trackName', trackNameRouter);

// port
app.listen(port, () => {
  console.log('Server on > http://localhost:3000/ ');
});

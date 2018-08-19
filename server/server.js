const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const availableRouter = require('./routes/available.router');
const addRouter = require('./routes/add.router')
const availableRentalsRouter = require('./routes/availableRentals.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup routes

app.use('/available', availableRouter);
app.use('/add', addRouter);
app.use('/availableRentals', availableRentalsRouter);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
});
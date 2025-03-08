const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.routes');
//const connectTodb = require('./db/db');

//onnectTodb();

const connect = require('./db/db');
connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRouter);

module.exports = app;
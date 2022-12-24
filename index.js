/**
 * Required External Modules
 */
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();

/**
 * Required Routes
 */
const userRouts = require('./routes/user');
const postRouts = require('./routes/post');

/**
 * App Variables
 */
const connectDB = require('./db/connect');
const port = process.env.PORT;

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/user', userRouts);
app.use('/api/v1/post', postRouts);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

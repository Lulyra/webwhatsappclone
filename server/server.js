import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import users from './routes/api/users.js';

// Initiation
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
const port = process.env.PORT || 5000;

// Connect DB
mongoose
  .connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Db connected.'))
  .catch((error) => console.log(error));

// Use Routes
app.use('/api/users', users);

app.listen(port, () => console.log(`Running on ${port}`));

// Importing necessary libraries/modules
const express = require('express');
require('dotenv').config();
const db = require('./config/connection');
// const mongoose = require('mongoose');
const routes = require('./routes/index')


// Express application instance created
const app = express();

// Server PORT set
const PORT = process.env.PORT || 3001;

// Configuring middleware for handling incoming JSON & URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Server listening on the specified route
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});

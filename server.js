// Importing necessary libraries/modules
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const db = require('./config/connection');

// Express application instance created
const app = express();
// Server PORT set
const PORT = process.env.PORT || 3001;
// Configuring middleware for handling incoming JSON & URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server listening on the specified route

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// // Server listening on the specified route
// app.listen(PORT, () => {
//   console.log('Server is running on http://localhost:${PORT}');
// });
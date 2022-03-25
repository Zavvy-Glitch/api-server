'use strict';

const express = require('express');
const Icollection = require('./collection/lib/Icollection.js');

const app = express();

app.use(express.json());

// we need to define a people route
app.use(Icollection);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on port', PORT);
    });
  },
};
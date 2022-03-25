'use strict';

const { sequelize } = require('./src/collection');

sequelize.sync() // that creates all associated tables and makes sure our connection is good to go
  .then(() => {
    console.log('Up and Running!');
  })
  .catch(err => {
    console.error(err);
  });
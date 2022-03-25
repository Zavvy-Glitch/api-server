'use strict';

const clothingSchema = (sequelize, DataTypes) => {

  return sequelize.define('clothes', {
    brand: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    size: {
      type: DataTypes.STRING,
    }
  })
}

module.exports = clothingSchema;
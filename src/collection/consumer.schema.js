
'use strict';

const consumerSchema = (sequelize, DataTypes) => {

  return sequelize.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}

module.exports = consumerSchema;
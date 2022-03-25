'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Icollection = require('./lib/Icollection.js');
const clothingSchema = require('./clothes.chema.js');
const consumerSchema = require('./consumer.schema.js');
const orderSchema = require('./order.schema.js');

const sequelize = new Sequelize('sqlite::memory');

const ClothingModel = clothingSchema(sequelize, DataTypes);
const ConsumerModel = consumerSchema(sequelize, DataTypes);
const OrderModel = orderSchema(sequelize, DataTypes);

ConsumerModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id'});
OrderModel.belongsTo(ConsumerModel, { foreignKey: 'customerId', targetKey: 'id'});

ClothingModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id'});
OrderModel.belongsTo(ClothingModel, {foreignKey: 'customerId', sourceKey: 'id'});

module.exports = {
  sequelize,
  clothingCollection:  new Icollection(ClothingModel),
  orderCollection:  new Icollection(OrderModel),
  consumerCollection:  new Icollection(ConsumerModel),
}
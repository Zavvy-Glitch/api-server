'use strict';

const { sequelize, clothingCollection, consumerCollection, orderCollection } = require('../src/collection');


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the REST API', () => {
  
  test('Should create an item of clothing', async () => {
    const response = await clothingCollection.create({
      brand: 'fubu',
      amount: 1,
      size: 'Medium'
    })
    expect(response.brand).toEqual('fubu');
    expect(response.amount).toEqual(1);
    expect(response.size).toEqual('Medium');
  })

  test('Should create a consumer', async () => {
    const response = await consumerCollection.create({
      name:'Test'
    })
    expect(response.name).toEqual('Test')
  })

  test('Should read consumer and include order', async () => {
   
  let testConsumer = await consumerCollection.create({ name: 'Test' });
  let testOrder = await orderCollection.create({ product: 'Shirt', customerId: testConsumer.id});

  let consumerOrder = await consumerCollection.read(testConsumer.id, { include: orderCollection.model});

  expect(consumerOrder.name).toEqual('Test');
  expect(consumerOrder.orders).toBeTruthy();
  expect(consumerOrder.orders[0].product).toEqual(testOrder.product)
  })

  test('Should read clothing and include order', async () => {

    let testClothing = await clothingCollection.create({ brand: 'fubu', amount: 2, size: 'medium'});
    let testOrder = await orderCollection.create({ product: 'Track Suit', customerId: testClothing.id});

    let clothingOrder = await clothingCollection.read(testClothing.id, { include: orderCollection.model});

    expect(clothingOrder.brand).toEqual('fubu');
    expect(clothingOrder.amount).toEqual(2);
    expect(clothingOrder.size).toEqual('medium');
    expect(clothingOrder.orders).toBeTruthy();
    expect(clothingOrder.orders[1].product).toEqual(testOrder.product);
  })

  test('Should delete an item of clothing', async () => {
    let testCloth = await clothingCollection.create({
      brand: 'fubu',
      amount: 4,
      size: 'Large'
    })
    let response = await clothingCollection.delete(testCloth.id);

    expect(response.brand).toEqual('fubu');
    expect(response.amount).toEqual(4);
    expect(response.size).toEqual('Large');
  })

  test('Should delete a consumer', async () => {
    let testConsumer = await consumerCollection.create({
      name: 'Tester'
    })
    let response = await consumerCollection.delete(testConsumer.id);

    expect(response.name).toEqual('Tester');
  })
})
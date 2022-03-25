'use strict';

const express = require('express');

const { consumerCollection } = require('../collection');

const router = express.Router();

router.post('/consumer', async (req, res) => {
  let newConsumer = req.body;
  let responseData = await consumerCollection.create(newConsumer);
  res.status(200).send(responseData)
});

router.get('/consumer', async (req, res, next) => {
  let allConsumers = await consumerCollection.findAll();
  res.status(200).send(allConsumers);
});

router.get('/consumer/:id', async (req, res, next) => {
  let oneConsumer = await consumerCollection.findByPk(parseInt(req.params.id));
  res.status(200).send(oneConsumer);
})

router.put('/consumer/:id', async (req, res, next) => {
  let updateConsumer = await consumerCollection.update({
    name: req.body.name,
    }, { where: { id: req.params.id }
  });
  res.status(200).send(updateConsumer);
})

router.delete('/consumer/:id', async (req, res, next) => {
  let query = { where: { id: (parseInt(req.params.id)) }}
  let consumerToDelete = await consumerCollection.findOne(query);
  await consumerCollection.destroy(query);
  res.sendStatus(200).send(consumerToDelete);
})

module.exports = router;
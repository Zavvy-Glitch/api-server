'use strict';

const express = require('express');

//Do these routes need to pull from Icollection.js???
const { clothingCollection } = require('../collection');

const router = express.Router();

router.post('/clothing', async (req, res) => {
    let newClothes = req.body;
    let responseData = await clothingCollection.create(newClothes);
    res.status(200).send(responseData);
  });

router.get('/clothing', async (req, res) =>{
  let allClothes = await clothingCollection.findAll();
  res.status(200).send(allClothes);
})

router.get('/clothing/:id', async (req, res) => {
  let oneCloth = await clothingCollection.findByPk(parseInt(req.params.id));
  res.status(200).send(oneCloth);
})

router.put('/clothing/:id', async (req, res, next) => {
  let updateClothes = await clothingCollection.update({
    brand: req.body.name,
    amount: req.body.hue,
    size: req.body.size,
    }, { where: {id: req.params.id}
  });
  res.status(200).send(updateClothes);

router.delete('/clothing/:id', async (req, res, next) => {
  const { id } = req.params
  let deleteClothes = await clothingCollection.delete(id);
  res.send(deleteClothes);
})

})

module.exports = router;



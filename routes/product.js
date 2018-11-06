const express = require('express');

const Product = require('../models/Product');

const router = express.Router();

router.get('/:productId', (req, res) => {
  Product.findById(req.params.productId, (err, foundProduct) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.json(foundProduct);
    }
  });
});

router.post('/', (req, res) => {
  var newProduct = new Product();

  newProduct.name = req.body.name;
  newProduct.description = req.body.description;

  newProduct.save((err, createdProduct) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        createdProduct
      });
    }
  });
});

router.delete('/:productId', (req, res) => {
  Product.findByIdAndDelete(req.params.productId, (err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.json(deletedProduct);
    }
  });
});

router.get('/', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.json(foundProducts);
    }
  })
});

module.exports = router;
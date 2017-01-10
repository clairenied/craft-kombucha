const db = require('APP/db');
const Product = db.model('products');
const ProductType = db.model('producttypes');
const Review = db.model('reviews');
const User = db.model('users');

module.exports = require('express').Router()
  // Get all products
  .get('/', (req, res, next) =>
    Product.findAll({
      // Eagerly load products' type
      // (Don't need reviews if rating is stored on product model)
      include: [ProductType],
    })
    .then(products => res.json(products))
    .catch(next))
  // Add new product
  .post('/', (req, res, next) =>
    Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next))
  // Get one product by ID
  .get('/:id', (req, res, next) =>
    Product.findOne({
      where: {
        id: req.params.id,
      },
      // Eagerly load product's type and reviews
      include: [ProductType, {
        model: Review,
        // Eagerly load the user who wrote each review
        include: [User],
      }],
    })
    .then(product => res.json(product))
    .catch(next));

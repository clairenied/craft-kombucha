const db = require('APP/db');
const Product = db.model('products');
const ProductType = db.model('producttypes');
const Review = db.model('reviews');
const User = db.model('users');

module.exports = require('express').Router()
  // Route parameter middleware for product id
  .param('productId', (req, res, next, productId) => {
    req.product = Product.findOne({
      where: {
        id: productId,
      },
      // Eagerly load product's type and reviews (and authors of reviews)
      include: [{
        model: ProductType,
        include: [{
          model: Review,
          include: [User]
        }]
      }]
    });
    next();
  })
  // Get all products
  .get('/', (req, res, next) =>
    Product.findAll({
      // Eagerly load products' type
      // (Don't need reviews if rating is stored on product model)
      include: [ProductType],
    })
    .then(products => {  
      res.json(products)})
    .catch(next))
  // Add new product
  .post('/', (req, res, next) =>
    Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next))
  // Get one product by ID
  .get('/:productId', (req, res, next) => {
    req.product
    .then(product => res.json(product))
    .catch(next);
  })
  // Get reviews for one product
  .get('/:productId/reviews', (req, res, next) =>
    req.product
    .then(product => product.producttype)// to test when associations are complete
    .then(pt=>pt.getReviews())
    .then(reviews=>res.json(reviews))
    .catch(next));

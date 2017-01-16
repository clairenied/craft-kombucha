const db = require('APP/db');
const Product = db.model('products');
const Review = db.model('reviews');
const User = db.model('users');

module.exports = require('express').Router()
  // Route parameter middleware for review id
  .param('reviewId', (req, res, next, reviewId) => {
    req.review = Review.findOne({
      where: {
        id: reviewId,
      },
      // Eagerly load reviews's type and productType and User
      include: [{all:true}]
    });
    next();
  })
  
  // Get all reviews
  .get('/', (req, res, next) =>
    Review.findAll({
      include: [{all:true}],
    })
    .then(reviews => {  
      res.json(reviews)})
    .catch(next))
  // Add new review
  .post('/', (req, res, next) =>{
    console.log("REQ",req.body)
    Review.create(req.body)
    .then(review => res.status(201).json(review))
    .catch(next)
  })

  .get('/:reviewId', (req, res, next) => {
    req.review
    .then(review => res.json(review))
    .catch(next);
  })

  .delete('/:reviewId', (req, res, next) => {
    req.review
    .then (review => review.destroy())
    .catch(next)
  })
  


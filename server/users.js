const db = require('APP/db'); // eslint-disable-line
const User = db.model('users');
const Address = db.model('addresses');
const Order = db.model('orders');
const Review = db.model('reviews');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

module.exports = require('express').Router()
  // Route parameter middleware for id
  .param('userId', (req, res, next, userId) => {
    req.user = User.findOne({
      where: { id: userId },
      // Eagerly load user's addresses, orders, and reviews
      include: [Address, Order, Review],
    });
    next();
  })
  // Get all users
  .get('/', forbidden('only admins can list users'), (req, res, next) =>
    User.findAll()
    .then(users => res.json(users))
    .catch(next))
  // Add new user
  .post('/', (req, res, next) =>
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next))
  // Get one user by ID
  .get('/:userId', mustBeLoggedIn, (req, res, next) =>
    req.user
    .then(user => res.json(user))
    .catch(next))
  // Get all orders of one user
  .get('/:userId/orders', (req, res, next) =>
    req.user
    .then(user =>
    user.orders // if eager loading in .param works
    //
    // ONLY IF EAGER LOADING DOESN'T WORK
    //   Order.findAll({
    //     where: {
    //       userId: user.id,
    //     },
    //   })
    )
    .then(orders => res.json(orders))
    .catch(next))
  // Get all reviews written by one user
  .get('/:userId/reviews', (req, res, next) =>
    req.user
    .then(user =>
      user.reviews // if eager loading in .param works
      //
      // ONLY IF EAGER LOADING DOESN'T WORK
      // Review.findAll({
      //   where: {
      //     userId: user.id,
      //   },
      // })
    )
    .then(reviews => res.json(reviews))
    .catch(next));


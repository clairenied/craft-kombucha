const db = require('APP/db');
const User = db.model('users');
const Address = db.model('addresses');
const Order = db.model('orders');
const Review = db.model('reviews');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

module.exports = require('express').Router()
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
  .get('/:id', mustBeLoggedIn, (req, res, next) =>
    User.findOne({
      where: {
        id: req.params.id,
      },
      // Eagerly load user's addresses, orders, and reviews
      include: [Address, Order, Review],
    })
    .then(user => res.json(user))
    .catch(next));

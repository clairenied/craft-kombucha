const db = require('APP/db'); // eslint-disable-line
const User = db.model('users');
const Address = db.model('addresses');
const Order = db.model('orders');
const LineItem = db.model('lineitems');
const Review = db.model('reviews');

// const async = require('async');

const { mustBeLoggedIn, mustBeAdmin, forbidden } = require('./auth.filters');

module.exports = require('express').Router()
  // Route parameter middleware for user id
  .param('userId', (req, res, next, userId) => {
    req.oneUser = User.findOne({
      where: { id: userId },
      // Eagerly load user's addresses, orders, and reviews
      include: [
        { model: Address, as: 'billingAddress' },
        { model: Address, as: 'shippingAddress' },
        Order,
        Review
      ],
    });
    next();
  })

  // Route parameter middleware for order id
  .param('orderId', (req, res, next, orderId) => {
    req.order = Order.findOne({
      where: { id: orderId },
      // Eagerly load order's line items and addresses
      include: [
        LineItem,
        { model: Address, as: 'billTo' },
        { model: Address, as: 'shipTo' },
      ],
    });
    next();
  })

  // Get all users
  .get('/', (req, res, next) =>
    User.findAll({ include: [{ model: Address, as: 'billingAddress' }] })
    .then(users => res.json(users))
    .catch(next))

  // Add new user
  .post('/', async (req, res, next) => {
    const { userInfo, addressInfo } = req.body;

    // Build address instance
    const address = await Address.build(addressInfo);

    // Build user instance
    const [user, built] = await User.findOrBuild({
      where: { email: userInfo.email },
      defaults: userInfo,
    });

    // If user instance was newly built, associate user and address
    if (built) {
      await address.save();
      await user.save();
      await user.setBillingAddress(address);
      res.json(user);
    } else {
      res.status(403).send('User already exists');
    }
  })

  // Get one user by ID
  .get('/:userId', mustBeLoggedIn, (req, res, next) =>
    req.oneUser
    .then(user => res.json(user))
    .catch(next))

  // Update one user by ID
  .put('/:userId', mustBeAdmin, (req, res, next) =>
    req.oneUser
    .then(user => user.update(req.body))
    .then(() => {
      res.status(201).send();
    })
    .catch(next))

  // Get all orders of one user
  .get('/:userId/orders', (req, res, next) =>
    req.oneUser
    .then(user => user.orders)
    .then(orders => res.json(orders))
    .catch(next))

  // Get specific order of one user
  .get('/:userId/orders/:orderId', (req, res, next) =>
    req.order
    .then(order => res.json(order))
    .catch(next))

  // Get all reviews written by one user
  .get('/:userId/reviews', (req, res, next) =>
    req.oneUser
    .then(user => user.reviews)
    .then(reviews => res.json(reviews))
    .catch(next));

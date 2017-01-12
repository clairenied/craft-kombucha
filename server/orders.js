const db = require('APP/db');
const Product = db.model('products');
const ProductType = db.model('producttypes');
const Review = db.model('reviews');
const User = db.model('users');
const Order = db.model('orders');
const LineItem = db.model('lineitems');
// const Order = require('../db/models/order');

module.exports = require('express').Router()
  .param('orderId', (req, res, next, orderId) => {
    //gets single order
    req.order = Order.findOne({
      where: {
        id: orderId
      }
    })
    next();
  })
  //get all orders
  .get('/', (req, res, next) => {
    Order.findAll()
    .then(orders => {
      // console.log('server orders: ', orders)
      res.json(orders)
    })
    .catch(next)
  })
  //create new order
  .post('/', (req, res, next) => {
    Order.create(req.body)
    .then( newOrder => {
      res.status(201).json(order)
    })
    .catch(next)
  })
  //get order by Id ==> here just in case
  .get('/:orderId', (req,res, next) => {
    Order.findOne({
      where:{
        id: req.params.orderId
      }, 
      include: [
        { model: LineItem, 
          where: {order_id: req.params.orderId},
          include: [
            { model: Product, 
              where: {lineitem_id: 1}}
          ]
        }
      ]
    })
    .then( order => {
      let lineItems = order.dataValues.lineitems;
      console.log('lineitems: ', order.dataValues.lineitems)

      // console.log('lineitems: ', lineItems)
      let orderId = order.dataValues.id;


      res.json(order)
    })
    .catch(next)
  })


// const router = require('express').Router()
// router.get('/', (req, res, next) => {
//   console.log('order route hit')
//   Order.findAll({
//       include: [Product]
//     })
//     .then(orders => res.json(orders))
//     .catch(next)
// })
// router.get('/:orderId', (req, res, next) => {
//   Order.findOne({
//       where:{
//         id: orderId
//       }
//     })
//     .then( order => {
//       console.log('order server: ', order)
//       res.json(order)
//     })
//     .catch(next)
// })
// router.post('/', (req, res, next) => {
//   Order.create(req.body)
//     .then( newOrder => {
//       res.status(201).json(order)
//     })
//     .catch(next)
// })

// module.exports = router

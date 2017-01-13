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
    next();
  })
  //get all orders
  .get('/', (req, res, next) => {
    Order.findAll()
    .then(orders => {
      res.json(orders)
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
          include: [ 
            { model: Product, 
              include: [ProductType]
            }
          ]
        }
      ]
    })
    .then( order => {
      let orderId = order.dataValues.id;
      let lineItems = order.dataValues.lineitems;

      Order.totalPrice(order)      
      res.json(order)
    })
    .catch(next)
  })
  //update order with product
  .put('/:orderId', (req, res, next) => {
    console.log('req.body', req.body)
    Order.findOne({
      where: {id: req.body.orderId}
    })
    .then( order => {
      // console.log(item)
      res.json(order)
    })
    .catch(next)
  })
  // .post('/:orderId', (req, res, next) => {
    
  //   LineItem.findAll({ where: {order_id: req.body.orderId} })
  //   .then( item => {
  //     // console.log('req.body', req.body)
  //     // console.log('item: ', item)
  //     //order.update()
  //     res.status(201).json(item)
  //   })
  //   .catch(next)
  // })


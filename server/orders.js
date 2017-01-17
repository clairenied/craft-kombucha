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
  .get('/list/:productId', (req, res, next) => {
    //check for productId

    Product.findOne({ 
      where: {id: req.params.productId}
    })
    .then( product => {
      //if no Product, throw error
      if(!product) { 
        var err = new Error('Not Found')
        err.status = 404
        throw err
      }

      //if product, check for listId
      itemId = product.dataValues.lineitem_id;
      itemPrice = product.dataValues.basePrice;

        //if listitem id is null, create line item
        if(itemId === null){
          LineItem.create({
            lineItemPrice: itemPrice,
            quantity: 1
          })
          .then( lineItem => {

            lineItemId = lineItem.dataValues.id;
            // update product line item
            product.update({
              lineitem_id: lineItemId
            })
            .then( updatedProduct => {
              //check for current user id
              //If order has associated user id
                //associate line item id with that order id
                
              //Else create order. Associate new orderId with line item id
              lineItemOrder = updatedProduct.dataValues.lineitem_id
              Order.create({
                price: itemPrice, 
                status: 'cart'
              })
              .then( order => {
                lineItemOrder = order.dataValues.id
                lineItem.update({
                  order_id: lineItemOrder
                })
                .then(item => {
                  res.json(item)
                })
              })
            })               
          })       
        }
        //if listitem id exists, increment quantity by one
        else {
          LineItem.findOne({
            where: { id: itemId }
          })
          .then( lineItem => {
            // console.log('lineitem: ', lineItem)
            newQuantity = lineItem.dataValues.quantity + 1;
            lineItem.update({
              quantity: newQuantity
            })
            .then( updatedLineItem => {
              res.json(updatedLineItem)
            })
          })
        }


      

    })

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


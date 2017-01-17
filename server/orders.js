const db = require('APP/db');
const Product = db.model('products');
const LineItem = db.model('lineitems');
const Order = db.model('orders');
const ProductType = db.model('producttypes');
// const User = db.model('users');
// const Order = require('../db/models/order');

module.exports = require('express').Router()
  //get all orders
  .get('/', (req, res, next) => {
    Order.findAll()
    .then(orders => {
      res.json(orders)
    })
    .catch(next)
  })
  // get order by Id ==> here just in case
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

        //if listitem_id is null, create lineItem
        if(itemId === null){
          LineItem.create({
            lineItemPrice: itemPrice,
            quantity: 1
          })
          .then( lineItem => {
            
            //update product with new lineItem_id
            lineItemId = lineItem.dataValues.id;
            product.update({
              lineitem_id: lineItemId
            })
            .then( updatedProduct => {
              /***** NOTE: cart should be created upon page access ****/
              lineItemInOrder = updatedProduct.dataValues.lineitem_id
                
              /***** NOTE: don't create a new cart, associate lineitem w/ current orderId ****/

              //with new lineItem, order_Id will always be null!
              // instead, lets check for the current order ==> By date create? 
              if(lineItem.dataValues.order_id === null){
                Order.create({
                  price: itemPrice, 
                  status: 'cart'
                })
                .then( order => {
                  lineItemInOrder = order.dataValues.id
                  lineItem.update({
                    order_id: lineItemOrder
                  })
                  .then(item => {
                    res.json(item)
                  })
                })   
              }

            })               
          })       
        }
        //if listitem id exists, increment quantity by one
        else {
          LineItem.findOne({
            where: { id: itemId }
          })
          .then( lineItem => {
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
  .post('/', (req, res, next) => {  
    Order.create({
      price: '0', 
      status: 'cart'
    })
    .then( order => {
      console.log('order Created', order)
      res.status(201).json(order)
    })
    .catch(next)
  })


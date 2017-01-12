const Sequelize = require('sequelize');
const db = require('APP/db'); // eslint-disable-line

// const LineItem = db.model('lineitems');
// const Product = db.model('products');

const LineItem = require('./lineitem');
const Product = require('./product');

const Order = db.define('orders', {
  //why is this here again??
  //Do we need to list each lineItem price per item in the order??? - NVM
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('cart', 'processing', 'cancelled', 'complete'),
  },
  paymentMethod: {
    type: Sequelize.ENUM('credit card', 'bitcoin', 'external service', 'gift card'),
  },
  shippingMethod: {
    type: Sequelize.STRING,
  },
  orderPlacedDate: {
    type: Sequelize.DATE,
  },
}, {
  classMethods: {
    totalPrice: (order) => {
      let totalPrice = '';
      let itemPrice = 0; 

      LineItem.findAll({ 
        where: {order_id: order.id},
        include: [Product] 
      })
      .then(items => {
        items.map( item => {
          itemPrice += parseInt(item.dataValues.product.price)
        })
       
        totalPrice = itemPrice.toString()
        
        order.update({
          price: totalPrice
        })
      })
    }
  }
});

module.exports = Order;

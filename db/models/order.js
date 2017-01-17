const Sequelize = require('sequelize');
const db = require('APP/db'); // eslint-disable-line

// const LineItem = db.model('lineitems');
// const Product = db.model('products');
const LineItem = require('./lineitem');
const Product = require('./product');

/*
  Add method to change status
*/

const Order = db.define('orders', {
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
          const price = item.dataValues.lineItemPrice;
          const quantity = item.dataValues.quantity
          if(item.dataValues.product === null){
            return '0';
          }
          itemPrice += parseInt(price*quantity)
        })
        totalPrice = itemPrice.toString()
        totalPrice = totalPrice.slice(0,2) + '.' + totalPrice.slice(2,4)

        return order.update({
          price: totalPrice
        })
      })
    }
  }, 
  instanceMethods: {
    setOrderPlacedDate: () => {
      if(this.status === 'processing'){
        this.set(orderPlacedDate, date.now())
      }
    },
  }, 
  hooks: {
    beforeValidate: function(order){
      order.setOrderPlacedDate()
    }
  }
});

module.exports = Order;

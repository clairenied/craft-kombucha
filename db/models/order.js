const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  lineItemPrice: {
    // WHO AM I
    // WHAT AM I
    // WHAT DO I DO HERE
    //doesnt work w/ array
    // type: Sequelize.ARRAY(Sequelize.DECIMAL),
    type: Sequelize.DECIMAL,
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
}, {});

module.exports = Order;

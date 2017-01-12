const Sequelize = require('sequelize');
const db = require('APP/db'); // eslint-disable-line

const Order = db.define('orders', {
  //why is this here again??
  //Do we need to list each lineItem price per item in the order???
  lineItemPrice: {
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

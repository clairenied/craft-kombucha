const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remaining: {
    // make an integer
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    // if we need a url path
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
  },
}, {
  // TO DO: COME BACK AND UPDATE MEEEEEEEEEEE
  // hooks: {
  //   beforeCreate: setRating
  // }

  // We support oauth, so users may or may not have passwords.
});

module.exports = Product;

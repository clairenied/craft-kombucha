const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  // not sure if we are using range correctly
  starRating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {});


module.exports = Review;

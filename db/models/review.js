const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  starRating: {
    type: Sequelize.RANGE(Sequelize.INTEGER),
    allowNull: false,
  },
}, {});

module.exports = Review;

const Sequelize = require('sequelize')
const db = require('APP/db')

const ProductType = db.define('producttypes', {
  size: {
    type: Sequelize.STRING,
    allowNull: false
  },
  remaining: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    // if we need a url path
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING
  }
}, {
  // TO DO: COME BACK AND UPDATE MEEEEEEEEEEE
  // hooks: {
  //   beforeCreate: setRating
  // }

  // We support oauth, so users may or may not have passwords.
})
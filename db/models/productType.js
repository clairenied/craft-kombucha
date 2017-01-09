const Sequelize = require('sequelize')
const db = require('APP/db')

const ProductType = db.define('producttypes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  // TO DO: COME BACK AND UPDATE MEEEEEEEEEEE
  // hooks: {
  //   beforeCreate: setRating
  // }

  // We support oauth, so users may or may not have passwords.
})

module.exports = ProductType
const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  photos: {
    // if we need a url path
    type: Sequelize.STRING
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER
  }
}, {
  // TO DO: COME BACK AND UPDATE MEEEEEEEEEEE
  // hooks: {
  //   beforeCreate: setRating
  // }

  // We support oauth, so users may or may not have passwords.
})
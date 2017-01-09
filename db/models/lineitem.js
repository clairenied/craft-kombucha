const Sequelize = require('sequelize')
const db = require('APP/db')

// USE EAGER LOADING!!

const LineItem = db.define('lineitems', {
  lineItemPrice: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }, 
  quantity: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }
}, {
})

module.exports = LineItem
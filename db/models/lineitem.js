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
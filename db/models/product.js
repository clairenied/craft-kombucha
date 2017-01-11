const Sequelize = require('sequelize');
const db = require('APP/db'); // eslint-disable-line

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
  basePrice: {
    // if we need a url path
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
  },
}, {
  getterMethods: {
    price: function(){
      let LS = 50, HS = 100;

      let adjustFactor = this.basePrice
      if (this.remaining < LS){
        return adjustFactor*((this.remaining)*(1/(1-LS))+((1-2*LS)/(1-LS)))  
      }else if (this.remaining > HS && this.remaining < 2*HS){
        return adjustFactor*((this.remaining*(-1/(2*HS))+3/2))
      }else if (this.remaining > 2*HS) { 
        return adjustFactor/2
      }else return this.basePrice
      
    }
  }
  // TO DO: COME BACK AND UPDATE MEEEEEEEEEEE
  // hooks: {
  //   beforeCreate: setRating
  // }

  // We support oauth, so users may or may not have passwords.
});

module.exports = Product;

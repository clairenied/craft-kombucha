const Sequelize = require('sequelize');
const db = require('APP/db');

const ProductType = db.define('producttypes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
   instanceMethods: {
    getRating: function(){
      return this.getReviews()
      .then(reviews=>{
        console.log(reviews.content)
        let sum = 0;
        reviews.forEach(review=>{
          sum+=review.starRating
        })
        return sum/reviews.length
      })
    }
   }

  // We support oauth, so users may or may not have passwords.
});

module.exports = ProductType;

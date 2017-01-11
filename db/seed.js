const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  { name: 'JC', email: 'JC@mail.com', password: '1234', birthday: '010101', type: 'member' },
  { name: 'CN', email: 'CN@mail.com', password: '1234', birthday: '020202', type: 'member' },
  { name: 'KD', email: 'KD@mail.com', password: '1234', birthday: '030303', type: 'guest' },
  { name: 'AJ', email: 'AJ@mail.com', password: '1234', birthday: '040404', type: 'guest' },
  { name: 'dog', email: 'dog@mail.gov', password: '1234', birthday: '050505', type: 'admin' },
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  // kombucha
  { size: '6-pack', remaining: '4 units', basePrice: '12.99', photo: 'https://images-na.ssl-images-amazon.com/images/I/91Vq1UyGH-L._SY355_.jpg' },
  { size: '12-pack', remaining: '12 units', basePrice: '24.99', photo: 'https://btbeverage.com/image/cache/catalog/product_pictures/SEO%20Ready/12%20pack%208%20oz/b-tea-kombucha-8-oz-lemon-balm-12-pack-600x600.jpg' },
  { size: 'keg', remaining: '0 units', basePrice: '32.00', photo: 'http://cdn4.beveragefactory.com/grid_KOM-3SH060515141631.jpg' },
  // shirts

  { size: 'medium', remaining: '0 units', basePrice: '20.00', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg' },
  { size: 'large', remaining: '5 units', basePrice: '20.00', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg' },
  { size: 'medium', remaining: '5 units', basePrice: '10.00', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg' },
  { size: 'large', remaining: '10 units', basePrice: '10.00', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg' },
], product => db.model('products').create(product));

// product types
const seedProductType = () => db.Promise.map([
  { name: 'watermellon kombucha', description: 'created with mother #12345, watermellon flavor'},
  { name: 'apple kombucha', description: 'created with mother #12345, watermellon flavor'},
  { name: 'no flavor kombucha', description: 'created with mother #12345, watermellon flavor'},
  { name: 't-shirt', description: 'hand knitted t-shirt. Material: cotton, spandex, kombucha mothers'},
  { name: 'sweatshirt', description: 'hand knitted sweatshirt. Material: cotton, spandex, kombucha mothers' },
], productType => db.model('producttypes').create(productType));

// reviews
const seedReviews = () => db.Promise.map([
  { content: 'this product is tasty', starRating: '3', producttypes_id: '1' },
  { content: 'idk about this one', starRating: '1', producttypes_id: '2' },
], review => db.model('reviews').create(review));

// line items
const seedLineItems = () => db.Promise.map([
  { lineItemPrice: '12.99', quantity: '2' },
  { lineItemPrice: '24.00', quantity: '3' },
  { lineItemPrice: '32.00', quantity: '1' },
  { lineItemPrice: '20.00', quantity: '1' },
], lineItem => db.model('lineitems').create(lineItem));

// orders
const seedOrders = () => db.Promise.map([
  { lineItemPrice: '2.50', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'ground', orderPlacedDate: null, },
  { lineItemPrice: '4.50', status: 'complete', paymentMethod: 'gift card', shippingMethod: 'air', orderPlacedDate: null },
  { lineItemPrice: '5.50', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'air', orderPlacedDate: null },
  { lineItemPrice: '1.50', status: 'cancelled', paymentMethod: 'gift card', shippingMethod: 'ground', orderPlacedDate: null },
], order => db.model('orders').create(order));

//addresses
const seedAddress = () => db.Promise.map([
  { streetName: 'blue st', streetNumber: '1234', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'green st', streetNumber: '4321', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'red ave', streetNumber: '2468', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'yellow st', streetNumber: '8642', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'woof st', streetNumber: '1111', city: 'chicago', state: 'illinois', zip: '60601'},
], address => db.model('addresss').create(address));

const allPromises = () => 
	Promise.all([
		seedUsers(), seedProducts(), seedProductType(), seedLineItems(), seedReviews(), seedOrders()
	])
	.then(res => res)

// do a promise.all for users, products
// db.didSync
//   .then(() => db.sync({ force: true }))
//   .then(allPromises)
//   .then(promises => console.log('Seeded promises: ', promises))
//   .catch(error => console.error(error))
//   .finally(() => db.close());


db.didSync
  .then(() => db.sync({ force: true }))
  .then(allPromises)
  .spread( (seedUsers, seedProducts, seedProductType, seedLineItems, seedReviews, seedOrders) => {
    
    // console.log('seedLineItems: ', seedLineItems[1].dataValues)
    let lineId = seedLineItems[1].dataValues;
    let productId = seedProducts[1].dataValues;
    let productTypeId = seedProductType[1].dataValues;
    let orderId = seedOrders[1].dataValues;

    seedProducts.map(product => {
      product.lineitem_id = lineId.id
      product.product_id = productId.id
    }) 

    seedLineItems.map(lineItem => {
      lineItem.order_id = orderId.id
    }) 

    seedReviews.map(review => {
      review.producttype_id = productTypeId.id
    })      
  })
  .then(allPromises => console.log('Seeded promises: ', allPromises) )
  .catch(error => console.error(error))
  .finally(() => db.close());

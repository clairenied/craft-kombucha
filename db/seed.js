const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  { name: 'JC', email: 'JC@mail.com', password: '1234', birthday: '010101', type: 'member', shipping_address_id: '1', billing_address_id:'1' },
  { name: 'CN', email: 'CN@mail.com', password: '1234', birthday: '020202', type: 'member', shipping_address_id: '2', billing_address_id:'2' },
  { name: 'KD', email: 'KD@mail.com', password: '1234', birthday: '030303', type: 'guest', shipping_address_id: '3', billing_address_id:'3' },
  { name: 'AJ', email: 'AJ@mail.com', password: '1234', birthday: '040404', type: 'guest', shipping_address_id: '4', billing_address_id:'4' },
  { name: 'dog', email: 'dog@mail.gov', password: '1234', birthday: '050505', type: 'admin', shipping_address_id: '5', billing_address_id:'5' },
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  // kombucha
  { size: '6-pack', remaining: '4 units', price: '12.99', photo: 'https://images-na.ssl-images-amazon.com/images/I/91Vq1UyGH-L._SY355_.jpg', lineitem_id: '1', producttype_id:'3' },
  { size: '12-pack', remaining: '12 units', price: '24.99', photo: 'https://btbeverage.com/image/cache/catalog/product_pictures/SEO%20Ready/12%20pack%208%20oz/b-tea-kombucha-8-oz-lemon-balm-12-pack-600x600.jpg', lineitem_id: '2', producttype_id:'1' },
  { size: 'keg', remaining: '0 units', price: '32.00', photo: 'http://cdn4.beveragefactory.com/grid_KOM-3SH060515141631.jpg', lineitem_id: '3', producttype_id:'2' },
  // shirts
  { size: 'medium', remaining: '0 units', price: '20.00', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg', lineitem_id: '4', producttype_id:'5' },
  { size: 'large', remaining: '5 units', price: '20.00', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg', lineitem_id: '4', producttype_id:'5' },
  { size: 'medium', remaining: '5 units', price: '10.00', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg', lineitem_id: '5', producttype_id:'4' },
  { size: 'large', remaining: '10 units', price: '10.00', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg', lineitem_id: '5', producttype_id:'4' },
], product => db.model('products').create(product));

// line items
const seedLineItems = () => db.Promise.map([
  { lineItemPrice: '12.99', quantity: '2', order_id:'1' },
  { lineItemPrice: '24.99', quantity: '3', order_id:'2' },
  { lineItemPrice: '32.00', quantity: '1', order_id:'3' },
  { lineItemPrice: '20.00', quantity: '1', order_id:'5' },
  { lineItemPrice: '10.00', quantity: '5', order_id:'4' },
], lineItem => db.model('lineitems').create(lineItem));

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
  { content: 'this product is tasty', starRating: '3', producttype_id: '1', user_id: '1' },
  { content: 'idk about this one', starRating: '1', producttype_id: '3', user_id: '2' },
], review => db.model('reviews').create(review));


// orders
const seedOrders = () => db.Promise.map([
  { lineItemPrice: '12.99', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'ground', orderPlacedDate: null, user_id: '1', ship_to_id: '1', bill_to_id: '1' },
  { lineItemPrice: '24.99', status: 'complete', paymentMethod: 'gift card', shippingMethod: 'air', orderPlacedDate: null, user_id: '1', ship_to_id: '1', bill_to_id: '2' },
  { lineItemPrice: '32.00', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'air', orderPlacedDate: null, user_id: '2', ship_to_id: '4', bill_to_id: '3' },
  { lineItemPrice: '20.00', status: 'cancelled', paymentMethod: 'gift card', shippingMethod: 'ground', orderPlacedDate: null, user_id: '4', ship_to_id: '4', bill_to_id: '4' },
  { lineItemPrice: '10.00', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'snail', orderPlacedDate: null, user_id: '3', ship_to_id: '3', bill_to_id: '3' },
], order => db.model('orders').create(order));

//addresses
const seedAddress = () => db.Promise.map([
  { streetName: 'blue st', streetNumber: '1234', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'green st', streetNumber: '4321', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'red ave', streetNumber: '2468', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'yellow st', streetNumber: '8642', city: 'chicago', state: 'illinois', zip: '60601'},
  { streetName: 'woof st', streetNumber: '1111', city: 'chicago', state: 'illinois', zip: '60601'},
], address => db.model('addresses').create(address));

const groupOne = () => 
  Promise.all([
    seedAddress(), seedProductType() 
  ])
.then(res => res)

const groupTwo = () => 
  Promise.all([
    seedReviews(), seedOrders(),
  ])
.then(res => res)

db.didSync
  .then(() => db.sync({ force: true }))
  .then(groupOne)
  .then(seedUsers)
  .then(groupTwo)
  .then(seedLineItems)
  .then(seedProducts)
  .then(promises => console.log('Seeded promises'))
  .catch(error => console.error(error))
  .finally(() => db.close());

const db = require('APP/db'); // eslint-disable-line

const seedUsers = () => db.Promise.map([
  { firstName: 'Jean', lastName: 'Chung', email: 'JC@mail.com', password: '1234', birthday: '010101', type: 'member', shipping_address_id: '1', billing_address_id: '1' },
  { firstName: 'Claire', lastName: 'Niederberger', email: 'CN@mail.com', password: '1234', birthday: '020202', type: 'member', shipping_address_id: '2', billing_address_id: '2' },
  { firstName: 'KD', lastName: 'Gandhi', email: 'KD@mail.com', password: '1234', birthday: '030303', type: 'member', shipping_address_id: '3', billing_address_id: '3' },
  { firstName: 'Alexis', lastName: 'Jennings', email: 'AJ@mail.com', password: '1234', birthday: '040404', type: 'member', shipping_address_id: '4', billing_address_id: '4' },
  { firstName: 'River', lastName: 'Dog', email: 'river@mail.gov', password: '1234', birthday: '050505', type: 'admin', shipping_address_id: '5', billing_address_id: '5' },
  { firstName: 'Lola', lastName: 'Dog', email: 'lola@mail.gov', password: '1234', birthday: '060606', type: 'admin', shipping_address_id: '5', billing_address_id: '5' },
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  // kombucha
  { size: '6-pack', remaining: '4', basePrice: '1299', photo: 'http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png', lineitem_id: '1', producttype_id:'3' },
  { size: '6-pack', remaining: '2', basePrice: '1299', photo: 'http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png', lineitem_id: null, producttype_id:'3' },
  { size: '12-pack', remaining: '12', basePrice: '2499', photo: 'http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png', lineitem_id: '2', producttype_id:'1' },
  { size: '12-pack', remaining: '12', basePrice: '2499', photo: 'http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png', lineitem_id: '6', producttype_id:'1' },
  { size: 'keg', remaining: '0', basePrice: '3200', photo: 'http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png', lineitem_id: '3', producttype_id:'2' },
  // shirts
  { size: 'medium', remaining: '0', basePrice: '2000', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg', lineitem_id: '4', producttype_id: '5' },
  { size: 'large', remaining: '5', basePrice: '2000', photo: 'https://img1.etsystatic.com/159/1/10519821/il_340x270.1120657157_53nj.jpg', lineitem_id: '4', producttype_id: '5' },
  { size: 'medium', remaining: '5', basePrice: '1000', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg', lineitem_id: '5', producttype_id: '4' },
  { size: 'large', remaining: '10', basePrice: '1000', photo: 'https://s-media-cache-ak0.pinimg.com/236x/01/d6/50/01d650b08d892885c8d8b36469abec26.jpg', lineitem_id: '5', producttype_id: '4' },
], product => db.model('products').create(product));

// line items
const seedLineItems = () => db.Promise.map([
  { lineItemPrice: '1299', quantity: '2', order_id:'1' },
  { lineItemPrice: '1299', quantity: '1', order_id:'1' },
  { lineItemPrice: '2499', quantity: '3', order_id:'2' },
  { lineItemPrice: '3200', quantity: '1', order_id:'3' },
  { lineItemPrice: '2000', quantity: '1', order_id:'5' },
  { lineItemPrice: '1000', quantity: '5', order_id:'4' },
], lineItem => db.model('lineitems').create(lineItem));

// product types
const seedProductType = () => db.Promise.map([
  { name: 'watermelon kombucha', description: 'Brewed from our Avalon strain (#398), flavored with fresh watermelon.', category:'kombucha', },
  { name: 'strawberry basil kombucha', description: 'Brewed from our Timbre strain (#441), flavored with fresh strawberries and basil.', category:'kombucha', },
  { name: 'blueberry ginger kombucha', description: 'Brewed from our Dakota strain (#1083), flavored with fresh blueberries and ginger.', category:'kombucha', },
  
  { name: 't-shirt', description: 'Hand-knitted t-shirt. Materials: cotton, spandex, kombucha mothers', category:'merch', },
  { name: 'sweatshirt', description: 'Hand-knitted sweatshirt. Materials: cotton, spandex, kombucha mothers', category:'mother', },
], productType => db.model('producttypes').create(productType));

// reviews
const seedReviews = () => db.Promise.map([
  { content: "I'm not normally a huge fan of watermelon-flavored things, but this kombucha is damn good.", starRating: '5', producttype_id: '1', user_id: '3' },
  { content: "I don't think I like kombucha...", starRating: '1', producttype_id: '3', user_id: '2' },
  { content: "Daily kombucha drinker here - this stuff is the best. My favorite flavor hands down.", starRating: '5', producttype_id: '2', user_id: '4' },
  { content: 'Decent kombucha, but I prefer my home brew.', starRating: '3', producttype_id: '1', user_id: '1' },
  { content: "I love sweatshirts and I love this sweatshirt.", starRating: '5', producttype_id: '5', user_id: '2' },
], review => db.model('reviews').create(review));


// orders
const seedOrders = () => db.Promise.map([
  { price: '1299', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'ground', orderPlacedDate: new Date(2015, 2, 3, 1, 10, 5, 5), user_id: '1', shipping_address_id: '1', billing_address_id: '1' },
  { price: '2499', status: 'complete', paymentMethod: 'gift card', shippingMethod: 'air', orderPlacedDate: new Date(2016, 11, 22, 12, 33, 5, 5), user_id: '1', shipping_address_id: '1', billing_address_id: '2' },
  { price: '3200', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'air', orderPlacedDate: new Date(2016, 6, 23, 9, 3, 5, 5), user_id: '2', shipping_address_id: '4', billing_address_id: '3' },
  { price: '2000', status: 'cancelled', paymentMethod: 'gift card', shippingMethod: 'ground', orderPlacedDate: new Date(2014, 6, 4, 10, 10, 5, 5), user_id: '4', shipping_address_id: '4', billing_address_id: '4' },
  { price: '1000', status: 'processing', paymentMethod: 'credit card', shippingMethod: 'snail', orderPlacedDate: Date.now(), user_id: '3', shipping_address_id: '3', billing_address_id: '3' },
], order => db.model('orders').create(order));

// addresses
const seedAddress = () => db.Promise.map([
  { streetName: 'Blue St.', streetNumber: '1234', city: 'Chicago', state: 'IL', zip: '60660' },
  { streetName: 'Green St.', streetNumber: '4321', city: 'Chicago', state: 'IL', zip: '60637' },
  { streetName: 'Red Ave.', streetNumber: '2468', city: 'Chicago', state: 'IL', zip: '60601' },
  { streetName: 'Yellow St.', streetNumber: '8642', city: 'Chicago', state: 'IL', zip: '60601' },
  { streetName: 'Woof St.', streetNumber: '1111', city: 'Chicago', state: 'IL', zip: '60610' },
], address => db.model('addresses').create(address));

const groupOne = () =>
  Promise.all([
    seedAddress(), seedProductType()
  ])
  .then(res => res)
  .catch(err => console.error(err));

const groupTwo = () =>
  Promise.all([
    seedReviews(), seedOrders(),
  ])
  .then(res => res)
  .catch(err => console.error(err));

db.didSync
  .then(() => db.sync({ force: true }))
  .then(groupOne)
  .then(seedUsers)
  .then(groupTwo)
  .then(seedLineItems)
  .then(seedProducts)
  .then(promises => console.log('Seeded promises'))
  .catch(err => console.error(err))
  .finally(() => db.close());

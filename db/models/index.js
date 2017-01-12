// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Address = require('./address');
const LineItem = require('./lineitem');
const Order = require('./order');
const Product = require('./product');
const ProductType = require('./productType');
const Review = require('./review');

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

// Users have one shipping address and one billing address
User.belongsTo(Address, { as: 'shippingAddress' });
User.belongsTo(Address, { as: 'billingAddress' });

// Orders also have a shipping address and billing address
Order.belongsTo(Address, { as: 'shipTo' });
Order.belongsTo(Address, { as: 'billTo' });

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

LineItem.hasOne(Product);  //can this be changed?

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

ProductType.hasMany(Review);
Review.belongsTo(ProductType);

module.exports = { User, Address, LineItem, Order, Product, ProductType, Review };

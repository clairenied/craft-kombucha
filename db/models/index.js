const Sequelize = require('sequelize');
const db = require('APP/db');

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

User.hasMany(Address);

User.hasMany(Order);
Order.hasOne(User);

User.hasMany(Review);
Review.hasOne(User);

Order.hasMany(LineItem);
LineItem.hasOne(Order);

LineItem.hasOne(Product);

ProductType.hasMany(Product);
Product.hasOne(ProductType);

ProductType.hasMany(Review);
Review.hasOne(ProductType);

module.exports = { User, Address, LineItem, Order, Product, ProductType, Review };

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses', {
  streetNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  streetName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {});

module.exports = Address;

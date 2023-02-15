const { Sequelize } = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
    beforeCreate: async function(user) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, salt);
    }
  }
});

module.exports = User;
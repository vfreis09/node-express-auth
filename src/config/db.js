const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres://user:pass@example.com:5432/dbname')
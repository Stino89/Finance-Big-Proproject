const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected...');
  } catch (err) {
    console.error('Unable to connect to PostgreSQL:', err);
  }
};

module.exports = { sequelize, connectPostgres };

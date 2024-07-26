const app = require('./app');
const connectMongo = require('./config/db');
const { connectPostgres } = require('./config/sequelize');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectMongo();
connectPostgres();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

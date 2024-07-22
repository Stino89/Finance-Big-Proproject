const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config(); // Add this line

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

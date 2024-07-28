const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/STINO-DEMO-DATABASE', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
  }
};

module.exports = connectMongo;

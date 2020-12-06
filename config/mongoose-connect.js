// Initialization of packages
const mongoose = require('mongoose');
// Creating a connection with mongo
const connString = 'mongodb://mongo:27017/cinema:';
mongoose
  .connect(
    connString,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
// Exporting the connection
const database = mongoose.connection;
module.exports = database;
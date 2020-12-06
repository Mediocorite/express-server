// Importing the Packages and Database
const express = require('express');
const database = require('./config/mongoose-connect');
const itemStack = require('./models/itemstack');
// Constants 
const PORT = 5000;
// Server Initialization and Routing
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  itemStack.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});
app.post('/item/add', (req, res) => {
  const newItem = new itemStack({
    name: req.body.name
  });
  newItem.save().then(item => res.redirect('/'));
});
// Starting the server
app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
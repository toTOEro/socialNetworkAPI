const express = require('express');
const db = require('./config/connection');
// Require model
const { Users, Thoughts } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET route for all users
app.get('/allUsers', (req, res) => {
    Users.find({}, (err, result) => {
        if 
    })

})

// GET route for all thoughts

// POST route for creating users

// PUT route for updating users

// DELETE route for deleting users

// POST route for creating thoughts

// PUT route for updating thoughts

// DELETE route for deleting thoughts

// POST route for adding reactions

// DELETE route for deleting reactions

// POST route for adding friends

// DELETE route for deleting friends


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

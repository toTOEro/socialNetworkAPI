const express = require('express');
const db = require('./config/connection');
// Require model
const { Users, Thoughts } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET route for all users
app.get('/users', (req, res) => {
    Users.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Error!');
            res.status(500).json({ message: 'There was an error!' });
        };
    });

});

// GET route for all thoughts
app.get('/thoughts', (req, res) => {
    Thoughts.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Error!');
            res.status(500).json({ message: 'There was an error!' });
        };
    });

})

// POST route for creating users
app.post('/users', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
    })
    newUser.save();
    if(newUser) {
        res.status(200).json(newUser);
    } else {
        console.log('Error!');
        res.status(500).json({ message: 'There was an error!' });
    }
})

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

const express = require('express');
const db = require('./config/connection');
// Require model
const { Users, Thoughts } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// POST route for adding reactions

// DELETE route for deleting reactions

// POST route for adding friends

// DELETE route for deleting friends


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

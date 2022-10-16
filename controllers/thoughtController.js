
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



// POST route for creating thoughts

// PUT route for updating thoughts

// DELETE route for deleting thoughts
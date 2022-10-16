




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


// POST route for creating users
app.post('/users', (req, res) => {
    const newUser = new Users({
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
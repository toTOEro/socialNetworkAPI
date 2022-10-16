
const { Users } = require('../models');



module.exports = {

    // Find all users
    getUsers(req, res) {
        Users.find()
            .then((users) => res.status(200).json(users))
            .catch(err => res.status(500).json(err))
    },
    // Create a new user
    createUser(req, res) {
        Users.create(req.body)
            .then(user => res.status(200).json(user))
            .then(err => res.status(500).json(err));
    },
    // PUT route for updating users

    updateUser(req, res) {

    },
    // DELETE route for deleting users
    deleteUser(req, res) {
        Users.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Application.deleteMany({ _id: { $in: user.applications } })
            )
            .then(() => res.json({ message: 'User and associated apps deleted!' }))
            .catch((err) => res.status(500).json(err));
    }
}


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
    if (newUser) {
        res.status(200).json(newUser);
    } else {
        console.log('Error!');
        res.status(500).json({ message: 'There was an error!' });
    }
})




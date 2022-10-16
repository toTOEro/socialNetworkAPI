
const { Users, Thoughts } = require('../models');



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
            .catch(err => res.status(500).json(err));
    },
    // PUT route for updating users

    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        ).then(
            (user) =>
                !user
                    ? res.status(404).json({ message: 'Error in updating!' })
                    : res.json(user)
        )
    },
    // DELETE route for deleting users
    deleteUser(req, res) {
        Users.findOneAndDelete({ _id: req.params.userId })
            .then(
                (user) =>
                    !user
                        ? res.status(404).json({ message: 'No user with that ID' })
                        : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User deleted!' }))
            .catch((err) => res.status(500).json(err));
    }
}



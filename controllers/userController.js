
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
        Users.findOneAndDelete({ _id: req.body.userId })
            .then(
                (user) =>
                    !user
                        ? res.status(404).json({ message: 'No user with that ID' })
                        : Application.deleteMany({ _id: { $in: user.applications } })
            )
            .then(() => res.json({ message: 'User deleted!' }))
            .catch((err) => res.status(500).json(err));
    }
}



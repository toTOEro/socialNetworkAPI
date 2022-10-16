

const { Thoughts, Users } = require('../models');



module.exports = {

    // Find all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.status(200).json(thoughts))
            .catch(err => res.status(500).json(err))
    },

    // Get single thought
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .select()
            .lean()
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: 'Thought not found!' })
                    : res.status(200).json(thought)
            )
            .catch(err => console.log(err))
    },

    // Create a new thought
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => {
                return Users.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Thought created, user not found'
                    })
                    : res.status(200).json('Thought created!')
            )
            .catch(err => res.status(500).json(err));
    },

    // PUT route for updating thoughts
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        ).then(
            (thought) =>
                !thought
                    ? res.status(404).json({ message: 'Error in updating!' })
                    : res.json(thought)
        )
    },

    // DELETE route for deleting thoughts
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            // .then(
            //     (thought) =>
            //         !thought
            //             ? res.status(404).json({ message: 'No thought with that ID' })
            //             : Thoughts.deleteMany({ _id: { $in: thought.thoughts } })
            // )
            .then(() => res.json({ message: 'Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // ADD reactions to thought
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        ).then((thought) =>
            !thought
                ? res.status(404).json({ message: 'Error, thought not found!' })
                : res.json(thought)
        ).catch((err) => res.status(404).json(err))
    },

    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        ).then((thought) =>
            !thought
                ? res.status(404).json({ message: 'Error, thought not found!' })
                : res.json(thought)
        ).catch((err) => res.status(404).json(err))
    },



}





const router = require('express').Router();


const {
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

// get and post on /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// PUT and DELETE on /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought).delete(deleteThought);

// POST reactions on /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE reactions on /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;
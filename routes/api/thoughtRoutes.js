const router = require('express').Router();


const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

// get and post on /api/thought
router.route('/').get(getThoughts).post(createThought);

// GET, PUT, and DELETE on a single thought /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST reactions on /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE reactions on /api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;
const router = require('express').Router();


const {
    getThoughts,
    createThought,
    updateThought,
    deleteThought,

} = require('../../controllers/thoughtController');

// get and post on /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// PUT and DELETE on /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought).delete(deleteThought);

module.exports = router;
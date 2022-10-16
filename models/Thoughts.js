const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    reactions: [],
    reactionCount: Number,

});

const formatDate = function (date) {
    return date.toLocaleString()
};

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
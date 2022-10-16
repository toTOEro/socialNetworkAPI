const mongoose = require('mongoose');
const reactionSchema = require('./Reactions')


const formatDate = function (date) {
    return date.toLocaleString()
};


const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    reactions: [reactionSchema]

});


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
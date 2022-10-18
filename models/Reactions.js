const mongoose = require('mongoose');


const formatDate = function (date) {
    return date.toLocaleString()
};


const reactionSchema = new mongoose.Schema({

    reactionId:
    {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },

    reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: formatDate },

});

module.exports = reactionSchema;
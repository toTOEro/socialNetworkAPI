const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        email: {
            type: String,
            required: 'Email Required',
            lowercase: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            trim: true
        },
        // friendCount: Number,
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }

);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


const User = mongoose.model('User', userSchema);


module.exports = User;
const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    followerId: { type: String, required: true },
    followingId: { type: String, required: true },
});

module.exports = mongoose.model('Follow', followSchema);

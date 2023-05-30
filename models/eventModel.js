const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: true },
    },
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;

const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema(
    {
        slots: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: true },
    },
);

const Slot = mongoose.model('Slot', SlotSchema);

module.exports = Slot;

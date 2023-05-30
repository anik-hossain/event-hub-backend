const Event = require('@root/models/eventModel');
const Slot = require('@root/models/slotModel');

exports.getSlots = async (req, res, _) => {
    const date = req.params.date.replace(/-/g, '/');
    const events = await Event.find({ date: date });
    const startTimeArray = events.map((doc) => ({ startTime: doc.startTime }));
    const slots = await Slot.find();

    const updatedData = slots.map((doc) => {
        const filteredSlots = doc.slots.filter(
            (slot) =>
                !startTimeArray.some(
                    (startTimeObj) => startTimeObj.startTime === slot.time,
                ),
        );
        return { slots: filteredSlots };
    });

    res.status(200).json({
        message: 'Slots by date',
        slots: updatedData[0].slots,
    });
};

exports.createSlots = async (req, res, next) => {
    const isSlots = await Slot.find();
    const message =
        isSlots.length === 0
            ? 'Slots created successfully'
            : 'Slots already created';

    if (isSlots.length === 0) {
        await Slot.create({
            slots: [
                { time: '09:00 AM' },
                { time: '09:30 AM' },
                { time: '10:00 AM' },
                { time: '10:30 AM' },
                { time: '11:00 AM' },
                { time: '11:30 AM' },
                { time: '12:00 PM' },
                { time: '12:30 PM' },
                { time: '01:00 PM' },
                { time: '01:30 PM' },
                { time: '02:00 PM' },
                { time: '02:30 PM' },
                { time: '03:00 PM' },
                { time: '03:30 PM' },
                { time: '04:00 PM' },
                { time: '04:30 PM' },
                { time: '05:00 PM' },
            ],
        });
    }
    res.status(200).json({ message });
};

exports.createEvent = async (req, res, next) => {
    await Event.create({ ...req.body });
    res.status(200).json({ message: 'Event created' });
};

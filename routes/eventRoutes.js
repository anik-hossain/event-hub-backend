const router = require('express').Router();
const {
    createEvent,
    createSlots,
    getSlots,
} = require('@root/controllers/eventController');

router.route('/events/:date').get(getSlots);
router.route('/events/create-slots').put(createSlots);
router.route('/events/create-event').post(createEvent);

module.exports = router;

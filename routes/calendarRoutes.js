const express = require('express');
const router = express.Router();
const {getEvents, createEvent} = require('../controllers/calendarController');

// Routes for Calendar
router.get('/', getEvents);
router.post('/', createEvent);



module.exports = router;
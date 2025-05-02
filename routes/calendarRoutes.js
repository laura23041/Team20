const express = require('express');
const router = express.Router();
const {createEvent} = require('../controllers/calendarController');

// Routes for Calendar
router.post('/', createEvent);



module.exports = router;
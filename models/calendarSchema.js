const mongoose = require('mongoose');

const calendarEntrySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
});

const CalendarEntry = mongoose.model('CalendarEntry', calendarEntrySchema);

module.exports = CalendarEntry;
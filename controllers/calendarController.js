const Event = require('../models/calendarSchema.js')

// GET

const getEvents = async (req,res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  
  };



// CREATE an event
const createEvent = async (req, res) => {
    try {
        const { title, description, date, time } = req.body;
        const event = new Event({ title, description, date, time });

        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


module.exports = {createEvent, getEvents};
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


//ROUTE
const calendarRoutes = require('./routes/calendarRoutes');

//API
app.use('/api/events', calendarRoutes);

// Handlebars
app.engine('handlebars', exphbs.engine({extname: 'handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// MongoDB connection
const MONGO_URI = 'mongodb+srv://'+ process.env.DBUSERNAME + ':'+ process.env.DBPASSWORD +'@' + process.env.CLUSTER + '.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
.then((result) =>
{
    console.log('Connected to DB');
    app.listen(PORT, () => console.log("Listening on " + PORT));
})
.catch((err) => {
    console.log(err);
})


const calendars = require('./models/calendarSchema');



// CREATE
app.get('/add-events', (req,res) => {
    res.render('add-events', {
        title: 'Add event'
    });
})

app.post('/events', async (req, res) => {
    const newEvent = new calendars(req.body);
    await newEvent.save();
    res.send('Event added! ' + newEvent.title + ' on ' + newEvent.date + ' at ' + newEvent.time)
    //res.redirect('/events');
});


// HOME
app.get('/', (req, res) => {
    res.render('index');
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working!')
});


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
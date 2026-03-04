const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
//const Task = require('./models/task');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

//const morgan = require('morgan');
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); //

let MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL);

mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", () => {
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs'); //
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(morgan('common'));
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.render('home')
})


// port to host server
const PORT = process.env.PORT || 5000;

// server setup
app.listen(PORT, console.log(
    `Server listening on port ${PORT}`));


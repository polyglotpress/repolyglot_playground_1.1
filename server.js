const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

//const Task = require('./models/task');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
//const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/user');
//const morgan = require('morgan');
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); //

//database connection
let MONGO_URL = process.env.MONGO_URI;
mongoose.connect(MONGO_URL, { family: 4})
    .then(() => {
        console.log("database connected");
    })
    .catch(err => {
        console.error("connection errorL ", err);
    });
// mongoose.connection.on("error", console.error.bind(console, "connection error:"));
// mongoose.connection.once("open", () => {
//     console.log("Database connected");
// })

const app = express();

app.set('view engine', 'ejs'); //
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);


app.use(session({
    secret: 'terrible app secret',
    saveUninitialized: true,
    resave: true
 }));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //method from passport local mongoose
passport.deserializeUser(User.deserializeUser()); //unstore in session

app.use((req, res, next) => {
    //console.log(req.session);

    res.locals.currentUser = req.user;
    // if (req.locals.currentUser)
    //     console.log(currentUser);
    
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);
app.use('/', userRoutes); //  not /users


//routes visible to everyone:

//1. application home page
app.get('/', (req, res) => {
    res.render('home')
})

//2. basic seed tasks?

//3. about and contact page, socials etc



app.get('/secret', (req, res) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be logged in');
        return res.redirect('/login');
    }
    res.send("you can access this");
})


// port to host server
const PORT = process.env.PORT || 5000;

// server setup
app.listen(PORT, console.log(
    `Server listening on port ${PORT}`));


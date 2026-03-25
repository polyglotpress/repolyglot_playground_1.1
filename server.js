const express = require('express');
const mongoose = require('mongoose');
//const { createClient } = require('redis');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); //

//models
const User = require('./models/user');
const Task = require('./models/task');
const Tip = require('./models/tip');

//routes
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

//middleware
const { isLoggedIn } = require('./middleware/middleware');

//database connection
let MONGO_URL = process.env.MONGO_URI;
mongoose.connect(MONGO_URL, { family: 4 })
    .then(() => {
        console.log("database connected");
    })
    .catch(err => {
        console.error("connection errorL ", err);
    });

const app = express();

app.set('view engine', 'ejs'); //
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'terrible app secret',
    saveUninitialized: false,
    resave: false,
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //method from passport local mongoose
passport.deserializeUser(User.deserializeUser()); //unstore in session

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.returnTo = req.session.returnTo;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(methodOverride('_method'));

app.use('/tasks', taskRoutes);
app.use('/', userRoutes); //  not /users

//routes visible to everyone:

app.get('/', async (req, res) => {
    const tasksCount = await Task.countDocuments();
    const usersCount = await User.countDocuments();
    res.render('home', { tasksCount, usersCount })
})

app.get('/tips', async (req, res) => {
    const tips = await Tip.find({}).populate('author');
    res.render('polyglottips', { tips });
})

app.post('/tips', isLoggedIn, async (req, res) => {
    const tip = new Tip({ ...req.body });
    const user = await User.findById(req.user._id);
    console.log("user creating this tip is : " + user);
    console.log(req.body);
    tip.author = req.user._id;
    if (req.body.anonymousCheckbox == 'on') {
        tip.isAnonymous = true;
    }
    await tip.save();
    res.redirect('/tips');
})

// app.get('/secret', (req, res) => {
//     if (!req.isAuthenticated()) {
//         req.flash('error', 'you must be logged in');
//         return res.redirect('/login');
//     }
//     res.send("you can access this");
// })


app.get('/list/:id', async (req, res) => {
    const currentUser = req.user;
    const user = await User.findOne({
        'wordLists._id': req.params.id
    });
    if (!user) {
        return res.status(404).send("user not found");
    }
    const wordList = user.wordLists.id(req.params.id);
   // res.render('users/wordList', { wordList, user, currentUser }); //toggle offcanvas instead
});

// app.all("*", (req, res) => {
//     res.status(404).render("404");
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server listening on port ${PORT}`));

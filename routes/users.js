//user routes will go here
const express = require('express');
const Language = require('../models/language');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    res.send('hi');
})


router.get('/register', async (req, res) => {
    res.render('users/register');
})

router.post('/register', async (req, res) => {
    try {
        const hashedPw = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPw
        });
        await user.save();
        res.redirect('/users/login');
    } catch (err) {
        res.send(err);
    }
})

router.get('/login', async (req, res) => {
    res.render('users/login');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        const isValidPw = await bcrypt.compare(req.body.password, user.password);
        if (isValidPw) {
            // res.send("Logged in")
            console.log("logged in: " + user);
            res.redirect(`/users/${user._id}/dashboard`);
            //maybe redirect to further details form to fill model schema
        } else {
            res.send("Incorrect password");
        }
    }
    else {
        res.send("Username not found");
    }
})


router.get('/:id/dashboard', async (req, res) => {
    //find user
    const user = await User.findById(req.params.id)
    //logic check isLoggedIn the

    //render dashboard
    res.render('users/dashboard', { user });
})

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.redirect('/home');

})

router.get('/all', async (req, res) => { //remove soon or create following
    const users = await User.find({});
    res.json(users);
})


// router.get('/languages', async (req, res) => { 
//     res.render('users/languages');
// })

// router.get('/languages/new', async (req, res) => {
//     res.send('user adds new language here')
// })

router.get('/languages/list', async (req, res) => {
    const languageList = await Language.find({});
    res.json(languageList);
})

router.post('/languages/new', async (req, res) => {

    const { language } = req.body.language;
    const lang = new Language({ language });
    const newLang = await lang.save()
    console.log(newLang)
    //res.send(`user adds new language here ${lang}`)
})

// router.delete('/languages/:id', async (req, res) => {
// const language = await Language.findByIdAndDelete(req.params.id);
//res.redirect('/languages)
// })

module.exports = router;
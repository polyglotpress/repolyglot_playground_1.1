const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isAccountHolder } = require('../middleware/middleware');
const { registerNewUser, loginForm, logUserIn, logOut, registerForm, loadDashboard, getEditProfile, updateProfile, deleteUser, listMembers } = require('../controllers/users')

const User = require('../models/user')
router.get('/register', registerForm);
router.post('/register', registerNewUser);
router.get('/login', loginForm);
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), logUserIn);

router.get('/logout', logOut);
router.get('/:id/dashboard', isLoggedIn, loadDashboard);

router.get('/:id', isLoggedIn, isAccountHolder, getEditProfile)
//get tasks list is sending to get edit profile for some reason, moved app use tasks to come before userroutes

router.put('/:id', isLoggedIn, isAccountHolder, updateProfile);
router.delete('/:id', isLoggedIn,isAccountHolder, deleteUser)

router.get('/members', isLoggedIn, listMembers)

module.exports = router;

//to complete below

// router.get('/:id/languages', async (req, res) => {

//const user = await

//user.languagesLearning.push()
//     const languageList = await Language.find({});
//     res.json(languageList);
// })

router.get('/:id/languages/new', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/newlanguage', {user});
})

router.post('/:id/languages', async (req, res) => {
    console.log(req.body); //{ user: { addedLanguage: 'Russian' } }
    const user = await User.findById(req.params.id);

    //if

    //else
    //req.flash('error','you've already added that language')
    user.languagesLearning.push(req.body.user.addedLanguage);
    await user.save();
    console.log(user);
    req.flash('success', 'language added to learning list');
    res.redirect(`/${user._id}/dashboard`);
    //res.send(user);
   // res.send("posting new language");
})

// router.post('/:id/languages/new', isLoggedIn, async (req, res) => {
//     const { language } = req.body.language;
//     const lang = new Language({ language });
//     const newLang = await lang.save();
//     console.log(newLang);
//     //res.send(`user adds new language here ${lang}`)
// })

// router.delete('/:id/languages/:id', isLoggedIn, async (req, res) => {
//     const language = await Language.findByIdAndDelete(req.params.id);
//     res.redirect('/:id/languages');
// })


const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isAccountHolder, storeReturnTo } = require('../middleware/middleware');
const { registerNewUser, loginForm, logUserIn, logOut, registerForm, loadDashboard, getEditProfile, updateProfile, deleteUser, listMembers } = require('../controllers/users')

const User = require('../models/user')
router.get('/register', registerForm);
router.post('/register', registerNewUser);
router.get('/login', loginForm);
router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), logUserIn);

router.get('/logout', logOut);

router.get('/members', isLoggedIn, listMembers)

router.get('/:id/dashboard', isLoggedIn, loadDashboard);

router.get('/:id/edit', isLoggedIn, isAccountHolder, getEditProfile)
//get tasks list is sending to get edit profile for some reason, moved app use tasks to come before userroutes

router.put('/:id', isLoggedIn, isAccountHolder, updateProfile);
router.delete('/:id', isLoggedIn,isAccountHolder, deleteUser)

module.exports = router;

router.get('/:id/languages/new', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/newlanguage', {user});
})

router.post('/:id/languages', async (req, res) => {
    console.log("body is: ",req.body); //{ user: { addedLanguage: 'Russian' } }
    const user = await User.findById(req.params.id);
    user.languagesLearning.push(req.body.user.addedLanguage || req.body.userSearch);
    await user.save();
    req.flash('success', 'language added to learning list');
    res.redirect(`/${user._id}/dashboard`);
})

// router.delete('/:id/languages/:id', isLoggedIn, async (req, res) => {
//     const language = await Language.findByIdAndDelete(req.params.id);
//     res.redirect('/:id/languages');
// })


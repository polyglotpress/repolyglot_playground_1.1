const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isAccountHolder, storeReturnTo, isAuthorised } = require('../middleware/middleware');
const { registerNewUser, loginForm, logUserIn, logOut, registerForm, loadDashboard, getEditProfile, updateProfile, deleteUser, getNewLanguage, postNewLanguage, listMembers, deleteLanguage } = require('../controllers/users')

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

router.get('/:id/languages/new', isLoggedIn, getNewLanguage);
router.post('/:id/languages', isLoggedIn, postNewLanguage);
router.delete('/:id/languages', deleteLanguage); //isAuthorsied fix to work

router.post('/:id/lists', async (req, res) => {
    console.log(req.body)
    const user = await User.findById(req.params.id);
    const wordList = { name:req.body.listName, language:req.body.language, category: req.body.select, words: req.body.words, description: req.body.description};
    user.wordLists.push(wordList);
    await user.save();
    console.log(wordList);
    res.redirect(`/${user._id}/dashboard`);
})

router.delete('/:id/lists', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        $pull: { wordLists: { _id: req.body.wordListId } }
    });
    
    console.log(req.body);
     res.redirect(`/${user._id}/dashboard`);
})

module.exports = router;

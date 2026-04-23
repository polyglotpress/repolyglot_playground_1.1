const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isAccountHolder, storeReturnTo, isAuthorised } = require('../middleware/middleware');
const { registerNewUser, loginForm, logUserIn, logOut, registerForm, loadDashboard, getEditProfile, updateProfile, deleteUser, uploadUserImage, getNewLanguage, postNewLanguage, listMembers, deleteLanguage } = require('../controllers/users')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); //
const User = require('../models/user')



const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); //temporary

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


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
router.delete('/:id', isLoggedIn, isAccountHolder, deleteUser)

///router.post('/uploadImage', uploadUserImage); ///

router.post('/uploadImage', upload.single('avatar'), async (req, res) => {
    try {
        console.log(req.body);
        const result = await cloudinary.uploader.upload(req.file.path);
        //     , {
        //     folder: "profiles",
        //     transformation: [
        //         { width: 300, height: 300, crop: "fill" },
        //         { quality: "auto" }
        //     ]
        // });
        const imageUrl = result.secure_url;
        console.log(imageUrl);
        const user = await User.findById(req.params.id);
        user.profileImage = imageUrl; //add to model
        await user.save();

        res.redirect(`/${req.user.id}/dashboard`);
    } catch (err) {
        console.error(err);
        res.send("upload failed");
    }
})

router.get('/:id/languages/new', isLoggedIn, getNewLanguage);
router.post('/:id/languages', isLoggedIn, postNewLanguage);
router.delete('/:id/languages', deleteLanguage); //isAuthorsied fix to work

router.post('/:id/lists', async (req, res) => {
    console.log(req.body);
    const user = await User.findById(req.params.id);

    if (req.body.wordList) {
        await User.findOneAndUpdate(
            { _id: req.params.id, "wordLists._id": req.body.wordList },
            { $push: { "wordLists.$.words": req.body.words } }
        )
    }
    //either new list or adding words from current list
    else {
        const wordList = { name: req.body.listName, language: req.body.language, category: req.body.select, words: req.body.words, description: req.body.description };
        user.wordLists.push(wordList);
    }

    await user.save();

    res.redirect(`/${user._id}/dashboard`);
})

router.delete('/:id/lists', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        $pull: { wordLists: { _id: req.body.wordListId } }
    });

    console.log(req.body);
    res.redirect(`/${user._id}/dashboard`);
})

router.delete('/:id/lists/word', async (req, res) => {

    const user = await User.findOneAndUpdate(
        { _id: req.params.id, "wordLists._id": req.body.wordList },
        { $pull: { "wordLists.$.words": req.body.word } }
    );
    await user.save();
    res.redirect(`/${user._id}/dashboard`);
})


module.exports = router;


const Task = require('../models/task')
const User = require('../models/user')

module.exports.registerForm = (async (req, res) => {
    res.render('users/register');
})

module.exports.registerNewUser = (async (req, res, next) => {
    try {
        const user = new User({ firstname: req.body.firstname, lastname: req.body.lastname, nativeLanguage: req.body.nativeLanguage, email: req.body.email, username: req.body.username })
        const registeredUser = await User.register(user, req.body.password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Repolyglot!'); //?
            res.redirect('/tasks');
        })

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
})

module.exports.loginForm = ((req, res) => {
    res.render('users/login');
})

module.exports.logUserIn = ((req, res) => {
    console.log("session returnTo: ", req.session.returnTo);
      console.log("session id: ", req.sessionID);
    req.flash('success', 'Welcome back to RePolyglot');
    // const redirectUrl = req.session.returnTo || `/${req.user._id}/dashboard`;
     const redirectUrl = res.locals.returnTo || `/${req.user._id}/dashboard`;
    //delete req.session.returnTo;
    res.redirect(redirectUrl);
})

module.exports.logOut = ((req, res, next) => { //post?
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'logged out, see you later');
        res.redirect('/tasks');
    });
})

module.exports.loadDashboard = (
    async (req, res) => {
        try {
            const tasks = await Task.find({ creator: req.user._id });
            const user = await User.findById(req.params.id).populate("tasks");
            res.render('users/dashboard', { user, tasks: user.tasks });
        } catch (err) {
            console.log(err.message);
        }
    }
)

module.exports.getEditProfile = (
    async (req, res) => {
        const user = await User.findById(req.params.id);
        res.render('users/editprofile', { user });
    })


module.exports.updateProfile = ( //this isn't actually updating details
    async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { ...req.body.user }, { new: true });
            res.redirect(`/${user.id}/dashboard`);
        } catch (err) {
            console.log(err.message);
            res.redirect(`/${req.params.id}/dashboard`)
        }
    })

module.exports.deleteUser = (
    async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id);
        res.redirect('/home');
    })

module.exports.listMembers = (
    async (req, res) => {
        const users = await User.find({});
        res.render('members', { users });
    })
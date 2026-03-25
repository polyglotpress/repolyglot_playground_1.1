const User = require('../models/user');
const Task = require('../models/task');

//user middleware
module.exports.isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        console.log("saving return to: ", req.session.returnTo); //then check if same user id as logged in user, otherwise returns to previous user's dashboard, security
        req.flash("error", "you must be logged in!");
        return res.redirect('/login');
    }
    next();
}

module.exports.isAccountHolder = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user._id.equals(req.user.id)) {
            req.flash('error', 'You are not the account holder');
            return res.redirect("/login");
        }
        next();
    } catch (err) {
        console.log("error is here, " + err);
    }
}

//task middleware
module.exports.isAuthorised = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (!task.creator.equals(req.user.id)) {
        req.flash('error', 'You do not have permission to do that');
        return res.redirect("/login");
    }
    next();
}


module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}
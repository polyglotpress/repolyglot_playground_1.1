//middleware

const User = require('../models/user');
const Task = require('../models/task');

//user middleware
module.exports.isLoggedIn = (req, res, next) => {
    console.log("user: ", req.user);
    if (!req.isAuthenticated()) {
        // req.locals.returnToUrl = req.originalUrl;
        req.flash("error", "you must be logged in!");
        return res.redirect("/login");
    }
    next();
}

module.exports.isAccountHolder = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user._id.equals(req.user.id)) {
            req.flash('error', 'You are not the account holder');
            //return res.redirect(`/${req.params.id}/dashboard`);
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
        // return res.redirect(`/tasks/${req.params.id}`);
         return res.redirect("/login");
    }
    next();
}


//module.exports.validateLanguage
//check language doesn't exist yet in user profile
//check is valud language

// module.exports.saveReturnToUrl = (req, res, next) => {
//     if (req.session.returnToUrl) {
//         res.locals.returnToUrl = req.session.returnToUrl;
//     }

//     next();
// }

// module.exports.isCreator


const Task = require('../models/task');
const User = require('../models/user');

module.exports.listTasks = (
    async (req, res) => { //display all tasks from database on this page
        const tasks = await Task.find({}).populate('creator');
        res.render('tasks/index', { tasks });
    })

module.exports.newTaskForm = (
    async (req, res) => {
        //const user = await User.findById(req.params.id); //find logged in user???
        console.log("user requesting form ", req.user);
        if (req.user) {
            const user = req.user;
            const languages = req.user.languagesLearning;
            if (languages.length == 0)
                languages.push("English");
            res.render('tasks/new', { user, languages }); //so user only sees their languages
        }
        else {
            req.flash('error', 'You must be logged in to create tasks!');
            res.redirect('/login');

        }
    })

module.exports.newTask = (
    async (req, res) => {
        const task = new Task(req.body.task);
        const user = await User.findById(req.user._id);
        console.log("user creating this task is: " + user);
        task.creator = req.user._id;
        user.tasks.push(task._id); // ???????????? populate
        await task.save();
        await user.save();
        req.flash('success', 'task added');
        res.redirect(`/tasks/${task.id}`)
    })

module.exports.showTask = (
    async (req, res) => {
        const task = await Task.findById(req.params.id).populate('creator');
        if (!task) {
            req.flash('error', 'task does not exist');
            return res.redirect('/tasks');
        }
        res.render('tasks/show', { task });
    }
)

module.exports.getBeginTask = (
    async (req, res) => {
        const task = await Task.findById(req.params.id);
        res.render('tasks/start', { task });
    }
)

module.exports.getEditTask = (
    async (req, res) => {
        const task = await Task.findById(req.params.id)
        res.render('tasks/edit', { task });
    }
)

module.exports.updateTask = (
    async (req, res) => {
        const task = await Task.findByIdAndUpdate(req.params.id, { ...req.body.task })
        res.redirect(`/tasks/${task._id}`); //fix redirects
    }
)

module.exports.deleteTask = (
    async (req, res) => {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
    }
)

module.exports.addNote = (
    async (req, res) => {
        const task = await Task.findById(req.params.id);
        task.notes.push(req.body.note);
        await task.save();
        res.redirect(`/tasks/${task._id}`);
    }
)
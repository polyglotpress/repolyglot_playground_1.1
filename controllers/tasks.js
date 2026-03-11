const Task = require('../models/task');

module.exports.listTasks = (
    async (req, res) => { //display all tasks from database on this page
        const tasks = await Task.find({}).populate('creator');
        res.render('tasks/index', { tasks });
    })

module.exports.newTaskForm = (
    (req, res) => {
    res.render('tasks/new'); //make so user only sees their languages
})

module.exports.newTask = (
    async (req, res) => {
    const task = new Task(req.body.task);
    
        
        task.creator = req.user._id;
        console.log(task.creator)
    await task.save();
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
        console.log(task);
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
    console.log("got here");
    const task = await Task.findById(req.params.id);
    task.notes.push(req.body.note);
    await task.save();
    console.log(task);
    res.redirect(`/tasks/${task._id}`);
    //res.json(req.body.note);
    //   const note = await 
    //save note to array of notes for that task
}
)
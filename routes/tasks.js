const express = require('express');
const Task = require('../models/task');
const User = require('../models/user')
// const wrapAsync = require('../helpers/wrapAsync.js');
const router = express.Router();
const { isLoggedIn, isAuthorised } = require('../middleware/middleware');
const { listTasks, newTask, newTaskForm, showTask, getBeginTask, getEditTask, updateTask, deleteTask, addNote } = require('../controllers/tasks');

router.get('/', listTasks); //currenlty sending to get edit profile
router.post('/', isLoggedIn, newTask);
router.get('/new', isLoggedIn, newTaskForm);

router.get('/:id', showTask);
router.get('/:id/start', isLoggedIn, getBeginTask);
router.get('/:id/edit', isLoggedIn, isAuthorised, getEditTask);
router.put('/:id', isLoggedIn, isAuthorised, updateTask);
router.delete('/:id', isLoggedIn, isAuthorised, deleteTask);
router.post('/:id/notes', isLoggedIn, isAuthorised, addNote);

router.post('/:id/markTaskComplete', async (req, res) => {
    console.log(req.body)
    const user = await User.findById(req.user).populate('tasks');
    const task = user.tasks.find(t => t._id.toString() === req.params.id);
    task.completed = true;
    await task.save();
    await user.save();
    res.redirect('/tasks');
})

module.exports = router;
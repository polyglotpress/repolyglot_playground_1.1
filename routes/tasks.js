const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/', async (req, res) => { //display all tasks from database on this page
    const tasks = await Task.find({});
    res.render('tasks/index', { tasks });
})

router.post('/', async (req, res) => {
    const task = new Task(req.body.task);
    await task.save();
    res.redirect(`/tasks/${task._id}`)
})

router.get('/new', (req, res) => {
    res.render('tasks/new'); //send array of languages
})


router.get('/:id', async (req, res) => {

    const task = await Task.findById(req.params.id)
    res.render('tasks/show', { task });
})

router.get('/:id/edit', async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.render('tasks/edit', { task });
})

router.put('/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, { ...req.body.task })
    res.redirect(`/tasks/${task._id}`);
})

router.delete('/:id', async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
})

router.post('/:id/notes', async (req, res) => {

    res.json(req.params);
    //   const note = await 
    //save note to array of notes for that task
})

module.exports = router;
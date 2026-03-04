const Task = require('../models/task');
const User = require('../models/user');
const Language = require('../models/language');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); //

const { seedTasks } = require('./seedData');

let MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL);

mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", () => {
    console.log("Database connected");
})

//delete all tasks and seed
const seedTaskDb = async () => {
    await Task.deleteMany({});

    for (let i = 0; i < seedTasks.length; i++) {
        const task = new Task({
            title: seedTasks[i]
        })
        await task.save();
    }
    console.log("Seeding complete");
}

//delete all users? run before deploying
const seedUserDb = async () => {
    await User.deleteMany({});
    const newUser1 = new User({
        username: "repolyglot",
        email: "repolyglot@gmail.com",
        password: "fakepassword1"
    })
    await newUser1.save();
    console.log("dummy user saved");
}

const seedLanguageDb = async () => {
    await Language.deleteMany({});
    console.log("languages deleted from database");
}

seedTaskDb();
seedUserDb();
seedLanguageDb();

mongoose.connection.close();
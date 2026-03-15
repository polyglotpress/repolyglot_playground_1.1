const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Task = require('../models/task');
const User = require('../models/user');
const { seedTasks, seedUsers } = require('./seedData');


//const languagesArray = ["English", "Sp"];

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
            title: seedTasks[i],
            category: "General",
            description: "No description yet",
            language: "Any",
            creator: '69b57fc9b8cb7aece3effd7c' //
        })
        await task.save();
    }
    console.log("Seeding complete");
}

seedTaskDb();

//delete all users? run before deploying
// const seedUserDb = async () => {
//     await User.deleteMany({});

//     for (const seedUser of seedUsers) {
//         newUser = new User({
//             firstname: seedUser.firstname,
//             lastname: seedUser.lastname,
//             password: seedUser.password,
//             username: `${seedUser.firstname.toLowerCase()}${seedUser.lastname.toLowerCase()}`,
//             email: seedUser.email,
//             nativeLanguage: seedUser.nativeLanguage,
//             languagesLearning: seedUser.languagesLearning
//         })
//            const registeredUser = await User.register(newUser, seedUser.password);
//         //await newUser.save();
//     }}

// seedUserDb();

// mongoose.connection.close();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const Task = require('../models/task');
const User = require('../models/user');

const { seedTasks, seedUsers } = require('./seedData');


//const languagesArray = ["English", "Sp"];

let MONGO_URL = process.env.MONGO_URI;
console.log("connection url is: " + MONGO_URL);

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
            creator: '69ae967b0d5e82fa74f4ff3e' //
        })
        await task.save();
        console.log("new task is: " + task);
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
//             username: `${seedUser.firstname.toLowerCase()}${seedUser.lastname.toLowerCase()}`,
//             email: seedUser.email,
//             nativeLanguage: seedUser.nativeLanguage,
//             languagesLearning: seedUser.languagesLearning
//         })
//         //  for(const languageLearning of seedUserslanguagesLearning) {
//         // newUser.languagesLearning.push(languageLearning)
//         //         }
//         await newUser.save();
//         console.log("new user seeded: " + newUser);
//     }
// }


// seedUserDb();

// mongoose.connection.close();
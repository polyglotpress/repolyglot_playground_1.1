const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Task = require('../models/task');
const User = require('../models/user');
const Tip = require('../models/tip');
const { seedTasks, seedUsers } = require('./seedData');
const task = require('../models/task');


let MONGO_URL = process.env.MONGO_URI;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", () => {
    console.log("Database connected");
})


const seedDB = async () => {
    await User.deleteMany({});
    await Task.deleteMany({});
    await Tip.deleteMany({});

    const newUsers = [];

    for (const seedUser of seedUsers) {
        const user = new User({
            firstname: seedUser.firstname,
            lastname: seedUser.lastname,
            password: seedUser.password,
            username: `${seedUser.firstname.toLowerCase()}${seedUser.lastname.toLowerCase()}`,
            email: seedUser.email,
            nativeLanguage: seedUser.nativeLanguage,
            languagesLearning: seedUser.languagesLearning
        })
        const registeredUser = await User.register(user, seedUser.password);
        newUsers.push(registeredUser);

    }

    for (const seedTask of seedTasks) {
        const randomUser = newUsers[Math.floor(Math.random() * newUsers.length)];

        const task = new Task({
            title: seedTask,
            category: "General",
            description: "No description yet",
            language: "Any",
            creator: randomUser._id
        })
        await task.save();
    }

    const randomTipUser = newUsers[Math.floor(Math.random() * newUsers.length)];

    await Tip.insertMany([

        { category: 'Grammar', details: 'Cooljugator is a very helpful website for verb conjugation tables.', author: newUsers[Math.floor(Math.random() * newUsers.length)]._id },
        { category: 'Vocabulary', details: 'Write new words using pen and paper, it goes into your memory.', author: newUsers[Math.floor(Math.random() * newUsers.length)]._id },
        { category: 'Reading', details: 'Read the words out loud.', author: newUsers[Math.floor(Math.random() * newUsers.length)]._id },
        { category: 'Writing', details: 'Use a dictionary of a translation tool.', author: newUsers[Math.floor(Math.random() * newUsers.length)]._id },
        { category: 'Grammar', details: 'There are not too many conjunctions, you can learn them in a song.', author: randomTipUser._id }

    ])
}

seedDB().then(() => {
    console.log("Seeding successful.");
    mongoose.connection.close();

}).catch(err => {
    console.error(err);
    mongoose.connection.close();
})

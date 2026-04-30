module.exports.seedTasks = [
    'Message a friend on tandem language exchange app',
    'Try a crossword puzzle in your target language',
    'Write 3 sentences about your day',
    'Do 30 exercises on Elon.io',
    'Read a short story for kids in your target language',
    'Name 10 things you see around you',
    'Learn 15 new verb infinitives',
    'Read grammar rules of your target language',
    'Watch a YouTube video in your target language',
    'Skim through a dictionary',
    'Listen to a song and learn the lyric translations'
]

module.exports.seedUsers = [
    {
        firstname: "Lee",
        lastname: "Hammer",
        password: "password",
        email: "leehammer@gmail.com",
        nativeLanguage: "English",
        languagesLearning: ["Spanish", "Hungarian"],
        wordLists: [{
            name: "unas nuevas palabras",
            language: "Spanish",
            category: "Vocabulary",
            words: ["mesa", "silla", "bolígrafo", "agua", "ventanta"],
            description: ""
        }
        ]
    },
    {
        firstname: "Elia",
        lastname: "Lamm",
        password: "password",
        email: "elia3@yahoo.com",
        nativeLanguage: "French",
        languagesLearning: ["English", "Hebrew"],
        wordLists: [
            {
            name: "wordlist 1 Elia",
            language: "English",
            category: "Vocabulary",
            words: ["table", "laptop", "garden", "donkey"],
            description: ""
            },
             {
            name: "wordlist 2 Elia",
            language: "Hebrew",
            category: "Vocabulary",
            words: ["שלום", "להתראות", "מטבח", "מיטה"],
            description: "de mots random au l'hebreu pour m'aider aprendre"
        }
        ]
    },
    {
        firstname: "Antonio",
        lastname: "Jueve",
        password: "password",
        email: "antoniojueve@gmail.com",
        nativeLanguage: "Spanish",
        languagesLearning: ["English", "Portuguese", "Yiddish"],
        wordLists: []

    },
    {
        firstname: "Elizabeth",
        lastname: "Smith",
        password: "password",
        email: "lizsmith@email.fr",
        nativeLanguage: "French",
        languagesLearning: ["Spanish", "Finnish"],
        wordLists: []
    },
    {
        firstname: "Lior",
        lastname: "Shahar",
        password: "password",
        email: "lisha@email.com",
        nativeLanguage: "Hebrew",
        languagesLearning: ["English", "French"],
        wordLists: []
    },
    {
        firstname: "Alexander",
        lastname: "Koplovitch",
        password: "password",
        email: "alex123@gmail.com",
        nativeLanguage: "Russian",
        languagesLearning: ["English"],
        wordLists: []
    }
]
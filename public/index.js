
setTimeout(() => {
    document.querySelectorAll('.alert').forEach(alert => alert.style.display = 'none');
}, 4000); // Hides flash messages after 3 seconds

console.log("JS loaded from public");

const languages = [
    { name: "Afrikaans", code: "af" },
    { name: "Albanian", code: "sq" },
    { name: "Amharic", code: "am" },
    { name: "Arabic", code: "ar" },
    { name: "Armenian", code: "hy" },
    { name: "Azerbaijani", code: "az" },
    { name: "Basque", code: "eu" },
    { name: "Belarusian", code: "be" },
    { name: "Bengali", code: "bn" },
    { name: "Bosnian", code: "bs" },
    { name: "Bulgarian", code: "bg" },
    { name: "Catalan", code: "ca" },
    { name: "Chinese", code: "zh" },
    { name: "Croatian", code: "hr" },
    { name: "Czech", code: "cs" },
    { name: "Danish", code: "da" },
    { name: "Dutch", code: "nl" },
    { name: "English", code: "en" },
    { name: "Esperanto", code: "eo" },
    { name: "Estonian", code: "et" },
    { name: "Faroese", code: "fo" },
    { name: "Filipino", code: "fil" },
    { name: "Finnish", code: "fi" },
    { name: "French", code: "fr" },
    { name: "Galician", code: "gl" },
    { name: "Georgian", code: "ka" },
    { name: "German", code: "de" },
    { name: "Greek", code: "el" },
    { name: "Guarani", code: "gn" },
    { name: "Gujarati", code: "gu" },
    { name: "Hausa", code: "ha" },
    { name: "Hawaiian", code: "haw" },
    { name: "Hebrew", code: "he" },
    { name: "Hindi", code: "hi" },
    { name: "Hungarian", code: "hu" },
    { name: "Icelandic", code: "is" },
    { name: "Indonesian", code: "id" },
    { name: "Irish", code: "ga" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Kannada", code: "kn" },
    { name: "Kazakh", code: "kk" },
    { name: "Korean", code: "ko" },
    { name: "Kurdish", code: "ku" },
    { name: "Kyrgyz", code: "ky" },
    { name: "Lao", code: "lo" },
    { name: "Latin", code: "la" },
    { name: "Latvian", code: "lv" },
    { name: "Lingala", code: "ln" },
    { name: "Lithuanian", code: "lt" },
    { name: "Macedonian", code: "mk" },
    { name: "Malay", code: "ms" },
    { name: "Maltese", code: "mt" },
    { name: "Marathi", code: "mr" },
    { name: "Mongolian", code: "mn" },
    { name: "Nepali", code: "ne" },
    { name: "Norwegian", code: "no" },
    { name: "Pashto", code: "ps" },
    { name: "Persian", code: "fa" },
    { name: "Polish", code: "pl" },
    { name: "Portuguese", code: "pt" },
    { name: "Punjabi", code: "pa" },
    { name: "Romanian", code: "ro" },
    { name: "Romansh", code: "rm" },
    { name: "Russian", code: "ru" },
    { name: "Gaelic", code: "gd" },
    { name: "Serbian", code: "sr" },
    { name: "Sinhala", code: "si" },
    { name: "Slovak", code: "sk" },
    { name: "Slovenian", code: "sl" },
    { name: "Somali", code: "so" },
    { name: "Southern Sotho", code: "st" },
    { name: "Spanish", code: "es" },
    { name: "Sundanese", code: "su" },
    { name: "Swahili", code: "sw" },
    { name: "Swedish ", code: "sv" },
    { name: "Tajik", code: "tg" },
    { name: "Tamil", code: "ta" },
    { name: "Tatar", code: "tt" },
    { name: "Telugu", code: "te" },
    { name: "Thai", code: "th" },
    { name: "Tigrinya", code: "ti" },
    { name: "Tongan", code: "to" },
    { name: "Turkish", code: "tr" },
    { name: "Turkmen", code: "tk" },
    { name: "Twi", code: "tw" },
    { name: "Ukrainian", code: "uk" },
    { name: "Urdu", code: "ur" },
    { name: "Uyghur", code: "ug" },
    { name: "Uzbek", code: "uz" },
    { name: "Vietnamese", code: "vi" },
    { name: "Walloon", code: "wa" },
    { name: "Welsh Cymraeg", code: "cy" },
    { name: "Western Frisian", code: "fy" },
    { name: "Xhosa", code: "xh" },
    { name: "Yiddish", code: "yi" },
    { name: "Yoruba ", code: "yo" },
    { name: "Zulu", code: "zu" }
];

const addLanguageInNewTaskFormBtn = document.querySelector("#adding-language");

addLanguageInNewTaskFormBtn.addEventListener("click", () => {
    console.log("adding clicked");
    // document.querySelector("#newLanguageModal").show();

    for (let l of languages) {
        const d = document.createElement('option');
        d.value = l.name;
        d.textContent = l.name;
        document.querySelector("#new-language-select").appendChild(d);
    }
    const myThing = document.querySelector("#new-language-select");
    myThing.addEventListener("change", () => {
        document.querySelector("#user-search").value = myThing.value;
    })

})

const userSearchLanguage = document.querySelector("#user-search");
userSearchLanguage.addEventListener("input", (event) => {
    document.querySelector("#new-language-select").innerHTML = "";
    let arr = [];
    for (let l of languages) {
        if (l.name.toLowerCase().indexOf(userSearchLanguage.value) !== -1) { //
            arr.push(l);
            const d = document.createElement('option');
            d.value = l.name;
            d.textContent = l.name;
            document.querySelector("#new-language-select").appendChild(d);
        }
    }

})


// const form = document.querySelector("#login-form")
// const inputs = form.querySelectorAll("input")

// inputs.forEach(input => {
//   const errorContainerID = `${input.name}Error`
//   const errorContainer = document.getElementById(errorContainerID)
//   input.addEventListener("invalid", (e) => {
//     // Stop the browser from displaying the default error messages
//     e.preventDefault()
//     errorContainer.innerText = input.validationMessage
//   })
// })

//dismiss new tip modal on submit

// const postTipBtn = document.querySelector("#submit-tip");
// postTipBtn.addEventListener("click", () => {
//    document.querySelector("#add-tip-modal").modal('hide');
// })
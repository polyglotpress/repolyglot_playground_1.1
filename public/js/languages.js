
const languageToCountry = {
    en: {
        versions: ["english", "eng"],
        name: "English",
        countries: ["United Kingdom", "United States", "Canada", "Australia"],
        codes: ["GB", "US", "CA", "AU"]
    },
    es: {
        versions: ["spanish", "espanol", "español"],
        name: "Spanish",
        countries: ["Spain", "Mexico", "Argentina"],
        codes: ["ES", "MX", "AR"]
    },
    fr: {
        versions: ["french", "francais", "français"],
        name: "French",
        countries: ["France", "Belgium", "Canada"],
        codes: ["FR", "BE", "CA"]
    },
    de: {
        versions: ["german", "deutsch"],
        name: "German",
        countries: ["Germany", "Austria", "Switzerland"],
        codes: ["DE", "AT", "CH"]
    },
    pt: {
        versions: ["portuguese", "portugues", "português"],
        name: "Portuguese",
        countries: ["Portugal", "Brazil"],
        codes: ["PT", "BR"]
    },
    nl: {
        versions: ["dutch", "nederlands"],
        name: "Dutch",
        countries: ["Netherlands", "Belgium"],
        codes: ["NL", "BE"]
    },
    sv: {
        versions: ["swedish", "svenska"],
        name: "Swedish",
        countries: ["Sweden"],
        codes: ["SE"]
    },
    no: {
        versions: ["norwegian", "norsk"],
        name: "Norwegian",
        countries: ["Norway"],
        codes: ["NO"]
    },
    da: {
        versions: ["danish", "dansk"],
        name: "Danish",
        countries: ["Denmark"],
        codes: ["DK"]
    },
    fi: {
        versions: ["finnish", "suomi"],
        name: "Finnish",
        countries: ["Finland"],
        codes: ["FI"]
    },
    pl: {
        versions: ["polish", "polski"],
        name: "Polish",
        countries: ["Poland"],
        codes: ["PL"]
    },
    cs: {
        versions: ["czech", "čeština"],
        name: "Czech",
        countries: ["Czech Republic"],
        codes: ["CZ"]
    },
    hu: {
        versions: ["hungarian", "magyar"],
        name: "Hungarian",
        countries: ["Hungary"],
        codes: ["HU"]
    },
    ro: {
        versions: ["romanian", "română"],
        name: "Romanian",
        countries: ["Romania"],
        codes: ["RO"]
    },
    el: {
        versions: ["greek", "ελληνικά"],
        name: "Greek",
        countries: ["Greece"],
        codes: ["GR"]
    },
    tr: {
        versions: ["turkish", "türkçe"],
        name: "Turkish",
        countries: ["Turkey"],
        codes: ["TR"]
    },
    ru: {
        versions: ["russian", "русский"],
        name: "Russian",
        countries: ["Russia"],
        codes: ["RU"]
    },
    uk: {
        versions: ["ukrainian", "українська"],
        name: "Ukrainian",
        countries: ["Ukraine"],
        codes: ["UA"]
    },

    he: {
        versions: ["hebrew", "ivrit"],
        name: "Hebrew",
        countries: ["Israel"],
        codes: ["IL"]
    },
    zh: {
        versions: ["chinese", "mandarin", "中文"],
        name: "Chinese",
        countries: ["China", "Taiwan"],
        codes: ["CN", "TW"]
    },
    ja: {
        versions: ["japanese", "日本語"],
        name: "Japanese",
        countries: ["Japan"],
        codes: ["JP"]
    },
    ko: {
        versions: ["korean", "한국어"],
        name: "Korean",
        countries: ["South Korea"],
        codes: ["KR"]
    },
    hi: {
        versions: ["hindi"],
        name: "Hindi",
        countries: ["India"],
        codes: ["IN"]
    }
};
//show task page
const flagDiv = document.querySelector("#flag");
if (flagDiv) {
    let lang = document.querySelector("#task-language").value.trim();
    fetchFlagUrl(lang)
}

//members page
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".members-flags").forEach(el => {
        fetchFlagUrl(el.innerText, el.id);
    })
})


function fetchFlagUrl(lang, appendTo = "flag") {
    console.log(lang);

    let code = Object.entries(languageToCountry).find(([__dirname, v]) => Object.values(v).flat().includes(lang))?.[0]
    console.log(code);

    let countryCode = languageToCountry[code].codes[0];
    console.log(countryCode);
    let flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
    console.log(flagUrl);

    const el = document.createElement('img')
    el.src = flagUrl;
const flagName = document.querySelector("#flagName");
        
    if (flagName) {
        el.addEventListener('mouseover', () => {
            
            flagName.textContent = languageToCountry[code].name;
            flagName.style.display = 'block';
            console.log(languageToCountry[code].name);
        })
        el.addEventListener('mouseout', () => {
           
            flagName.textContent = ""
            flagName.style.display = 'none';
        })
        
    }
    document.querySelector(`#${appendTo}`).innerHTML = "";
    document.querySelector(`#${appendTo}`).append(el);
    
}

//method validate language before adding to profile - in register form, and dashboard add language, and task language

//check exists

//change spelling

//check no doubles

const validateNewLanguage = () => {
    //check no duplicates
    
}

async function getCountryFromAPI() {
    await fetch("https://restcountries.com/v3.1/name/monaco")
        .then(res => res.json())
        .then(data => console.log(data))
}

//

//languages for selects - register etc, add-language
function setLanguageSelect(event, languagesLearning = []) {
    const addLanguageSelect = document.querySelector("#add-language-select");
    const nativeLanguageSelect = document.querySelector("#native-language-select");
    const editProfileSelect = document.querySelector("#edit-profile-native-select");

    for (const [key] of Object.entries(languageToCountry)) {
        if (!languagesLearning.includes(languageToCountry[key].name)) {
            const opt = document.createElement("option");
            opt.value = languageToCountry[key].name;
            console.log(opt.value);
            opt.innerText = opt.value;
            if (event.currentTarget.id == "add-language-select")
                addLanguageSelect.appendChild(opt);
            else if (event.currentTarget.id == "native-language-select")
                nativeLanguageSelect.appendChild(opt);
            else if (event.currentTarget.id == "edit-profile-native-select")
                editProfileSelect.appendChild(opt); 
        }
    }

}

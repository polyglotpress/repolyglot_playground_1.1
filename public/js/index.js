
setTimeout(() => {
    //document.querySelectorAll('.alert').forEach(alert => alert.style.display = 'none');
    document.querySelectorAll('.alert').forEach(alert => alert.classList.remove('alert-success'));
    document.querySelectorAll('.alert').forEach(alert => alert.classList.remove('alert-danger'));
    document.querySelectorAll('.alert').forEach(alert => alert.textContent = "");
}, 3000); // Hides flash messages after 3 seconds


// const addLanguageInNewTaskFormBtn = document.querySelector("#adding-language");


// if (addLanguageInNewTaskFormBtn) {
//     addLanguageInNewTaskFormBtn.addEventListener("click", () => {
//         console.log("adding clicked");
//         // document.querySelector("#newLanguageModal").show();

//         for (let l of languages) {
//             const d = document.createElement('option');
//             d.value = l.name;
//             d.textContent = l.name;
//             document.querySelector("#new-language-select").appendChild(d);
//         }
//         const myThing = document.querySelector("#new-language-select");
//         myThing.addEventListener("change", () => {
//             document.querySelector("#user-search").value = myThing.value;
//         })

//     })
    
// }

// const userSearchLanguage = document.querySelector("#user-search");

// if (userSearchLanguage) {
//     userSearchLanguage.addEventListener("input", (event) => {
//         document.querySelector("#new-language-select").innerHTML = "";
//         let arr = [];
//         for (let l of languages) {
//             if (l.name.toLowerCase().indexOf(userSearchLanguage.value) !== -1) { //
//                 arr.push(l);
//                 const d = document.createElement('option');
//                 d.value = l.name;
//                 d.textContent = l.name;
//                 document.querySelector("#new-language-select").appendChild(d);
//             }
//         }

//     })
// }

// const form = document.querySelector("#login-form")
// const inputs = form.querySelectorAll("input")


//dismiss new tip modal on submit

// const postTipBtn = document.querySelector("#submit-tip");
// postTipBtn.addEventListener("click", () => {
//    document.querySelector("#add-tip-modal").modal('hide');
// })

//initialise modals

// function InitialiseModals() {
// const deleteProfileModal = new Modal('#deleteProfileModal');
// const addListModal = new Modal('#addListModal');
// const addLanguageModal = new Modal('#addLanguageModal');
// }
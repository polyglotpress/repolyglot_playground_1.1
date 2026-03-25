// const wordListLinks = document.querySelectorAll(".word-list-link");

// const wordListBtns = document.querySelectorAll(".word-list-btn");
// //hide buttons if list doens't belong to logged in user

// wordListLinks.forEach(listLink => {
//     listLink.addEventListener("click", async () => {
//         console.log("clicked")
//         const listId = listLink.dataset.id;

//         await fetch(`/list/${listId}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 const wordList = data.wordList;
//                 const currentUser = data.currentUser;
//                 const isListCreator = currentUser.id === wordList.creator.id;
//                 if (!isListCreator) {

//                     for (let btn of wordListBtns) {
//                         btn.style.display = "none";
//                     }
//                 }
//             })
//     })
// })

// wordListLinks.forEach(listLink => {
//     listLink.addEventListener("mouseover", async () => {
// console.log("mouse over")
//     }
       
// )}
// )

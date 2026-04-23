
function showUploadImageForm() {
 document.querySelector("#image-form").style.display = "block" //("display", "block")   
}


function addToVocab() {

    //check previous word input isn't empty
console.log("got here")

    let count = document.querySelectorAll(".list-word-input").length;
    console.log(count);
    let previousWordInput = document.querySelector(`#list-word-${count}`).value;
    console.log(previousWordInput);

    if (previousWordInput == "") {
        document.querySelector("#add-word-comments").textContent = "Please add previous word first."
        return;
    }
    
     document.querySelector("#add-word-comments").textContent = "Adding words to list."
    let d = document.createElement("div");
    d.setAttribute("class", "form-floating mb-3 anotherWordDiv");

    let label = document.createElement("label");
    label.htmlFor = `list-word-${count+1}`;
    label.textContent = "add word"

    let input = document.createElement("input");
    input.setAttribute("id", `list-word-${count+1}`);
    input.setAttribute("class", "form-control list-word-input")
    input.name = "words[]"

    d.appendChild(label);
    d.appendChild(input);

    document.querySelector("#add-words-div").appendChild(d);
    document.querySelector("#list-word-count").textContent = count;
}



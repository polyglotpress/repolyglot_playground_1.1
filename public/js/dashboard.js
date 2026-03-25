
function addMoreWords() {
    let d = document.createElement("div");
    d.setAttribute("class", "anotherWordDiv");

    let label = document.createElement("label");
    label.htmlFor = "list-word-input";
    label.textContent = "add word"

    let input = document.createElement("input");
    input.setAttribute("id", "list-word-input");
    input.name = "words[]"

    d.appendChild(label);
    d.appendChild(input);

    document.querySelector("#word-list-words").append(d);
}



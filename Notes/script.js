const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".createBtn");
let notes = document.querySelectorAll(".input-box");

function createNote() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    // inputBox.onkeyup = function () {
    //     updateStorage();
    // }
    img.src = "Images/delete.png";
    img.alt = "delete";
    img.onclick = deleteNote;
    notesContainer.appendChild(inputBox).appendChild(img);
}
function deleteNote() {
    this.parentElement.remove();
    updateStorage();
}
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNote() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    console.log(localStorage.getItem("notes"));
}
// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "p") {
//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function () {
//                 updateStorage();
//             }
//         })
//     }
// })

showNote();
var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("submitError");

function validateName() {
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}
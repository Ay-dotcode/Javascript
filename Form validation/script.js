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
function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}
function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "Email no is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
function validateMessage() {
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = `${left} more characters are required`;
        return false;
    }
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
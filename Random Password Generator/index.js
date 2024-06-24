function generatePassword() {
    password.textContent = "";
    const passwordLen = document.getElementById("noOfChar").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let allowedChars = "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (passwordLen < 5)
        password.textContent = "Number of characters must be at least 5";
    else if (passwordLen > 30)
        password.textContent = "Number of characters must be less than 30";
    else if (!allowedChars.length)
        password.textContent = "At least one set of characters needs to be selected";
    else for (let i = 0; i < passwordLen; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password.textContent += allowedChars[randomIndex];
    }
}
const password = document.getElementById("password");
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "~`! @#$%^&*()_-+={[}]|:;'<,>.?/";


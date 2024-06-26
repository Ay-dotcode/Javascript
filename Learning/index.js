// defining variables
const myCheckbox = document.getElementById("myCheckbox");
const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const result = document.getElementById("result");

const timerP = document.getElementById("timerP");


function commingSoon() {
    window.alert("Comming soon");
}

let username = "";
mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        username = myText.value;
        if (username === "")
            result.textContent = "Pls enter your username"
        else
            result.textContent = `Your username is ${username}`;
    } else {
        result.textContent = `Pls agree to the terms and conditions`;
    }
}

// Can sum any number of arguments
function add(...numbers) {
    let ans = 0;
    for (const num of numbers)
        ans += num
    return ans;
}

function startTimer() {
    setTimeout(() => timerP.textContent = "Timer: 5s", 1000);
    setTimeout(() => timerP.textContent = "Timer: 4s", 2000);
    setTimeout(() => timerP.textContent = "Timer: 3s", 3000);
    setTimeout(() => timerP.textContent = "Timer: 2s", 4000);
    setTimeout(() => timerP.textContent = "Timer: 1s", 5000);
    setTimeout(() => timerP.textContent = `Hello ${username}`, 6000);
}




// const PI = 3.14;
// console.log(`The value ${PI} is stored inside the variable PI`);
// console.log(typeof (PI));

// let online = true;
// console.log(`online is of type ${typeof (online)}`);



// console.log(`PI = ${Math.PI}`);
// console.log(`e = ${Math.E}`);
// console.log(`sin(90) rad = ${Math.sin(Math.PI / 2)}`);

// // window.alert(`This is an alert`);
// // username = window.prompt(`Whats your username?`); easy way for user input
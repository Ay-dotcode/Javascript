let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myP").textContent = `Your username is ${username}`;
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
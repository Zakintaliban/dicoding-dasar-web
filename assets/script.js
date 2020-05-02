"use stricts";

function magic() {
    let name = prompt("👋 Hello! What's your name?");
    let length = name.length;

    if (length > 0) {
        document.getElementById("name").innerHTML = `Hello ${name}. welcome to my website`;
    }
    else{
        let name = alert("your name cannot be empty");
        magic();
    }
}

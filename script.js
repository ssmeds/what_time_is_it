// Create element and give it a classname
let div = document.createElement("div");
div.className = "clockDiv";

// Append the div to the body
document.body.appendChild(div);

// Set interval for the clock-function to run
setInterval(function () {
    clock();
}, 1000); // The interval is 1000 milliseconds = 1 second

// Function for displaying the time
function clock() {
    div.innerHTML = "";
    // Declaring that "today" is a new method which we will later use
    let today = new Date();
    // Displaying the hours, minutes and seconds
    div.innerHTML = `${String(today.getHours()).padStart(2,"0")} : ${String(today.getMinutes()).padStart(2,"0")} : ${String(today.getSeconds()).padStart(2,"0")}`;

};
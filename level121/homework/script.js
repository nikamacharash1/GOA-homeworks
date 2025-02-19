// Basic Callback - Logging a Message with Delay
function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greet("Alice", () => console.log("Greeting complete."));

// Callback with Time Delay (Simulate a Process)
function delayedMessage(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}

delayedMessage("Processing data...", () => console.log("Process completed!"));

// Callback for Array Manipulation with Delay
function squareNumbers(numbers, callback) {
    setTimeout(() => {
        const squared = numbers.map(num => num * num);
        callback(squared);
    }, 2000);
}

squareNumbers([1, 2, 3, 4], result => console.log("Squared Numbers:", result));

// Color Change Example with DOM Manipulation and Delay
function changeTextColor(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000);
}

changeTextColor("red", (color) => {
    document.body.style.color = color;
    console.log("Text color changed to", color);
});

// Interactive Callback with User Input and Delay
function askUserName() {
    const name = prompt("Enter your name:");
    setTimeout(() => {
        alert(`Congratulations, ${name}! You helped successfully!`);
    }, 3000);
}

askUserName();

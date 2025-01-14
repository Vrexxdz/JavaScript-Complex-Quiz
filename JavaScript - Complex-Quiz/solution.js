/*! Here is the right code I hope you liked the quiz !*/

// Question 1: Corrected
async function question1() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log("Question 1 result:", data.title);
    } catch (error) {
        console.error("Question 1 error:", error);
    }
}

// Question 2: Corrected
function question2() {
    let person = {
        name: "Alice",
        greet: function() {
            console.log(`Hello, my name is ${this.name}`); // Expected result: "Hello, my name is Alice"
        }
    };
    setTimeout(() => person.greet(), 1000);
}

// Question 3: Corrected
function question3() {
    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) { // The error was using "<=" instead of "<"
        console.log("Array value:", array[i]); // Expected result: Output all values in the array
    }
}

// Question 4: Corrected
function question4() {
    let num = "100";
    let result = parseInt(num, 10) * 10; // Added parseInt to ensure num is treated as a number
    console.log("Question 4 result:", result);
}

// Question 5: Corrected
function question5() {
    let x = 5;
    let y = "5";
    if (x == y) { // Changed from === to == for type conversion
        console.log("x and y are equal");
    } else {
        console.log("x and y are not equal");
    }
}

// Execute all questions
window.onload = function() {
    question1();
    question2();
    question3();
    question4();
    question5();
}

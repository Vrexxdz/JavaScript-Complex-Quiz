/*! Welcome to my JavaScript quiz have fun. All solutions are in the solution file !*/

// Question 1: What is the error?

async function question1() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log("Question 1 result:", data.title);
    } catch (error) {
        console.error("Question 1 error:", error);
    }
}

// Question 2: What is the error?
function question2() {
    let person = {
        name: "Alice",
        greet: function() {
            console.log(`Hello, my name is ${this.name}`); 
        }
    };
    setTimeout(person.greet, 1000);
}

// Question 3: What is the error?
function question3() {
    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i <= array.length; i++) {
        console.log("Array value:", array[i]); 
    }
}

// Question 4: What is the error?
function question4() {
    let num = "100";
    let result = num * 10; 
    console.log("Question 4 result:", result);
}

// Question 5: What is the error?
function question5() {
    let x = 5;
    let y = "5";
    if (x === y) { 
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

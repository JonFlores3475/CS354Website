// hello.ts
// Function to return a greeting message
var sayHello = function (name) {
    return "Hello, ".concat(name, "!");
};
// Add content to the webpage when loaded
document.addEventListener("DOMContentLoaded", function () {
    // Prompt the user for their name
    var inputName = prompt("What is your name?") || "World"; // Default to "World" if input is empty
    // Generate the greeting message
    var outputMessage = sayHello(inputName);
    // Add the problem statement
    var problemElement = document.getElementById("problem");
    if (problemElement) {
        problemElement.textContent = "Write a program that takes a name as input and outputs a greeting message. (Defaults to World)";
    }
    // Add the TypeScript solution
    var solutionElement = document.getElementById("solution");
    if (solutionElement) {
        solutionElement.textContent = "\nconst sayHello = (name: string): string => {\n  return `Hello, ${name}!`;\n};\n\nconst inputName = prompt(\"What is your name?\") || \"World\";\nconst outputMessage = sayHello(inputName);\n    ";
    }
    // Display the input and output
    var inputOutputElement = document.getElementById("input-output");
    if (inputOutputElement) {
        inputOutputElement.innerHTML = "\n      <p><strong>Input:</strong> ".concat(inputName, "</p>\n      <p><strong>Output:</strong> ").concat(outputMessage, "</p>\n    ");
    }
});

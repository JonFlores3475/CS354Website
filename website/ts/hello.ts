// hello.ts

// Function to return a greeting message
const sayHello = (name: string): string => {
    return `Hello, ${name}!`;
};

// Add content to the webpage when loaded
document.addEventListener("DOMContentLoaded", () => {
    // Prompt the user for their name
    const inputName = prompt("What is your name?") || "World"; // Default to "World" if input is empty

    // Generate the greeting message
    const outputMessage = sayHello(inputName);

    // Add the problem statement
    const problemElement = document.getElementById("problem");
    if (problemElement) {
        problemElement.textContent = "Write a program that takes a name as input and outputs a greeting message. (Defaults to World)";
    }

    // Add the TypeScript solution
    const solutionElement = document.getElementById("solution");
    if (solutionElement) {
        solutionElement.textContent = `
const sayHello = (name: string): string => {
  return \`Hello, \${name}!\`;
};

const inputName = prompt("What is your name?") || "World";
const outputMessage = sayHello(inputName);
    `;
    }

    // Display the input and output
    const inputOutputElement = document.getElementById("input-output");
    if (inputOutputElement) {
        inputOutputElement.innerHTML = `
      <p><strong>Input:</strong> ${inputName}</p>
      <p><strong>Output:</strong> ${outputMessage}</p>
    `;
    }
});

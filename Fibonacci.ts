// Function to calculate the nth Fibonacci number
function fibonacci(n: number): number {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }

    // Base cases
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1, c;

    for (let i = 3; i <= n; i++) {
        c = a + b; // Fibonacci relation
        a = b;
        b = c;
    }

    return b; // b will hold the nth Fibonacci number at the end
}

// Function to get input from user and display the result
function getFibonacciNumber(): void {
    const input = prompt("Enter the position (n) in the Fibonacci sequence:");

    if (input !== null) {
        const n = parseInt(input);

        if (isNaN(n) || n <= 0) {
            console.log("Please enter a valid positive integer.");
        } else {
            console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
        }
    } else {
        console.log("Input was cancelled.");
    }
}

// Run the program
getFibonacciNumber();

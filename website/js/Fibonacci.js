// Function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }
    // Base cases
    if (n === 1)
        return 0;
    if (n === 2)
        return 1;
    var a = 0, b = 1, c;
    for (var i = 3; i <= n; i++) {
        c = a + b; // Fibonacci relation
        a = b;
        b = c;
    }
    return b; // b will hold the nth Fibonacci number at the end
}
// Function to get input from user and display the result
function getFibonacciNumber() {
    var input = prompt("Enter the position (n) in the Fibonacci sequence:");
    if (input !== null) {
        var n = parseInt(input);
        if (isNaN(n) || n <= 0) {
            console.log("Please enter a valid positive integer.");
        }
        else {
            console.log("The ".concat(n, "th Fibonacci number is: ").concat(fibonacci(n)));
        }
    }
    else {
        console.log("Input was cancelled.");
    }
}
// Run the program
getFibonacciNumber();

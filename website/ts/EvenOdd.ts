function countEvenOdd(numbers: number[]): { even: number, odd: number } {
    let evenCount = 0;
    let oddCount = 0;

    // Iterate through the array and count even and odd numbers
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Return an object with the count of even and odd numbers
    return { even: evenCount, odd: oddCount };
}

// Prompt the user for input in the browser (comma-separated integers)
const input = prompt("Enter a list of integers, separated by commas:");
if (input) {
    // Convert the input string into an array of numbers
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

    // Get the result and log it
    const result = countEvenOdd(numbers);
    console.log(result);  // This will show the result in the browser's console
} else {
    console.log("No input provided.");
}

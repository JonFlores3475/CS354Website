function countEvenOdd(numbers) {
    var evenCount = 0;
    var oddCount = 0;
    // Iterate through the array and count even and odd numbers
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 2 === 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
    // Return an object with the count of even and odd numbers
    return { even: evenCount, odd: oddCount };
}
// Prompt the user for input in the browser (comma-separated integers)
var input = prompt("Enter a list of integers, separated by commas:");
if (input) {
    // Convert the input string into an array of numbers
    var numbers = input.split(',').map(function (num) { return parseInt(num.trim(), 10); });
    // Get the result and log it
    var result = countEvenOdd(numbers);
    console.log(result); // This will show the result in the browser's console
}
else {
    console.log("No input provided.");
}

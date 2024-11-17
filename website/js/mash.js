var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define categories and options
var categories = {
    home: ["Mansion", "Apartment", "Shack", "House"],
    spouse: [
        "Taylor Swift",
        "Chris Hemsworth",
        "Zendaya",
        "Ryan Reynolds",
        "Emma Watson",
        "Tom Holland",
        "Scarlett Johansson",
        "Keanu Reeves",
    ],
    car: [
        "Tesla", "Bicycle", "Motorcycle", "Bus",
        "Ferrari", "Skateboard", "SUV", "Horse"
    ],
    career: [
        "Doctor", "Engineer", "Artist", "Teacher",
        "Chef", "Pilot", "Actor", "Scientist"
    ],
    kids: ["0", "1", "2", "3", "4", "5+"],
    salary: [
        "$30,000/year", "$50,000/year", "$75,000/year",
        "$100,000/year", "$200,000/year", "Infinite Riches"
    ]
};
// Function to eliminate options using the magic number
function eliminateCategory(options, number) {
    var index = 0;
    while (options.length > 1) {
        index = (index + number - 1) % options.length; // Circular elimination
        options.splice(index, 1); // Remove the option
    }
    return options[0]; // Return the last remaining option
}
// Function to start the counter and handle game logic
function startCounter() {
    var counterElement = document.getElementById("counter");
    var stopButton = document.getElementById("stopButton");
    var resultsElement = document.getElementById("results");
    var count = 0;
    var interval;
    // Reset game state
    function resetGame() {
        resultsElement.innerHTML = ""; // Clear previous results
        counterElement.textContent = "Counter: 1"; // Reset counter display
        stopButton.disabled = false; // Re-enable the stop button
        startCounter(); // Restart the counter
    }
    // Update the counter every 500ms
    interval = setInterval(function () {
        count = (count % 10) + 1; // Loop the counter from 1 to 10
        counterElement.textContent = "Counter: ".concat(count);
    }, 500);
    // Stop the counter when the button is clicked
    stopButton.addEventListener("click", function () {
        if (interval !== undefined)
            clearInterval(interval); // Stop the counter
        counterElement.textContent = "Counter stopped at: ".concat(count);
        // Generate MASH results
        var results = {};
        for (var _i = 0, _a = Object.entries(categories); _i < _a.length; _i++) {
            var _b = _a[_i], category = _b[0], options = _b[1];
            results[category] = eliminateCategory(__spreadArray([], options, true), count);
        }
        // Display the results
        var resultHTML = "<h2>Your Future:</h2>";
        for (var _c = 0, _d = Object.entries(results); _c < _d.length; _c++) {
            var _e = _d[_c], category = _e[0], result = _e[1];
            resultHTML += "<p><strong>".concat(category.charAt(0).toUpperCase() + category.slice(1), ":</strong> ").concat(result, "</p>");
        }
        resultHTML += "<button id=\"playAgainButton\">Play Again</button>";
        resultsElement.innerHTML = resultHTML;
        stopButton.disabled = true; // Disable the stop button after the game ends
        // Add event listener to the "Play Again" button
        document.getElementById("playAgainButton").addEventListener("click", resetGame);
    });
}
// Start the game once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    startCounter();
});

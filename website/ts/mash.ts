// Define categories and options
const categories = {
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
function eliminateCategory(options: string[], number: number): string {
    let index = 0;

    while (options.length > 1) {
        index = (index + number - 1) % options.length; // Circular elimination
        options.splice(index, 1); // Remove the option
    }

    return options[0]; // Return the last remaining option
}

// Function to start the counter and handle game logic
function startCounter() {
    const counterElement = document.getElementById("counter")!;
    const stopButton = document.getElementById("stopButton") as HTMLButtonElement;
    const resultsElement = document.getElementById("results")!;
    let count = 0;
    let interval: number | undefined;

    // Reset game state
    function resetGame() {
        resultsElement.innerHTML = ""; // Clear previous results
        counterElement.textContent = "Counter: 1"; // Reset counter display
        stopButton.disabled = false; // Re-enable the stop button
        startCounter(); // Restart the counter
    }

    // Update the counter every 500ms
    interval = setInterval(() => {
        count = (count % 10) + 1; // Loop the counter from 1 to 10
        counterElement.textContent = `Counter: ${count}`;
    }, 500) as unknown as number;

    // Stop the counter when the button is clicked
    stopButton.addEventListener("click", () => {
        if (interval !== undefined) clearInterval(interval); // Stop the counter
        counterElement.textContent = `Counter stopped at: ${count}`;

        // Generate MASH results
        const results: Record<string, string> = {};
        for (const [category, options] of Object.entries(categories)) {
            results[category] = eliminateCategory([...options], count);
        }

        // Display the results
        let resultHTML = "<h2>Your Future:</h2>";
        for (const [category, result] of Object.entries(results)) {
            resultHTML += `<p><strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong> ${result}</p>`;
        }
        resultHTML += `<button id="playAgainButton">Play Again</button>`;
        resultsElement.innerHTML = resultHTML;

        stopButton.disabled = true; // Disable the stop button after the game ends

        // Add event listener to the "Play Again" button
        document.getElementById("playAgainButton")!.addEventListener("click", resetGame);
    });
}

// Start the game once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    startCounter();
});

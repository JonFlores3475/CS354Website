// Define categories and their respective options.
// In TypeScript, we explicitly define the type of `categories` as an object
// with string keys and values that are arrays of strings.
const categories: { [key: string]: string[] } = {
    // Each key is a category name (e.g., "home") and its value is an array of possible outcomes.
    home: ["Mansion", "Apartment", "Shack", "House"],
    spouse: [
        "Taylor Swift", "Chris Hemsworth", "Zendaya", "Ryan Reynolds",
        "Emma Watson", "Tom Holland", "Scarlett Johansson", "Keanu Reeves"
    ],
    car: ["Tesla", "Bicycle", "Motorcycle", "Bus", "Ferrari", "Skateboard", "SUV", "Horse"],
    career: ["Doctor", "Engineer", "Artist", "Teacher", "Chef", "Pilot", "Actor", "Scientist"],
    kids: ["0", "1", "2", "3", "4", "5+"],
    salary: [
        "$30,000/year", "$50,000/year", "$75,000/year",
        "$100,000/year", "$200,000/year", "Infinite Riches"
    ]
};

// ---- EXPLANATION ----
// { [key: string]: string[] }
// - This syntax means:
//   1. `[key: string]` defines that the object can have any number of string keys.
//   2. `string[]` specifies that each key's value is an array of strings.
// - In Java, you’d need something like a `Map<String, List<String>>`.
// - TypeScript has flexible, dynamic objects that make this simpler than Java's generics-heavy syntax.

/**
 * Function to eliminate options using a "magic number"
 * 
 * @param options - The array of strings representing the category's options.
 * @param number - The "magic number" to determine which options are eliminated.
 * @returns The last remaining option in the category.
 */
function eliminateCategory(options: string[], number: number): string {
    // ---- EXPLANATION ----
    // string[]: This explicitly declares that `options` is an array of strings.
    // number: TypeScript enforces that the second argument is a number.
    // string: The function itself will return a string, and TypeScript will check this.
    
    let index = 0; // Initialize index to track position in the array

    // While there is more than one option, eliminate options in a circular manner
    while (options.length > 1) {
        // ---- EXPLANATION ----
        // `%` (modulus operator): Works the same in Java and TypeScript.
        // options.splice(index, 1): Removes the element at the current index.
        index = (index + number - 1) % options.length;
        options.splice(index, 1); // Removes one option based on the "magic number."
    }
    return options[0]; // Return the last remaining option
}

// ---- EXPLANATION ----
// Differences from Java:
// - In Java, array types would be written as `String[]` or `List<String>`.
// - TypeScript's `string[]` syntax is simpler and explicitly checked at compile-time.
// - The dynamic resizing of `options` (via `splice()`) is native to JavaScript and TypeScript; in Java, you'd likely use an `ArrayList`.

/**
 * Start the counter and handle the game's logic.
 */
function startCounter(): void {
    // ---- EXPLANATION ----
    // void: Explicitly declares that this function does not return any value.
    // In Java, void is similar, but in TypeScript, this is type-checked.
    
    // Use `document.getElementById` to access HTML elements for the counter and button
    const counterElement = document.getElementById("counter")!; // Non-null assertion (!)
    const stopButton = document.getElementById("stopButton") as HTMLButtonElement; // Type assertion
    const resultsElement = document.getElementById("results")!; // Non-null assertion (!)

    // ---- EXPLANATION ----
    // Non-null assertion (`!`): Ensures TypeScript that the element is not null.
    // This is important because TypeScript enforces strict null safety.
    // In Java, null checks are handled manually or via `Optional`.

    let count = 0; // Initialize the counter variable
    let interval: number | undefined; // Declare a variable for the interval (can be undefined initially)

    // Reset the game state for replayability
    function resetGame() {
        resultsElement.innerHTML = ""; // Clear previous results
        counterElement.textContent = "Counter: 1"; // Reset the counter display
        stopButton.disabled = false; // Re-enable the stop button
        startCounter(); // Restart the counter
    }

    // Update the counter every 500 milliseconds
    interval = setInterval(() => {
        count = (count % 10) + 1; // Increment and reset the counter to loop from 1 to 10
        counterElement.textContent = `Counter: ${count}`; // Update the counter on the webpage
    }, 500) as unknown as number;

    // ---- EXPLANATION ----
    // setInterval: Similar to Java's `ScheduledExecutorService`, but simpler and part of JavaScript's core runtime.
    // TypeScript adds a stricter type (`number | undefined`) to handle `setInterval` return values.

    // Stop the counter when the user clicks the "Stop" button
    stopButton.addEventListener("click", () => {
        if (interval !== undefined) clearInterval(interval); // Stop the counter
        counterElement.textContent = `Counter stopped at: ${count}`; // Display the final count

        // Generate results for each category using the final count
        const results: Record<string, string> = {};
        for (const [category, options] of Object.entries(categories)) {
            results[category] = eliminateCategory([...options], count); // Generate results for each category
        }

        // Display the results dynamically in the DOM
        let resultHTML = "<h2>Your Future:</h2>";
        for (const [category, result] of Object.entries(results)) {
            resultHTML += `<p><strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong> ${result}</p>`;
        }
        resultHTML += `<button id="playAgainButton">Play Again</button>`;
        resultsElement.innerHTML = resultHTML;

        stopButton.disabled = true; // Disable the stop button to prevent further interaction

        // Add event listener to the "Play Again" button
        document.getElementById("playAgainButton")!.addEventListener("click", resetGame);
    });
}

// ---- EXPLANATION ----
// Differences from Java:
// - Java doesn't natively have dynamic DOM manipulation. You'd use a library like Java Server Pages (JSP) or frameworks like Spring to update HTML dynamically.
// - In TypeScript, `addEventListener` attaches a click handler directly, leveraging JavaScript's native event system.

/**
 * Start the game when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
    startCounter();
});

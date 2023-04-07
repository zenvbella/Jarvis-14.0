function saveInput() {
    // Get the input field
    var input = document.getElementById("question");

    // Get the value of the input field
    var userInput = input.value;

    // Save the user input as another variable
    var savedInput = userInput;

    // Create a new HTML element
    var outputDiv = document.createElement("div");

    // Set the innerHTML of the new element to the saved input
    outputDiv.innerHTML = savedInput;

    // Append the new element to the output div
    var outputContainer = document.getElementById("output");
    outputContainer.appendChild(outputDiv);

    // Add a keydown event listener to the input field
    input.addEventListener("keydown", function (event) {
        if (event.code === "Tab") {
            // Prevent the default tab behavior (moving focus to the next element)
            event.preventDefault();

            // Do something when the user presses the tab key
            console.log("Tab key pressed!");
        }
    });
}

const button = document.getElementById("generateAnswer");

button.addEventListener('click', function () {
    saveInput();
})



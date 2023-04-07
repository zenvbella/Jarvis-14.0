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
}

const button = document.getElementById("generateAnswer");

button.addEventListener('click', function () {
    saveInput();
})



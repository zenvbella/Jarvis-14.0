// function saveInput() {
//     // Get the input field
//     var input = document.getElementById("question");

//     // Get the value of the input field
//     var userInput = input.value;

//     // Save the user input as another variable
//     var savedInput = userInput;

//     // Create a new HTML element
//     var outputDiv = document.createElement("div");

//     // Set the innerHTML of the new element to the saved input
//     outputDiv.innerHTML = savedInput;

//     // Append the new element to the output div
//     var outputContainer = document.getElementById("output");
//     outputContainer.appendChild(outputDiv);

// }



// const generateAnswer = document.getElementById("generateAnswer");

// generateAnswer.addEventListener('click', function () {
//     saveInput();
// })

let input1 = document.querySelectorAll('input')[0],
    log1 = document.getElementById('value1'),
    log2 = document.getElementById('value2');

//input1.addEventListener('input', updateValue1);

input1.addEventListener("input", (e) => {
    console.log(e.data);
    var entry = input1.value;
    log1.textContent = entry.length;
    log2.textContent = input1.value;


    if (e.data === "q") {
        console.log("Letter Q was pressed!");
        log2.textContent = e.data;
    }
  });


function updateValue1(e) {
  log1.textContent = input1.value;
}




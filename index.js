const answers = document.querySelectorAll(".answer");

answers.forEach(answer => {
  answer.addEventListener("click", () => {
    handleAnswerSelection(answer);
  });
});


let score = 0;
function handleAnswerSelection(selectedButton) {
  const answerButtons = document.querySelectorAll('.answer');

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  
  
    
    answerButtons.forEach(button => {
        if (selectedButton.dataset.correct === 'true') {
            score += 10;
            selectedButton.classList.add('green');
          } else {
              button.classList.add('red');
          }
      });


        const mainContainer = document.querySelector('.main-container');
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-message');

        const resultImage = document.createElement('img');
        resultImage.classList.add("result-image")


        if (selectedButton.dataset.correct === "true") {
        resultDiv.textContent = "❤️ Você é a barbie ❤️";
        resultImage.src = './images/winner.webp';
        } else if (selectedButton.dataset.correct === "false") {
        resultDiv.textContent = "😢 Você é o Lula 😢";
        resultImage.src = './images/loser.jpg';
        }


        resultContainer.appendChild(resultDiv);
        resultContainer.appendChild(resultImage);
        mainContainer.appendChild(resultContainer);
}

function saveToLocalStorage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() !== "") {
      let savedTopics = JSON.parse(localStorage.getItem("topics")) || [];
      savedTopics.push(userInput);
      localStorage.setItem("topics", JSON.stringify(savedTopics));
      displaySavedTopics();
      document.getElementById("userInput").value = "";
  }
}

function displaySavedTopics() {
  const savedTopics = JSON.parse(localStorage.getItem("topics")) || [];
  const savedTopicsList = document.getElementById("savedTopics");

  savedTopicsList.innerHTML = "";

  savedTopics.forEach((topic) => {
      const listItem = document.createElement("li");
      listItem.textContent = topic;
      savedTopicsList.appendChild(listItem);
  });
}

displaySavedTopics();

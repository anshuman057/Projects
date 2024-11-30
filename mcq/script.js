const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: 1, // Index of the correct answer in the options array
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: 3,
  },
  // Add more questions here...

  {
    question: "What is the largest country in the world by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    answer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: 0,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    answer: 1,
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Camel", "Horse", "Donkey", "Goat"],
    answer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Hg", "Fe"],
    answer: 1,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2,
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    answer: 3,
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: 2,
  },
  {
    question: "What is the tallest land animal?",
    options: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
    answer: 0,
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: 2,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Rupee", "Yen", "Won"],
    answer: 2,
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Rome", "London", "Paris", "Berlin"],
    answer: 2,
  },
  {
    question: "Who painted the famous artwork 'The Scream'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Edvard Munch",
      "Claude Monet",
    ],
    answer: 2,
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Gobi Desert",
      "Sahara Desert",
      "Arabian Desert",
      "Kalahari Desert",
    ],
    answer: 1,
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    answer: 1,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: 0,
  },
  {
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    answer: 0,
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'?",
    options: [
      "Jane Austen",
      "Charlotte Brontë",
      "Emily Brontë",
      "Virginia Woolf",
    ],
    answer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1,
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: 0,
  },
  {
    question: "What is the largest freshwater lake in the world?",
    options: ["Lake Superior", "Lake Huron", "Lake Michigan", "Lake Baikal"],
    answer: 3,
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Marie Curie",
    ],
    answer: 2,
  },
];

const questionElement = document.querySelector(".question");
const optionsElement = document.getElementById("options-container");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = ""; // Clear previous options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;

    // Highlight selected option
    if (selectedAnswers[currentQuestionIndex] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => selectAnswer(index, button));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selectedOptionIndex, button) {
  selectedAnswers[currentQuestionIndex] = selectedOptionIndex;

  // Remove 'selected' class from all buttons
  const buttons = optionsElement.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Add 'selected' class to the clicked button
  button.classList.add("selected");
}

backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
});

submitButton.addEventListener("click", () => {
  const score = selectedAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].answer ? acc + 1 : acc;
  }, 0);

  // Display score and reset button
  optionsElement.innerHTML = `<p>Score: ${score}</p><button id="reset">Restart</button>`;

  // Add event listener for reset button
  document.getElementById("reset").addEventListener("click", resetQuiz);
});

function resetQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = Array(questions.length).fill(null);
  loadQuestion();
}

// Load the first question when the page loads
loadQuestion();

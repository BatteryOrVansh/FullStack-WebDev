document.addEventListener("DOMContentLoaded", () => {
  
  const questionContainer = document.getElementById('question-container'); 
  const questionText = document.getElementById('question-text');
  const choicesList = document.getElementById('choices-list');
  const nextBtn = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreDisplay = document.getElementById('score');
  const restartBtn = document.getElementById('restart-btn'); 
  const startBtn = document.getElementById('start-btn');
  

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

});

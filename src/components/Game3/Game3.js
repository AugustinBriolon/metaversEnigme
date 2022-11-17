import React from "react";
import "./App.css";
import { questions } from "./Questions";
import { useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          <p className="paragraph">Your score is {score} out of {questions.length}</p>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1 className="question">
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p className="paragraph">{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

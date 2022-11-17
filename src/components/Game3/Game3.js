import React from "react";
import { questions } from "./Questions";
import { useNavigate } from "react-router-dom"

export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  let navigate = useNavigate();

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setTimeout(() => {
        navigate('/test2')
      }, 2000)
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
          <div className="question-section">
            <h1 className="question">
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p className="paragraph">{questions[currentQuestion].questionText}</p>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)} className="choice">
                {item.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

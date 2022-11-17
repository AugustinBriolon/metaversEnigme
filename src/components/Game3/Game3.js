import React from "react";
import { useState } from "react";
import { questions } from "./Questions";
import { useNavigate } from "react-router-dom"

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
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
    }

    console.log(currentQuestion);
    console.log(score);

    if (currentQuestion === 2) {
      if (score === 2) {
        setTimeout(() => {
          navigate("/test3")
        }, 2000);
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }

  };

  return (
    <div className="container3">
      <h1 className='quizz'>QUIZZ CD</h1>
      <h3 className='last'>Dernière étape pour percer le secret de IIMVERSE, en serez-vous capable ?</h3>
      {showScore ? (
        <div className="showScore-section">
          <h3>Votre score est de {score} sur {questions.length}</h3>
          {score < 2 ? <h3>Recommencer !</h3> : <h3>Bravo !</h3>}
        </div>
      ) : (
        <>
          <div className="app">
            <img src={questions[currentQuestion].questionImage}></img>

            <div>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}

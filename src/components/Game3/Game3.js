import React from "react";
import { questions } from "./Questions";
import { useNavigate } from "react-router-dom";
import imgEnd from '../../assets/img/Images_Meta.png'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  let navigate = useNavigate();
  console.log(questions[currentQuestion].questionImage);

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
        navigate('/test3')
      }, 2000)
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          <p>Test fini</p>
          <p className="paragraph">Votre score est de {score} sur {questions.length}</p>
        </section>
      ) : (
        <>
          <div className="question-section">
            <h1 className="question">
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p className="paragraph">{questions[currentQuestion].questionText}</p>
            <img src={questions[currentQuestion].questionImage}></img>
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

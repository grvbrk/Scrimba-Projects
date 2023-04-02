import React from "react";
import Quiz from "./Quiz";
import { v4 as uuid } from "uuid";
// import Intro from './Intro'

export default function App() {
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(function () {
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuiz(data.results);
      });
  }, []);

function toggleCheckBtn(){

}



  const quizElements = quiz.map(function (item) {
    return (
      <Quiz
        key={uuid()}
        question={item.question}
        corrAnswer={item.correct_answer}
        incorrAnswer={item.incorrect_answers}
      />
    );
  });

  return (
    <div className="main-container">
      {/* <Intro /> */}
      <div className="quiz-elements-container">{quizElements}</div>
      <button className="check-answer-btn" onClick={toggleCheckBtn}> Check Answer </button>
    </div>
  );
}

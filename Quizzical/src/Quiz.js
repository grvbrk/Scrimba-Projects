import React from "react";
import Options from "./Options";
import { v4 as uuid } from "uuid";

export default function Quiz(props) {
  return (
    <div className="quiz-container">
      <p className="quiz-question">{props.question}</p>
      <div className="quiz-option-list">
        <Options option={props.corrAnswer} handleClick={function(e){
          
        }}/>
        <Options option={props.incorrAnswer[0]} />
        <Options option={props.incorrAnswer[1]} />
        <Options option={props.incorrAnswer[2]} />
      </div>
    </div>
  );
}

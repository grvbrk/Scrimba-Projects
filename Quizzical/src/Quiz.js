import React from "react";
import Options from "./Options";
import { v4 as uuid } from "uuid";

export default function Quiz(props) {
  return (
    <div className="quiz-container">
      <p className="quiz-question">{props.question}</p>
      <div className="quiz-option-list">
        
        <Options key={uuid()} value={props.incorrAnswer[0]} id={uuid()}/>
        <Options key={uuid()} value={props.incorrAnswer[1]} id={uuid()}/>
        <Options key={uuid()} value={props.incorrAnswer[2]} id={uuid()}/>
        <Options key={uuid()} value={props.corrAnswer} id={uuid()}/>
    

        
        
        {/* <p className="options">{props.incorrAnswer[0]}</p>
        <p className="options">{props.incorrAnswer[1]}</p>
        <p className="options">{props.incorrAnswer[2]}</p>
        <p className="options">{props.corrAnswer}</p> */}
      </div>
    </div>
  );
}

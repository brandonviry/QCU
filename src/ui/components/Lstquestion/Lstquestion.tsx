import "./Lstquestioin.css";

import Question from "../Question/Question";

import { useState } from "react";
function LstQuestion({
  Data,
}: {
  Data: {
    Question: string;
    Response: string[];
    Bonne: string;
  }[];
}) {
  const lstQuestion = Data;
  const [score, setScore] = useState(0);
  const total = Data.length;

  const inc = () => {
    setScore(score + 1);
  };

  return (
    <div className="lstQuestion">
      <h1>
        Questionnaire{" "}
        <span className="score">
          {score} / {total}
        </span>
      </h1>

      {lstQuestion.map((elt, index) => {
        return (
          <Question
            identifiant={index.toString()}
            question={elt.Question}
            reponse={elt.Response}
            bonne={elt.Bonne}
            onClick={inc}
          />
        );
      })}
    </div>
  );
}

export default LstQuestion;

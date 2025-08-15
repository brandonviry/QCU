import { useState } from "react";
import "./Question.css";

export default function Question({
  identifiant,
  question,
  reponse,
  bonne,
  onClick,
}: {
  identifiant: string;
  question: string;
  reponse: string[];
  bonne: string;
  onClick: () => void;
}) {
  const [choix, setChoix] = useState(false);
  const [rp, setRp] = useState<string | null>(null);
  return (
    <form className="question" id={identifiant}>
      <h1>{question}</h1>
      <fieldset>
        <legend>{choix ? "Résultat :" : "Choisir un reponse :"}</legend>
        {choix ? (
          <h1>
            {bonne === rp ? (
              <span className="bravo"> BRAVO </span>
            ) : (
              <span className="echec"> ECHEC</span>
            )}
          </h1>
        ) : (
          reponse.map((elt, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name={"question" + identifiant}
                  value={elt}
                  onClick={() => {
                    setChoix(true);
                    setRp(elt);
                    if (bonne === elt) {
                      onClick();
                    }
                  }}
                />
                <label htmlFor={"reponse" + index.toString()}>{elt}</label>
              </div>
            );
          })
        )}
      </fieldset>
    </form>
  );
}

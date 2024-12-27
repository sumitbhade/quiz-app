import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answersState,
  onSelect,
}) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answersState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClasses = answersState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answersState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

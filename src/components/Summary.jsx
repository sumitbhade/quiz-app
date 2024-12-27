import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  let skipped = 0,
    correct = 0,
    wrong = 0;

  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === null) {
      skipped += 1;
    } else if (userAnswers[i] === QUESTIONS[i].answers[0]) {
      correct += 1;
    } else {
      wrong += 1;
    }
  }

  const skippedPercentage = Math.round((skipped / 7) * 100);
  const correctPercentage = Math.round((correct / 7) * 100);
  const wrongPercentage = Math.round((wrong / 7) * 100);

  /* Second way of doing that would be using filter

  const skippedAnswers= userAnswers.filter((answer)=> answer===null);
  const skippedAnswersPercentage=Math.round((skippedAnswers.length/userAnswers.length)*100);

  */

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="Quiz complete logo" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{Math.round(correctPercentage)}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{Math.round(wrongPercentage)}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
